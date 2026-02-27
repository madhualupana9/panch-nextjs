---
description: Repository Information Overview
alwaysApply: true
---

# panch-nextjs Information

## Summary
A Next.js 15+ web application bootstrapped with `create-next-app`, utilizing React 19, TypeScript, and Tailwind CSS. The repository also includes a legacy or reference `html-template` directory containing WordPress-related assets and a static site structure.

## Structure
- **app/**: Next.js App Router directory containing pages, layouts, and global styles.
- **public/**: Static assets such as SVGs and icons.
- **html-template/**: A comprehensive static HTML/CSS/JS template, possibly used as a design reference, containing WordPress-like structure (`wp-content`, `wp-includes`).
- **.next/**: Next.js build output directory.
- **.zencoder/ / .zenflow/**: Tooling and workflow configurations.

## Language & Runtime
**Language**: TypeScript  
**Version**: Node.js (v20+ recommended), TypeScript 5+  
**Build System**: Next.js CLI  
**Package Manager**: npm (package-lock.json present)

## Dependencies
**Main Dependencies**:
- `next`: 16.1.6
- `react`: 19.2.3
- `react-dom`: 19.2.3

**Development Dependencies**:
- `tailwindcss`: ^4
- `@tailwindcss/postcss`: ^4
- `typescript`: ^5
- `eslint`: ^9
- `eslint-config-next`: 16.1.6
- `@types/node`, `@types/react`, `@types/react-dom`

## Build & Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## Main Files & Resources
- **Entry Point**: `app/page.tsx` (Main page), `app/layout.tsx` (Root layout)
- **Configuration**:
  - `next.config.ts`: Next.js configuration
  - `tsconfig.json`: TypeScript configuration
  - `postcss.config.mjs` & `eslint.config.mjs`: Tooling configurations
  - `app/globals.css`: Global CSS with Tailwind imports

## Testing
**Framework**: No dedicated testing framework (Jest/Vitest/Playwright) found in `package.json`.
**Validation**: ESLint for static code analysis.
**Run Command**:
```bash
npm run lint
```
