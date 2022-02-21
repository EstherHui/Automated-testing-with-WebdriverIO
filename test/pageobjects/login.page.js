import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get UsernameTXB() {
        return $('input[name="username"]');
    }

    get PasswordTXB() {
        return $('input[name="password"]');
    }

    get LoginBTN() {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.UsernameTXB.setValue(username);
        await this.PasswordTXB.setValue(password);
        await (await this.LoginBTN).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();
