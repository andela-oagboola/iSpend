exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  chromeDriver: '/usr/local/bin/chromedriver',

  capabilities: {
    'browserName': 'chrome'
  },

  directConnect: true,

  baseUrl: 'http://localhost:8001',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeOutInterval: 30000
  }

};