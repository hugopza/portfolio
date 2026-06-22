---
title: "RiseTogether"
summary: "A social alarm app that combines reliable Android-native ringing (foreground service + full-screen UI) with real-time group check-ins to make waking up harder to ignore."
type: "mobile"
status: "in-progress"
featured: true
order: 1
role: "Product design + mobile architecture + implementation"
duration: "2026"
team: "Solo"
stack:
  - "Expo"
  - "React Native"
  - "TypeScript"
  - "Supabase (Auth + Postgres + Realtime)"
  - "Android (Kotlin: AlarmManager + Foreground Service)"
context: "Most alarm apps are individual and easy to dismiss. Group accountability and real-time visibility ('who is already awake') can increase follow-through, but requires a reliable ringing pipeline under modern Android background restrictions."
problem: "How do you build a group alarm experience that is socially motivating while keeping the alarm delivery and ringing flow robust across lock screen, background execution, and app lifecycle edge cases?"
constraints:
  - "Ringing must be reliable under Android Doze/background limits (foreground service, wake lock, full-screen intent)."
  - "The UI must open from multiple entry points (cold start, app already running, notification tap) without double navigation."
  - "Group state must update in real time while the alarm is ringing."
  - "Snooze must be controlled and consistent across native and JS layers (max 2 snoozes per occurrence)."
outcomes:
  - "Built an end-to-end ringing pipeline on Android: AlarmManager → BroadcastReceiver → Foreground Service → full-screen ringing UI."
  - "Implemented real-time group check-ins backed by Supabase Realtime to show progress during ringing."
  - "Hardened navigation and intent bridging to handle cold starts and singleTask onNewIntent updates."
  - "Added native-backed snooze with occurrence IDs and a strict 2-snooze limit per ring cycle."
highlights:
  - "Reliable Android-native alarm delivery with foreground service + wake lock."
  - "Full-screen ringing experience that works from lock screen and notification entry points."
  - "Real-time group progress (awake count + members) via Supabase Realtime."
  - "Snooze with strict limit (2) per alarm occurrence to avoid infinite snoozing."
decisions:
  - title: "Use a native Android alarm pipeline instead of JS timers"
    rationale: "JS timers and background execution are not reliable for alarm delivery. AlarmManager + receiver + foreground service ensures the OS schedules and runs the alarm path."
    tradeoff: "Requires maintaining native Kotlin code alongside the Expo/React Native app."
  - title: "Model ringing as an occurrence with an occurrenceId"
    rationale: "A stable occurrence ID allows consistent behavior across service, activity, and React Navigation (e.g., limiting snooze and avoiding double-navigation)."
    tradeoff: "Requires propagating extras end-to-end (receiver → service → activity → main intent → JS)."
  - title: "Foreground service + full-screen intent for ringing UX"
    rationale: "Modern Android restricts background starts; foreground notification and full-screen intent are the most robust way to surface a ringing UI while keeping audio playing."
    tradeoff: "Must handle notification permissions (Android 13+) and OEM-specific behavior."
  - title: "Supabase Realtime for shared wake-up state"
    rationale: "Realtime subscriptions keep the ringing screen updated without polling, enabling a live group accountability loop."
    tradeoff: "Requires schema/RLS discipline and careful event handling to avoid UI churn."
links:
  repo: "https://github.com/hugopza/RiseTogether"
---

## Implementation

RiseTogether is built as a mobile-first group alarm system with an Android-native ringing core.

Core flow:
- user joins or creates a group
- user creates an alarm for the group (time + optional repeat days, and per-alarm options like allow snooze)
- at ring time, Android triggers the alarm reliably (AlarmManager)
- the app opens a full-screen ringing UI on top of the lock screen
- users confirm wake-up by stopping the alarm, which records a check-in
- the ringing screen shows live group progress (awake count + members) via realtime updates

Snooze flow (strict limit):
- ring → snooze → ring → snooze → ring (snooze disabled; stop required)

---

## Technical shape

The system is structured around a separation between:
- Expo/React Native UI + navigation
- Supabase backend (auth + persistence + realtime)
- Android-native alarm/ringing pipeline (Kotlin)

Key components:
- alarm scheduling via `AlarmManager.setExactAndAllowWhileIdle`
- delivery via `BroadcastReceiver` starting a foreground `Service`
- ringing UX via `fullScreenIntent` + `AlarmRingingActivity` (show on lock screen, turn screen on)
- intent bridging to JS (`MainActivity` + in-memory holder) to support cold start and `singleTask` `onNewIntent`
- realtime group updates via Supabase `postgres_changes` subscription on check-ins

The core logic is not “just show a screen”: it is a reliable OS-level pipeline plus a realtime social feedback loop.