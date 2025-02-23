# React + TypeScript + Vite

### View project here 👇
👉 Code Sandbox Link: [Click here to check out](https://codesandbox.io/p/github/Ac-ayush/ProgressBar)

#### Screenshot
<img width="500" alt="image" src="https://github.com/user-attachments/assets/2f77b866-5537-4f8b-bcb2-3383f53e3a11" />

### Key Functionalities
- Insert new progress (range 1-100)
- left to right progress bar with moving effect
- progress increasing by `10%` after every `0.5` second
- smooth colors changing effect:
  - `red < 25% progress`
  - `yellow < 75% progress`
  - `green < 100% progress`
  




Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
