import path from "path";

describe("Empty test suite", () => {
    for (let index = 0; index < testSpecDetails.length; index++) {
        if (testSpecDetails[index].testSpecPath.endsWith(path.basename(__filename))) {
            it(`SpecName : ${testSpecDetails[index].testSpecPath}`, async () => {
                console.log("===============Started===========");
                console.log(testSpecDetails[index].testCaseId); //Reading from globalObject
                console.log("=================Done===========");
            }, 0);
        }
    }
});
