const csv = require("csvtojson/v2");
const path = require("path");

class CsvUtils {
    getJsonFromCsv(csvFilePath) {
        console.log(`INFO : Parsing the given CSV file : ${csvFilePath}`);
        return new Promise((resolve, reject) => {
            let jsonObj;
            csv()
                .fromFile(csvFilePath)
                .then((jsonObjActual) => {
                    jsonObj = jsonObjActual;
                });
            if (jsonObj != undefined) {
                resolve(jsonObj);
            } else {
                reject(`ERROR : Unable to read the provided CSV '${csvFilePath}'`);
            }
        });
    }

    async getJsonDataFromCsv(csvFilePathFromRoot, folderPath = "./") {
        let filePathFromRoot = `${folderPath}${csvFilePathFromRoot}`;
        console.log(`INFO : Parsing CSV to Json for the mentioned file : ${filePathFromRoot}`);
        return await csv().fromFile(path.resolve(filePathFromRoot));
    }

    async getExecutableSpecDetailsFromTestSuiteData(csvFilePathFromRoot, folderPath = "./") {
        let suiteDataFilePath = `${folderPath}${csvFilePathFromRoot}`;
        console.log(`INFO : Parsing provided test suite file for enabled specs : ${suiteDataFilePath}`);
        let jsonObj = await this.getJsonDataFromCsv(csvFilePathFromRoot, folderPath);
        this.removeByAttr(jsonObj, "execute", "false");
        console.log(`INFO : Found '${jsonObj.length}' test specs which are enable in provided test suite file : ${suiteDataFilePath}`);
        return jsonObj;
    }

    removeByAttr(arr, attr, value) {
        let i = arr.length;
        while (i--) {
            if (arr[i] && arr[i].hasOwnProperty(attr) && arguments.length > 2 && arr[i][attr] === value) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }

    getDataInMap(arr, key) {
        let i = arr.length;
        let map = new Map();
        while (i--) {
            if (arr[i] && arr[i].hasOwnProperty(key) && arguments.length > 1) {
                map.set(arr[i][key], arr[i]);
            }
        }
        return map;
    }
}

export default new CsvUtils();
