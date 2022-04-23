require("module-alias/register");
// const commands = require("@core_commands/Commands");

import commands from "../../core_framework/Commands";
import commandUtils from "../../core_framework/utils/CommandUtils";
// const commands = require("../../core_framework/Commands");

describe("My Login application", () => {
    it("Fetch the process or env data", async () => {
        await browser.url("https://example.cypress.io/commands/actions");
        // await browser.url(testConfigGbl.url);
        console.log(await browser.getTimeouts());
        let emmailBox = await commands.findElement(".action-email");
        await emmailBox.setValue("Chutiye");
        // await commandUtils.captureDesktopScreenshot(__dirname + "/b");
        console.log("===============Done===========");
    });
    it("Fetch the process or env data 1", async () => {
        await browser.url("https://example.cypress.io/commands/actions");
        console.log(await browser.getTimeouts());
        let disabledRadioBtn = await commands.findElement("//*[@id='optionsRadios3']", 40000);
        // await commands.click("//*[@id='optionsRadios3']");
        // console.log(await disabledRadioBtn.isEnabled());
        // await disabledRadioBtn.click();
        // console.log(await disabledRadioBtn.isEnabled());
        await browser.pause(5000);
        console.log("===============Done1===========");
    }, 2);
});
