import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "error",
      "react-hooks/exhaustive-deps": "off",
      quotes: ["error", "single", { avoidEscape: true }],
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
      "react/jsx-boolean-value": "error",
      "jsx-a11y/alt-text": ["error", { elements: ["img"] }],
      "jsx-a11y/img-redundant-alt": [
        "error",
        { elements: ["img"], words: ["image", "photo", "picture"] },
      ],
      "jsx-a11y/no-redundant-roles": ["error", { nav: ["navigation"] }],
      "jsx-a11y/aria-role": [
        "error",
        { allowedInvalidRoles: ["text"], ignoreNonDOM: true },
      ],
      "jsx-a11y/no-access-key": "error",
      "react/self-closing-comp": "error",
      "prefer-arrow-callback": "error",
      "no-underscore-dangle": ["error", { enforceInMethodNames: true }],
      "no-new-object": "error",
      eqeqeq: "error",
      radix: "error",
      "@typescript-eslint/no-for-in-array": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-extend-native": "error",
      "@typescript-eslint/no-this-alias": "error",
      semi: ["error", "always"],
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-inline-styles/no-inline-styles": 2,
    },
  }
);
