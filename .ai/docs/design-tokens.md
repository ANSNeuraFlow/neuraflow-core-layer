# Design Tokens - neuraflow-core-layer

## Purpose

This document defines how to work with design tokens in `neuraflow-core-layer`.

Tokens are the single source of truth for shared visual values used by NeuraFlow UI primitives and consumer applications.

---

## Source of Truth

- Core token definitions are stored in `app/assets/css/tokens.css`.
- Tailwind token mapping and scale extensions are configured in `tailwind.config.ts`.
- Extra Tailwind behavior can be added in `tailwind/plugins/*` (for example root font sizing).

---

## Token Usage Rules

- Prefer semantic token names over raw visual names.
- Use tokens through Tailwind utility classes whenever possible.
- Avoid hardcoded values in components if an equivalent token exists.
- Keep tokens reusable across features and applications.

---

## Introducing New Tokens

Add a new token only when:

- the value is reused or expected to be reused,
- existing token set cannot express the need,
- the token name can be semantic and stable.

When adding a token:

1. Define/update it in `tokens.css`.
2. Map it in Tailwind config if needed for class usage.
3. Use it in component styles.
4. Validate it in `sandbox/` preview.

---

## Naming Guidance

- Prefer purpose-driven names (example pattern: `surface`, `on-surface`, `accent`).
- Avoid names tied to one feature or one page.
- Keep naming consistent with existing token vocabulary.

---

## What to Avoid

- Do not create one-off tokens for a single temporary use.
- Do not hardcode pixel/rem values in shared components when scale tokens exist.
- Do not bypass tokens by introducing inline style values in primitives.
- Do not rename/remove existing tokens casually; this can break consuming apps.
