import commands from "../../../core_framework/Commands";

describe("Test suite 1", () => {
    it("Test case 1", async () => {
        await browser.url("https://example.cypress.io/commands/actions");
        let disabledRadioBtn = await commands.findElement("//*[@id='optionsRadios3']");
        await commands.click("//*[@id='optionsRadios3']");
        console.log(await disabledRadioBtn.isEnabled());
        console.log("===============Done===========");
    });
});
