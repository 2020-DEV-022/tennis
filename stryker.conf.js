// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function (config) {
  config.set({
    mutate: ["src/**/*.js?(x)", "!src/**/*@(.test|.spec|Spec).js?(x)", "!src/index.js", "!src/setupTests.js"],
    mutator: "javascript",
    testRunner: "jest",
    tempDirName: 'stryker-tmp',
    reporters: ["progress", "clear-text", "html"],
    coverageAnalysis: "off",
    jest: {
      projectType: "react"
    }
  });
};
