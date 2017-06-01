module.exports = function (wallaby) {
  return {
    files: [
      'package.json',
      'src/**/*.ts',
      'src/**/*.js',
      '!src/**/*.test.ts',
      '!src/**/*.test.js'
    ],
    tests: [
      'src/**/*.test.ts',
      'src/**/*.test.js'
    ],

    testFramework: 'jest',
    env: { type: 'node', runner: 'node' },
    debug: true
  };
};
