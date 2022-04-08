const { rejects } = require("assert");
var fs = require("fs");

class FileUtils {
    deleteFolderRecursively = function (absoluteDirPath) {
        return new Promise(function (resolve, reject) {
            if (fs.existsSync(absoluteDirPath)) {
                console.log(`INFO specified folder '${absoluteDirPath}' exists`);
                fs.rmdirSync(absoluteDirPath, { recursive: true, force: true }, (err) => {
                    reject("ERROR error occured in deleting directory");
                });
                resolve("INFO directory deleted successfully");
            } else {
                reject(`INFO sepcified dir '${absoluteDirPath}' does not exist. Deletion is skipped`);
            }
        });
    };
}

module.exports = new FileUtils();
