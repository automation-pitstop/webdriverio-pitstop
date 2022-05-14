const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.base.js");

exports.config = merge(
    wdioConf.config,
    {
        specs: ["./test/specs/**/*.js"],
        suites: {
            parallelTest: ["./test/specs/parallel/test1.js", "./test/specs/parallel/test2.js"],
            dataDrivenTest: ["./test/specs/loginPageTest.js", "./test/specs/csvTest.js"],
        },
        // exclude: [],
    },
    { clone: false }
);
