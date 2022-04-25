# webdriverio-pitstop

Simple JavaScript based wedbdriverIO project

testConfigGbl - Global config man, which is resolved from environment basis i.e. tst,dev.prod

List of configurable properties, which can be overrided from env variables
baseUrl : "https://the-internet.herokuapp.com/prod" (Add the baseUrl)
waitforTimeout : 30000 (Used for all the commands as default wait time)
waitforInterval: 5 (Number of intervals for wait time command)
suiteTimeout: 60000 \* 10 (Default timeout for Mocha test cases)
bail: 0 (To stop the test after this no. of test failed)
specFileRetries: 2 (Number of times to retry if a spec is faild)
specFileRetriesDelay:0 (Add time delay if you want to trigger failed specs after some time)
specFileRetriesDeferred: false (False - will re-run the failed spec the moment it failed, true - will re-run the failed spec at the end)
browserMaxInstances: 1 (Number of browser instance to run the test in paralled)
captureDesktopScreenshot: false (true - will allow framework to capture desktop screenshots in place of browser screenshots)
maximizeBrowserAtLaunch: true (To maximize the browser at lauch)

Helpful tips related to browser
Capabilities help (https://chromedriver.chromium.org/capabilities)
Chrome args switches (https://peter.sh/experiments/chromium-command-line-switches/)
