import path from "path";

describe("Empty test suite", () => {
    for (let index = 0; index < testSuiteDataGbl.length; index++) {
        if (testSuiteDataGbl[index].testCaseId.endsWith(path.basename(__filename))) {
            it(`${index}_${testSuiteDataGbl[index].testDataKey}`, async () => {
                console.log("===============Started===========");
                console.log(testSuiteDataGbl[index].testDataKey); //Reading from globalObject
                console.log("=================Done===========");
            }, 0);
        }
    }
});
