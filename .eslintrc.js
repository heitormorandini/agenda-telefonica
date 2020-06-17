module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "prettier",
    "jsx-a11y",
    "import",
    "react-hooks",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off",
    "no-used-vars": ["error", { argsIgnorePatter: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSufix: "src",
      },
    },
  },
};
