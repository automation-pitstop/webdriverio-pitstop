import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    // /**
    //  * define selectors using getter methods
    //  */
    // get flashAlert () {
    //     return $('#flash');
    // }

    constructor() {
        super();
        console.log("Secure page class created");
    }
}

export default SecurePage;
