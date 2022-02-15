import $ from "webdriverio/build/commands/browser/$";

const PAGE_NAV = 'member'
const USERNAME_TXB = 'input[name="email"]';
const PASSWORD_TXB = 'input[name = "password"]';
const LOGIN_BIN = 'button[type = "submit"]';

class Login{

    open(){
        browser.url(PAGE_NAV);
    }

    inputUsername(username){
        $(USERNAME_TXB).setValue(username);
        return this;
    }

    inputPassword(password){
        $(PASSWORD_TXB).setValue(password);
        return this;
    }

    clickLoginBtn(){
        $(LOGIN_BIN).click();
        return this;
    }


}

export default new Login();