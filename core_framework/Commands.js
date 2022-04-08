const testConfig = require("../properties/testConfig");

class Commands {
    async findElement(locator) {
        let elem = await $(locator);
        if (!(await elem.isExisting())) {
            throw new Error(`Unable to locate the element '${locator}'`);
        }
        return elem;
    }

    async click(locator, timeOut) {
        let elem = await this.findElement(locator);
        if (timeOut == undefined) {
            timeOut = testConfigGbl.waitforTimeout;
        } else {
            console.log(`Explicit wait defined, will wait for '${timeOut}' ms`);
        }
        // if (!(await elem.isDisplayed())) {
        //     throw new Error(`Element exist but not displayed on screen : '${locator}'`);
        // }
        // if (!(await elem.isClickable())) {
        //     throw new Error(`Element is not clickable : '${locator}'`);
        // }
        // await elem.click();
        // return;
        try {
            await elem.waitForClickable({ timeout: timeOut, timeoutMsg: `Element is not clickable : '${locator}'` });
            await elem.click();
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = new Commands();
