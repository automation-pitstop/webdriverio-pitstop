import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import path from "path";
const propertiesReader = require("properties-reader");
var props = propertiesReader("./test_data/prop.tst.properties");
// console.log(testIdSpecificData);

describe("My Login application", () => {
    for (let index = 0; index < testSpecDetails.length; index++) {
        if (testSpecDetails[index].testSpecPath.endsWith(path.basename(__filename))) {
            // it(`SpecName : ${testSpecDetails[index].testSpecPath} : ${testSpecDetails[index].testCaseId}`, async () => {
            it(`SpecName_${testSpecDetails[index].testCaseId}`, async () => {
                console.log("===============Started===========");
                let testCaseId = testSpecDetails[index].testCaseId;
                let testData = testIdSpecificData.get(testCaseId);
                console.log(testCaseId);
                console.log(testData);
                // console.log(testSpecDetails[index].testCaseId);
                await LoginPage.open();
                await LoginPage.login(testData.user.name, testData.user.password);
                // // await browser.pause(10000);
                console.log("=================Done===========");
            }, 0);
        }
    }
});
