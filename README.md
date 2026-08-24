# Hugo Pérez — Portfolio

A lightweight single-page portfolio rebuilt in React from the approved `v1.3 balanced about` HTML design.

## Stack

- React 19 and strict TypeScript
- Vite
- Modern CSS with custom properties, Grid and Flexbox
- Native `IntersectionObserver`, `requestAnimationFrame` and pointer events
- ESLint and Prettier

There are no animation, UI, state-management or CSS framework dependencies.

## Commands

| Command                | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| `npm install`          | Install dependencies                        |
| `npm run dev`          | Start the local server on port 3000         |
| `npm run build`        | Type-check and create the production bundle |
| `npm run preview`      | Preview the production bundle               |
| `npm run lint`         | Run ESLint                                  |
| `npm run typecheck`    | Run strict TypeScript checks                |
| `npm run format:check` | Verify formatting                           |

## Content and structure

- Editable portfolio data lives in `src/data/portfolio.ts`.
- Meaningful page blocks live in `src/sections/`.
- Shared behavioral UI lives in `src/components/`.
- Global design tokens and responsive rules live in `src/styles/global.css`.
- Replace `src/assets/hugo-perez.jpg` to update the portrait while preserving its filename and dimensions.

Project and social URLs intentionally remain the placeholders from the approved source HTML. Update their `href` values in `src/data/portfolio.ts` when the final links are available.
