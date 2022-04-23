const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.suite.js");

exports.config = merge(
    wdioConf.config,
    {
        // ============
        // Capabilities
        // ============
        // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
        // time. Depending on the number of capabilities, WebdriverIO launches several test
        // sessions. Within your capabilities you can overwrite the spec and exclude options in
        // order to group specific specs to a specific capability.
        //
        // First, you can define how many instances should be started at the same time. Let's
        // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
        // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
        // files and you set maxInstances to 10, all spec files will get tested at the same time
        // and 30 processes will get spawned. The property handles how many capabilities
        // from the same test should run tests.
        //
        maxInstances: 10,
        //
        // If you have trouble getting all important capabilities together, check out the
        // Sauce Labs platform configurator - a great tool to configure your capabilities:
        // https://saucelabs.com/platform/platform-configurator
        //
        capabilities: [
            {
                // maxInstances can get overwritten per capability. So if you have an in-house Selenium
                // grid with only 5 firefox instances available you can make sure that not more than
                // 5 instances get started at a time.
                maxInstances: testConfigGbl.get("browserMaxInstances"),
                //
                browserName: "chrome",
                acceptInsecureCerts: true,
                // If outputDir is provided WebdriverIO can capture driver session logs
                // it is possible to configure which logTypes to include/exclude.
                // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
                // excludeDriverLogs: ['bugreport', 'server'],
            },
        ],
        services: ["chromedriver"],
    },
    { clone: false }
);
