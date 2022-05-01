require("module-alias/register");
var fs = require("fs");
import desktopScreenshot from "screenshot-desktop";
import path from "path";
const appConfig = require("@config/appConfig");

class CommandUtils {
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

    async captureDesktopScreenshot(imageFilePath, imageFormat = ".png") {
        try {
            //check if the folder exist otherwise throw exception
            let resolvedPath = `${path.resolve(imageFilePath)}${imageFormat}`;
            console.log(`INFO : Capturing desktop screenshot at : ${resolvedPath}`);
            await desktopScreenshot({ filename: resolvedPath });
            return resolvedPath;
        } catch (error) {
            console.warn(`WARN : Unable to capture the desktop screenshot at given path : ${resolvedPath}`);
        }
    }

    async captureBrowserScreenshot(imageFilePathWithFormat, imageFormat = ".png") {
        try {
            //check if the folder exist otherwise throw exception
            let resolvedPath = path.resolve(`${imageFilePathWithFormat}${imageFormat}`);
            console.log(`INFO : Capturing browser screenshot at : ${resolvedPath}`);
            await browser.saveScreenshot(resolvedPath);
            return resolvedPath;
        } catch (error) {
            console.warn(`WARN : Unable to capture the browser screenshot at given path : ${resolvedPath}`);
        }
    }

    getConfigDataAsPerEnvType(envName) {
        let appConfigData = {};
        if (!envName || !["dev", "tst", "prod"].includes(envName)) {
            console.error("ERROR : Invalid environment! Kindly select : ENV=dev|tst|prod");
            process.exit();
        } else {
            appConfigData = appConfig[envName];
        }
        console.log(`INFO : Current execution Env is '${envName}', to change Env set ENV=dev|tst|prod using enviornment variable`);
        return appConfigData;
    }

    getUpdatedConfigData(envName) {
        let appConfigData = this.getConfigDataAsPerEnvType(envName);
        let updatedAppConfigDataMap = new Map();
        console.log(`INFO : =============== App Configuration ===============`);
        for (let key in appConfigData) {
            updatedAppConfigDataMap.set(key, this.getOverriddenPropertyValue(appConfigData, key));
        }
        console.log(`INFO : =================================================`);
        return updatedAppConfigDataMap;
    }

    getOverriddenPropertyValue(configObj, propertyName) {
        const env = process.env;
        if (env[propertyName] != null && env[propertyName] != undefined && env[propertyName] != "") {
            console.log(`INFO : ${propertyName} : ${env[propertyName]} (Overridden using Environment Variable)`);
            return env[propertyName];
        } else {
            console.log(`INFO : ${propertyName} : ${configObj[propertyName]}`); // Default val from appConfig
            return configObj[propertyName];
        }
    }
}

// module.exports = new CommandUtils();
export default new CommandUtils();
