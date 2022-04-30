import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import path from "path";
var testConfig = require("../../properties/appConfig");
const __dirname = path.dirname(__filename);
const root = path.resolve("./");
const propertiesReader = require("properties-reader");
var props = propertiesReader("./properties/prop.tst.properties");

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        await LoginPage.open();
        // console.log(browser.options);
        await browser.pause(5000);
        await LoginPage.login("tomsmith", "SuperSecretPassword!");
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining("You logged into a secure area!");
    });

    // it("Fetch the process or env data", async () => {
    //     console.log("=======Get the current folder========>" + __dirname);
    //     console.log("=======Get root folder========>" + root);
    //     console.log("=======Read from property file========>" + props.get("username"));
    //     console.log("=======Read from property file========>" + props.get("username"));
    //     console.log("=======Read from config file========>" + testConfig[process.env.ENV].url);
    //     // console.log("===============>" + exe_config.prod.url);
    // });
});
