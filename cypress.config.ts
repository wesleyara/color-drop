/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173",
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
});