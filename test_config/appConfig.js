module.exports = {
    dev: {
        baseUrl: "https://the-internet.herokuapp.com/dev",
        waitforTimeout: 30000,
        waitforInterval: 5,
        suiteTimeout: 60000 * 10,
        // bail: 0,
        specFileRetries: 0,
        // specFileRetriesDelay:0,
        specFileRetriesDeferred: false,
        browserMaxInstances: 1,
        captureDesktopScreenshot: true,
        maximizeBrowserAtLaunch: true,
        testSuiteFileName: "suiteData.csv",
        testDataFileName: "testData.csv",
    },
    tst: {
        baseUrl: "https://the-internet.herokuapp.com/",
        waitforTimeout: 10000,
        waitforInterval: 5,
        suiteTimeout: 60000 * 2,
        // bail: 0,
        specFileRetries: 1,
        // specFileRetriesDelay:0,
        specFileRetriesDeferred: false, //means run the moment spec is failed
        browserMaxInstances: 1,
        captureDesktopScreenshot: true,
        maximizeBrowserAtLaunch: false,
        testSuiteFileName: "suiteData.csv",
        testDataFileName: "testData.csv",
    },
    prod: {
        baseUrl: "https://the-internet.herokuapp.com/prod",
        waitforTimeout: 30000,
        waitforInterval: 5,
        suiteTimeout: 60000 * 10,
        // bail: 0,
        specFileRetries: 2,
        // specFileRetriesDelay:0,
        specFileRetriesDeferred: false,
        browserMaxInstances: 1,
        captureDesktopScreenshot: false,
        maximizeBrowserAtLaunch: true,
        testSuiteFileName: "suiteData.csv",
        testDataFileName: "testData.csv",
    },
};

// module.exports = {dev,tst,prod};
// const dev = {
//     url: "https://the-internet.herokuapp.com/dev",
//     implicitWait: 30000,
//     waitforTimeout: 30000,
//     waitforInterval: 5,
// };
// const tst = {
//     url: "https://the-internet.herokuapp.com/dev",
//     implicitWait: 30000,
//     waitforTimeout: 30000,
//     waitforInterval: 5,
// };
// const prod = {
//     url: "https://the-internet.herokuapp.com/dev",
//     implicitWait: 30000,
//     waitforTimeout: 30000,
//     waitforInterval: 5,
// };
