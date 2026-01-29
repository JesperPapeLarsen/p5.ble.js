module.exports = [
  {
    files: ['src/**/*.js'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      'arrow-parens': ['error', 'always'],
      'prefer-const': 'warn',
      'comma-spacing': 'warn',
      'space-in-parens': 'warn',
      'prefer-arrow-callback': 'warn'
    }
  }
];
