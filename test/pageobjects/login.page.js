import Page from "./page";
import securePage from "./secure.page";
import command from "../../core_framework/Commands";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // get inputUsername() {
    //     return $("#usernamex");
    // }

    // get inputPassword() {
    //     return $("#password");
    // }

    // get btnSubmit() {
    //     return $('button[type="submit"]');
    // }

    // login(username, password) {
    //     this.inputUsername.setValue(username);
    //     this.inputPassword.setValue(password);
    //     this.btnSubmit.click();
    // }

    userNameInputBox = "#username";
    passwordInputBox = "#password";
    loginButton = 'button[type="submit"]';

    async inputUsername() {
        return await command.findElement(this.userNameInputBox);
    }

    async inputPassword() {
        return await command.findElement(this.passwordInputBox);
    }

    async btnSubmit() {
        return await command.findElement(this.loginButton);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        let userNameElem = await this.inputUsername().then(async (elem) => await elem.setValue(username));
        // await userNameElem.setValue(username);
        let passwordElem = await this.inputPassword();
        await passwordElem.setValue(password);
        let submitBtn = await this.btnSubmit();
        await submitBtn.click();
        return new securePage();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open(path = "login") {
        return super.open(path);
    }

    launch(url) {
        return super.launch(url);
    }
}

export default new LoginPage();
