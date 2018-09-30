module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.spec.{js,jsx}',
  ],
  coverageReporters: [
    'cobertura',
    'html',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '(\\.scss|\\.css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file.js',
    '\\.(svg)$': '<rootDir>/__mocks__/svgIcon.js',
  },
  modulePaths: ['src'],
  testRegex: '__tests__/.*\\.spec\\.js?$',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  verbose: false,
  setupFiles: [
    'raf/polyfill',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/internals/testing/jest.init.js',
  globals: {
    __DEV__: true,
  },
};
