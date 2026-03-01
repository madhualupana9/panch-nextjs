---
description: Repository Information Overview
alwaysApply: true
---

# panch-nextjs Information

## Summary
A **Next.js** application bootstrapped with `create-next-app` using the **App Router**. It provides a structure for building a modern web application with **React 19** and **TypeScript**, styled using **Tailwind CSS 4**.

## Structure
- **app/**: Core application directory using Next.js App Router; contains routes, layouts, and global styles.
- **components/**: Reusable React components (e.g., Header, Footer, MainSlider, AboutUs).
- **public/**: Static assets like SVGs and bundled JavaScript for third-party scripts.
- **html-template/**: Contains original HTML/CSS templates and WordPress-related assets, likely used as a reference for the Next.js migration.
- **.zencoder/**: Configuration for Zencoder workflows.

## Language & Runtime
**Language**: TypeScript  
**Version**: ^5  
**Build System**: Next.js Build  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- **next**: 16.1.6
- **react**: 19.2.3
- **react-dom**: 19.2.3

**Development Dependencies**:
- **tailwindcss**: ^4
- **typescript**: ^5
- **eslint**: ^9
- **eslint-config-next**: 16.1.6
- **@types/node**: ^20
- **@types/react**: ^19
- **@types/react-dom**: ^19

## Build & Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Main Files & Resources
- **app/layout.tsx**: Root layout for the application.
- **app/page.tsx**: Main entry point and homepage.
- **next.config.ts**: Next.js configuration.
- **tsconfig.json**: TypeScript compiler configuration.
- **eslint.config.mjs**: ESLint configuration.
- **postcss.config.mjs**: PostCSS configuration for Tailwind CSS.

## Testing
No testing framework (e.g., Jest, Vitest) is currently configured in `package.json`.

**Linting**:
```bash
npm run lint
```
