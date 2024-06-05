import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ['src/**/*.{js,mjs,vue}'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'public/**',
      '.gitignore',
      'cypress/**',
      '.eslintrc.js'
    ],
    rules: {
      semi: 'error'
    }
  },

  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential']
]
