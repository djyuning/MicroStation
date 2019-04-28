module.exports = {
  root: true,
  globals: {
    wx: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },

  rules: {
    'semi':['error','always'], // 语句结束必须使用分号
    'arrow-parens': 0,
    'generator-star-spacing': 0, // 使用 async await 语句
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0
  }
}
