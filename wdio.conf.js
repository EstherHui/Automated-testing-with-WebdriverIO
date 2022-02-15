require('babel/register');

exports.config = {
    runner: 'local',
    hostname: 'localhost' ,
    port: 4444,
    path: '/',
    specs: [
        'src\scripts\Logging001.js'
    ],
   
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
    }],
    
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://satokentest.is.my',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec','dot','junit'],


    mochaOpts: {
        ui: 'bdd',
        timeout: 900000
    }
    
}
