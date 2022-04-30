const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.base.js");

exports.config = merge(
    wdioConf.config,
    {
        specs: ["./test/specs/**/commandsTest.js"],
        suites: {
            parallelTest: ["./test/specs/parallel/test1.js", "./test/specs/parallel/test2.js"],
        },
        // exclude: [],
    },
    { clone: false }
);
