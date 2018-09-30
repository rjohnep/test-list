const jestConfig = require('./jest.config.js');

module.exports = {
  ...jestConfig,
  coverageReporters: ['text-summary'],
  cache: false,
};
