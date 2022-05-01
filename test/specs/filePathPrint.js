import path from "path";
var testConfig = require("../../config/appConfig");
const __dirname = path.dirname(__filename);
const root = path.resolve("./");
const propertiesReader = require("properties-reader");
var props = propertiesReader("./test_data/prop.tst.properties");

describe("Print file path ", () => {
    it("File path printed", async () => {
        console.log(`__dirname : ${__dirname}`);
        console.log(`root : ${root}`);
        console.log("=======Read from property file========>" + props.get("username"));
        console.log("=======Read from property file========>" + props.get("password"));
        console.log("=======Read from config file========>" + testConfig[process.env.ENV].baseUrl);
    });
});
