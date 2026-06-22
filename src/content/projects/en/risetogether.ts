import type { ProjectContent } from "../../types";

export default {
  title: "RiseTogether",
  theme: "dark",
  tags: ["expo", "react", "typescript", "supabase", "kotlin"],
  description: "A social alarm app that combines reliable Android-native ringing with real-time group check-ins.<br/><br/>The product makes waking up harder to ignore by connecting native alarm delivery, lock-screen behavior, and social accountability.",
  components: [
    { type: "text", props: { title: "The challenge", text: "Modern Android background restrictions make reliable alarm delivery difficult. The app also has to coordinate native intents, JavaScript navigation, and real-time group state without duplicate flows." } },
    { type: "list", props: { title: "What I built", items: ["AlarmManager, BroadcastReceiver, foreground service and full-screen ringing UI", "Supabase Realtime group check-ins and awake progress", "Native-backed snooze with a strict two-snooze limit", "Cold-start and singleTask intent handling across app lifecycle states"], size: "md" } },
  ],
} as const satisfies ProjectContent;
