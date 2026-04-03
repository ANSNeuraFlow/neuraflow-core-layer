# Architecture Patterns - neuraflow-core-layer

## Layer Role

`neuraflow-core-layer` is a reusable Nuxt layer that provides shared presentation foundations:

- UI primitives and base components,
- design tokens and styling infrastructure,
- small generic utilities/composables used by many components.

It should not own feature-specific business behavior.

---

## High-Level Architecture

```text
consumer app (e.g. neuraflow-web)
    ↓ extends
neuraflow-core-layer
    ├── app/components      # shared primitives
    ├── app/assets/css      # base styles + tokens
    ├── app/utils           # shared helpers
    ├── app/composables     # tiny generic composables
    ├── tailwind.config.ts  # token/scale extensions
    └── nuxt.config.ts      # layer registration/config
```

---

## Component Pattern

Each component uses a folder-based structure:

```text
app/components/{component-name}/
├── ComponentName.vue
└── index.ts
```

Rules:

- `ComponentName.vue` holds implementation.
- `index.ts` re-exports component and related typed APIs.
- Shared components must stay generic and reusable across apps.

---

## Styling Pattern

- Tokens and global CSS foundations live in `app/assets/css`.
- Tailwind utilities are preferred over handwritten CSS.
- Variants should use existing CVA/tailwind merge approach from utilities.
- Tailwind customization is centralized in `tailwind.config.ts` and `tailwind/plugins`.

---

## Utility Pattern

- Shared helpers belong in `app/utils`.
- Keep helpers deterministic and side-effect free where possible.
- Aggregate exports through `app/utils/index.ts` for stable import paths.

---

## Sandbox Pattern

`sandbox/` is used as an isolated preview/testing layer for shared components:

- demo representative component states,
- verify tokens, variants, and interactions,
- avoid product-level logic or app-only integrations.

---

## Boundary Rules

- Allowed: shared design system concerns and low-level reusable helpers.
- Not allowed: feature modules, domain services, API flows, app routing logic.
- Any change that can break downstream apps should be treated as a compatibility-sensitive change.

---

## Import Pattern

- `imports.scan: false` means local code should rely on explicit imports.
- Keep import paths stable and predictable for consumer layers.
- Avoid hidden dependencies and cross-file side effects.
