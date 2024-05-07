const { defineConfig } = require("cypress");

module.exports = defineConfig({
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },

  env: {
    apiUrl: "https://reqres.in/api",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
