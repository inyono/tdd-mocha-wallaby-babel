module.exports = wallaby => ({
  files: [
    'src/**/*.js',
    '!src/**/*.test.js'
  ],
  tests: [
    'src/**/*.test.js'
  ],
  testFramework: 'mocha',
  compilers: {
    'src/**/*.js': wallaby.compilers.babel()
  },
  env: {
    type: 'node',
    runner: 'node'
  },
  bootstrap: function () {
    require('babel-polyfill')
  }
})
