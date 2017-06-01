module.exports = function (wallaby) {
  return {
    files: [
      'package.json',
      'src/**/*.ts',
      'src/**/*.js',
    ],
    tests: [
      'src/**/*.test.ts',
      'src/**/*.test.js'
    ],
    compilers: {
        '**/*.ts': wallaby.compilers.typeScript({
        // TypeScript compiler specific options
        // https://github.com/Microsoft/TypeScript/wiki/Compiler-Options
        // (no need to duplicate tsconfig.json, if you have it, it'll be automatically used)
      })
    },
    testFramework: 'jest',
    env: { type: 'node', runner: 'node' },
    debug: true,
    setup: function (wallaby) {
      var jestConfig = require('./package.json').jest;
      jestConfig.globals = { "__DEV__": true };
      wallaby.testFramework.configure(jestConfig);
    }
  };
};