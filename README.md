# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><g fill="none"><defs><mask id="SVG32LwgcZA"><path fill="#fff" d="M0 0h26v26H0z"/><path fill="#000" fill-rule="evenodd" d="M18 11.5h-3.813l2.273-5.303A.5.5 0 0 0 16 5.5h-5a.5.5 0 0 0-.46.303l-3 7A.5.5 0 0 0 8 13.5h2.474l-2.938 7.314c-.2.497.417.918.807.55l5.024-4.743l4.958-4.241A.5.5 0 0 0 18 11.5m-4.571 1h3.217l-3.948 3.378l-3.385 3.195l2.365-5.887a.5.5 0 0 0-.464-.686H8.758l2.572-6h3.912l-2.273 5.303a.5.5 0 0 0 .46.697" clip-rule="evenodd"/></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#SVG32LwgcZA)"/></g></svg>,<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0L0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7M331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5c37.1-37.1 49.7-89.3 37.9-136.7c-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4l-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2c-47.4-11.7-99.6.9-136.6 37.9c-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9m-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7M64 472c-13.2 0-24-10.8-24-24c0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24"/></svg>,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 21v-6h1.5a9.3 9.3 0 0 1-.5-3a9 9 0 0 1 9-9h10v6h-1.5c.32.94.5 1.95.5 3a9 9 0 0 1-9 9zm3-9c0 1.28.34 2.47.94 3.5l3.46-2c-.25-.44-.4-.95-.4-1.5c0-.65.21-1.25.56-1.74L6.3 7.93C5.5 9.08 5 10.5 5 12m7 7c2.59 0 4.85-1.41 6.06-3.5l-3.46-2c-.52.9-1.49 1.5-2.6 1.5h-.29l-.38 3.97zm0-10c1.21 0 2.26.72 2.73 1.76l3.64-1.66A6.99 6.99 0 0 0 12 5zm0 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"/></svg>,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.959 5C17.619 5.87 18 6.898 18 8s-.381 2.13-1.041 3M7.04 5C6.381 5.87 6 6.898 6 8s.381 2.13 1.041 3m13.275-8C21.38 4.43 22 6.15 22 8s-.62 3.57-1.684 5M3.684 3C2.62 4.43 2 6.15 2 8s.62 3.57 1.684 5"/><path stroke-linecap="round" d="M11 10L7 21m10 0l-4-11"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.5 17h7"/></g></svg>