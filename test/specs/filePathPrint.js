import path from "path";
var testConfig = require("../../test_config/appConfig");
const propertiesReader = require("properties-reader");
var props = propertiesReader("./test_data/prop.tst.properties");

describe("Print file path ", () => {
    it("File path printed", async () => {
        // path doc : https://nodejs.org/api/path.html#pathdirnamepath
        console.log("Current dir path : " + path.dirname(__filename)); // E:\CodeLearn\webdriverio-pitstop\test\specs
        console.log("Root dir path : " + path.resolve("./")); // E:\CodeLearn\webdriverio-pitstop
        console.log("Current file name : " + path.basename(__filename)); //filePathPrint.js
        console.log("=======Read from property file========>" + props.get("username"));
        console.log("=======Read from property file========>" + props.get("password"));
        console.log("=======Read from config file========>" + testConfig[process.env.ENV].baseUrl); //https://the-internet.herokuapp.com/
    });
});
