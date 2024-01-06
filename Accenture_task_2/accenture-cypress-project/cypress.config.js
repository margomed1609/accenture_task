const { defineConfig } = require("cypress")

module.exports = {
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 100000,
    responseTimeout: 100000,
    requestTimeout: 100000,
    viewportWidth: 1980,
    viewportHeight: 1024,
    includeShadowDom: true,
    experimentalSessionAndOrigin: true,
    testIsolation: false,
    setupNodeEvents(on, config) {
      return config
    },
  },
};
