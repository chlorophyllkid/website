module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    browser: true,
    node: true
  },

  extends: ["airbnb-base"],

  rules: {
    "linebreak-style": 0,
    "no-return-assign": 0,
    "class-methods-use-this": 0,
    "no-use-before-define": ["error", { functions: false }],

    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  }
}
