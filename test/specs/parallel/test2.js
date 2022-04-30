import commands from "../../../core_framework/Commands";

describe("Test suite 2", () => {
    it("Test case 2.1", async () => {
        await browser.url("/");
        // let disabledRadioBtn = await commands.findElement("//*[@id='optionsRadios3']");
        // await commands.click("//*[@id='optionsRadios3']");
        // console.log(await disabledRadioBtn.isEnabled());
        await browser.pause(10000);
        console.log("===============Done===========");
    });
});
