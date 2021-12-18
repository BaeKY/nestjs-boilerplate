module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'node',
  testRegex: '\\.test\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}
