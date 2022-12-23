import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import path from "path";
import logger from "@wdio/logger";
const propertiesReader = require("properties-reader");
var props = propertiesReader("./test_data/prop.tst.properties");
const log = logger("loginPageTest");

describe("My Login application", () => {
    for (let index = 0; index < testSuiteDataGbl.length; index++) {
        if (testSuiteDataGbl[index].testCaseId.endsWith(path.basename(__filename))) {
            let testDataKey = testSuiteDataGbl[index].testDataKey; //This gets the current dataKeyId
            let testData = testDataMapGbl.get(testDataKey); //This gets the data related to dataKeyId

            //---------Start to write the test code from here----------------
            it(`${index}_${testDataKey}`, async () => {
                console.log("===============Started===========");
                log.info("===============log Started===========");
                // log.info
                console.log(testSuiteDataGbl[index].testDataKey);
                console.log(testData); //THis
                await LoginPage.open();
                await LoginPage.login(testData.user.name, testData.user.password);
                console.log("=================Done===========");
            }, 0);
            //----------------------------------------------------------------
        }
    }
});
