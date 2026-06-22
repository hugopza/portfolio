---
title: "Stride"
summary: "A mobile app that generates realistic running routes using constraint-based candidate generation and scoring."
type: "mobile"
status: "completed"
featured: true
order: 1
role: "Product design + mobile architecture + implementation"
duration: "2026"
team: "Solo"
stack:
  - "Expo"
  - "React Native"
  - "TypeScript"
  - "OpenRouteService"
  - "OpenStreetMap"
  - "Supabase (planned)"
context: "Most running apps focus on tracking activities, but offer limited support for planning routes based on constraints like distance, time, or surface."
problem: "How do you generate usable running routes that approximate distance, surface, and user intent without relying on exact routing solutions?"
constraints:
  - "Routes must be usable, not mathematically exact."
  - "Generation must feel fast and responsive on mobile."
  - "Support both circular and point-to-point routes."
  - "Initial versions must work without a full backend."
outcomes:
  - "Built a working MVP capable of generating multiple route candidates and exporting GPX."
  - "Implemented a routing pipeline based on candidate generation and scoring."
  - "Validated a product direction focused on planning rather than tracking."
  - "Prepared the architecture for real routing and persistence."
highlights:
  - "Generates multiple route candidates instead of a single path."
  - "Scores routes based on distance, surface, and usability."
  - "Supports circular and point-to-point routing."
  - "Exports routes as GPX for real-world usage."
decisions:
  - title: "Prioritize planning over tracking"
    rationale: "Users already rely on devices like watches or Strava for tracking. Focusing on planning provides immediate value with less complexity."
    tradeoff: "No native tracking or live navigation in MVP."
  - title: "Start with synthetic route generation"
    rationale: "Allowed fast iteration on UX and system behavior without depending on external routing APIs."
    tradeoff: "Initial routes were not based on real-world paths."
  - title: "Integrate OpenRouteService for real routing"
    rationale: "Flexible routing profiles and more control compared to opinionated providers."
    tradeoff: "Required additional logic for constraint matching and candidate filtering."
  - title: "Defer backend and persistence"
    rationale: "Focused development on core value (route generation) before user systems."
    tradeoff: "No saved routes or user profiles initially."
links:
  repo: "https://github.com/hugopza/stride-routes"
---

## Implementation

Stride is built as a mobile-first route planning system.

Core flow:
- user defines constraints (start point, route type, distance or time, preferences)
- system generates multiple candidate routes
- candidates are scored and filtered
- user previews routes on a map
- selected route can be exported as GPX

Early versions used synthetic geometry to validate the pipeline and UX before integrating real routing providers.

---

## Technical shape

The system is structured around a clear separation of concerns:

- mobile UI with React Native (Expo)
- map rendering via `react-native-maps`
- route generation pipeline (candidate generation + scoring)
- GPX export using filesystem + native sharing
- routing provider layer (OpenRouteService)

The core logic is not a simple directions query, but a pipeline:


Input → Candidate generation → Scoring → Selection → Output (GPX)


Routing providers are progressively integrated to replace synthetic routes with real-world paths.

---

## Reflection

The main challenge is not computing routes, but generating usable ones.

Instead of returning a single optimal path, the system generates multiple candidates and selects the best options based on practical constraints.

In this context, approximate but usable routes are more valuable than theoretically optimal ones.