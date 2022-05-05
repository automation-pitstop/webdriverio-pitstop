import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import path from "path";
var testConfig = require("../../test_config/appConfig");
const __dirname = path.dirname(__filename);
const root = path.resolve("./");
const propertiesReader = require("properties-reader");
var props = propertiesReader("./test_data/prop.tst.properties");

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        await LoginPage.open();
        await LoginPage.login("tomsmith", "SuperSecretPassword!");
        await browser.pause(10000);
    });
});
