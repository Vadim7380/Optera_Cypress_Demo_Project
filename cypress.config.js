const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":  "https://opteraclimate.com/",
    "viewportHeight": 1000,
    "viewportWidth": 1600,
    "numTestsKeptInMemory": 1,
    "defaultCommandTimeout": 4000,
    "screenshotOnRunFailure": true,
    "video": true,
    "retries": 1,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      },
  },
  env:{
    "User": "vadim_prikhodko@yahoo.com",
    "Password": "Password!",
  }
});
