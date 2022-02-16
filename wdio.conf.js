exports.config = {

    runner: 'local',
    hostname: 'localhost',
    port : 4444,
    path: '/',
   
    specs: [
        './test/specs/Logging001.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://uwu.securelayers.cloud/login',
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec','dot', 'junit'],


    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
  

    beforeTest: () => {
        const chai = require('chai');
        const chaiWebdriver = require('chai-webdriverio').default;
        chai.use(chaiWebdriver(browser));
        global.assert = chai.assert;
      },
}


