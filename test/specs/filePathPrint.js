import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import path from "path";
var testConfig = require("../../properties/appConfig");
const __dirname = path.dirname(__filename);
const root = path.resolve("./");
const propertiesReader = require("properties-reader");
var props = propertiesReader("./properties/prop.tst.properties");

describe("Print file path ", () => {
    it("File path printed", async () => {
        console.log(`__dirname : ${__dirname}`);
        console.log(`root : ${root}`);
    });
});
