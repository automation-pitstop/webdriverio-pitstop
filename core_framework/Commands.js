require("module-alias/register");
const testConfig = require("../test_config/appConfig");
import assert from "assert";

class Commands {
    async findElement(locator, waitTime) {
        waitTime = this.getOverriddenTimeout(waitTime);
        try {
            let element = await $(locator);
            await element.waitForExist({ timeout: waitTime });
            return element;
        } catch (error) {
            assert.fail(`ISSUE : Unable to find element, locator : ${locator}\n` + error);
        }
    }

    async findElements(locator, waitTime) {
        waitTime = this.getOverriddenTimeout(waitTime);
        try {
            await this.findElement(locator, waitTime);
            let elementList = await $$(locator);
            if (elementList != null && elementList.length > 0) {
                return elementList;
            } else {
                throw new Error(`Element list count is less than Zero or it null`);
            }
        } catch (error) {
            assert.fail(`ISSUE : Unable to find elements, locator : ${locator}\n` + error);
        }
    }

    async click(locator, waitTime) {
        waitTime = this.getOverriddenTimeout(waitTime);
        try {
            let elem = await this.findElement(locator);
            await elem.waitForClickable({ timeout: waitTime, timeoutMsg: `Element is not clickable.` });
            await elem.click();
            return;
        } catch (error) {
            assert.fail(`ISSUE : Unable to click on element, locator : ${locator}\n` + error);
        }
    }

    getOverriddenTimeout(waitTime) {
        if (waitTime == undefined) {
            waitTime = testConfigGbl.waitforTimeout;
            // console.log(`Explicit wait NOT defined, will wait for max '${timeOut}' ms`);
        } else {
            // console.log(`Explicit wait defined, will wait for max '${timeOut}' ms`);
        }
        return waitTime;
    }
}
// module.exports = new Commands();
export default new Commands();
