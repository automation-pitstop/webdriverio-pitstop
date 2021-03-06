/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open(path) {
        console.log(`Loading the URL : ${browser.config.baseUrl}/${path}`);
        return browser.url(`/${path}`);
    }
    launch(url) {
        if (url.length < 1) {
            console.log(`Loading the URL : ${browser.config.baseUrl}`);
            return browser.url(`${browser.config.baseUrl}`);
        }
        console.log(`Loading the URL : ${url}`);
        return browser.url(url);
    }
}
