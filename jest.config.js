module.exports = {
  collectCoverage: true,
  coverageReporters: ['html', 'lcov'],
  globalTeardown: './jest/jest-suite-teardown.js'
}
