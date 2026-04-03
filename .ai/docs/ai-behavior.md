# AI Behavior Guidelines - neuraflow-core-layer

This document defines how an AI assistant should behave when working on the `neuraflow-core-layer` repository.

---

## General Principles

- Always preserve existing architecture and naming conventions.
- Always inspect neighboring files before creating a new component, utility, or style token.
- Prefer extending existing primitives over introducing parallel implementations.
- Keep this repository focused on shared layer concerns only (UI primitives, design tokens, shared utilities).
- Do not introduce app-specific business logic from `neuraflow-web` into this layer.

---

## Repository Scope

The assistant should treat this project as a shared Nuxt layer containing:

- Reusable UI components in `app/components/*` (e.g. `app-button`, `app-input`, `brand-logo`).
- Shared styling foundations in `app/assets/css/*` (`base.css`, `tailwind.css`, `tokens.css`).
- Utility helpers in `app/utils/*` and small composables in `app/composables/*`.
- Layer/runtime configuration in `nuxt.config.ts` and `tailwind.config.ts`.
- A showcase/testing sandbox in `sandbox/*`.

---

## When Adding or Updating Components

- Follow the current component folder pattern: one directory per component with `ComponentName.vue` and `index.ts`.
- Keep components presentational and reusable; avoid domain-specific terms and business rules.
- Use `<script setup lang="ts">` and strict typing.
- Reuse existing utilities (`cn`, tailwind helpers) instead of duplicating class merge logic.
- Keep variants centralized and consistent with existing CVA usage.

---

## When Working with Styling and Tokens

- Prefer token-based classes and CSS variables; avoid hardcoded colors, spacing, radius, and font sizes.
- Update `app/assets/css/tokens.css` only when introducing a truly reusable design token.
- Keep base/global styles in `base.css` minimal and generic.
- Keep Tailwind extension logic in `tailwind.config.ts` and `tailwind/plugins/*`.

---

## When Working with Utilities and Composables

- Add utilities only if they are generic and can be reused by many components/layers.
- Keep utility functions pure where possible.
- Do not add feature/business workflows to this repository.
- Preserve explicit exports via local `index.ts` files.

---

## TypeScript and Imports

- Respect strict TypeScript mode (`strict: true`, `typeCheck: true`).
- Avoid `any`; use `unknown` and narrow types explicitly.
- Keep `imports.scan: false` assumptions in mind: prefer explicit imports for local code.
- Keep imports ordered consistently with the existing ESLint setup.

---

## Validation and Quality Gates

- Before finishing, run checks relevant to modified files (`lint`, `typecheck`).
- Do not bypass formatting/linting rules; align code with ESLint, Stylelint, and Prettier.
- Keep commit style compatible with Conventional Commits.

---

## Sandbox Usage

- Use `sandbox/` for validating shared component behavior and visual checks.
- Do not place production app logic in sandbox files.
- Keep sandbox examples small and representative of real component usage.

---

## What NOT to Do

- Do not add feature-level modules (auth, dashboard, API workflows) in this repository.
- Do not duplicate existing components with slightly different names.
- Do not hardcode design values where tokens exist.
- Do not introduce breaking API changes for shared components without clear migration intent.
- Do not add heavy dependencies without clear cross-project reuse value.
