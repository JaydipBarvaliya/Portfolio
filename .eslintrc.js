module.exports = {
  root: true,
  env: {
    node: true
  },
  
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off'
  }
}
