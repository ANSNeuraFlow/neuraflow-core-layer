# Coding Rules - neuraflow-core-layer

## General

- Language: TypeScript with strict typing.
- Package manager: pnpm only (`preinstall` uses `only-allow pnpm`).
- Keep this repository framework/UI-focused; avoid product-specific business logic.
- Follow existing file/folder naming conventions before introducing new patterns.

---

## TypeScript

- Do not use `any`; prefer `unknown` and explicit narrowing.
- Keep component and utility APIs strongly typed and minimal.
- Prefer named exports for shared code.
- Avoid non-null assertion (`!`) unless correctness is guaranteed by surrounding logic.

---

## Vue / Nuxt Components

- Use `<script setup lang="ts">`.
- Keep components reusable, presentational, and framework-agnostic from feature context.
- Place each component in its own folder under `app/components/{component-name}/`.
- Keep local barrel export in `index.ts` next to each component.

---

## Styling

- Use Tailwind utility classes and token-based values.
- Avoid hardcoded visual values (colors, spacing, radius, font sizes) if tokens exist.
- Keep global CSS minimal and generic (`base.css`), not feature-specific.
- For variant-heavy components, follow existing CVA-based patterns.

---

## Utilities and Composables

- Utilities in `app/utils` should stay generic and reusable.
- Prefer pure functions and clear input/output contracts.
- Small shared composables are allowed; feature workflows are not.
- Re-export shared helpers from `app/utils/index.ts` to keep consumption consistent.

---

## Imports and Module Boundaries

- Respect `imports.scan: false`; local imports should be explicit.
- Keep import ordering consistent with lint rules.
- Do not introduce implicit cross-file coupling through side effects.

---

## Linting and Formatting

- Linting: `eslint`, `stylelint`; formatting: `prettier`.
- Keep code compliant with repo configuration:
  - `eslint.config.mjs`
  - `stylelint.config.mjs`
  - `.prettierrc.json`
- Run relevant checks before finalizing changes:
  - `pnpm lint`
  - `pnpm typecheck`

---

## Git and Commit Rules

- Commit messages must follow Conventional Commits (commitlint + Husky).
- Keep commits small and focused when possible.
- Do not add dependencies unless they provide clear shared value across consuming apps.
