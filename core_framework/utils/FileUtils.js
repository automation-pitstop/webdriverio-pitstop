const { rejects } = require("assert");
var fs = require("fs");
import path from "path";
const root = path.resolve("./");

class FileUtils {
    deleteFolderRecursively = function (absoluteDirPath) {
        return new Promise(function (resolve, reject) {
            if (fs.existsSync(absoluteDirPath)) {
                console.log(`INFO : Specified folder '${absoluteDirPath}' exists`);
                fs.rmdirSync(absoluteDirPath, { recursive: true, force: true }, (err) => {
                    reject("ERROR : Error occured in deleting directory");
                });
                resolve("INFO : Directory deleted successfully");
            } else {
                reject(`INFO : Sepcified dir '${absoluteDirPath}' does not exist. Deletion is skipped`);
            }
        });
    };

    async createDirUnderRoot(folderName) {
        let dir = `${root}${path.sep}${folderName}`;
        console.log(`INFO : Creating the mentioned directory '${folderName}', under path '${dir}'`);
        try {
            if (!fs.existsSync(dir)) {
                await fs.promises.mkdir(dir, { recursive: true });
                // fs.mkdirSync(dir, { recursive: true });
            }
        } catch (error) {
            throw new Error(`ERROR : Unable to create specified folder '${folderName}'\n` + error);
        }
    }

    getStringFromCsv(csvFilePath, encoding = "utf-8") {
        fs.readFile(csvFilePath, encoding, (err, data) => {
            if (err) {
                throw new Error(`ERROR : Unable to parse the given CSV '${csvFilePath}'\n` + error);
            } else {
                return data;
            }
        });
    }
}

// module.exports = new FileUtils();
export default new FileUtils();
