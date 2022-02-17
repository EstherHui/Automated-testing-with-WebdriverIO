const { default: $ } = require("webdriverio/build/commands/browser/$");

const PAGE_NAV = 'http://uwu.securelayers.cloud/login';
const USERNAME_TXB = 'input[name = "username"]';
const PASSWORD_TXB = 'input[name = "password"]';
const LOGIN_BTN = 'button[type = "submit"]';
const FORGOT_PW_BTN = 'button[contains(text(),"Forgot Password?")]';
const SIGNUP_BTN = 'button[contains(text(),"SIGN UP")]';

class Login{

    open(){
        browser.url(PAGE_NAV);
        return this;
    }

    UsernameTXBDisplay(){
        return $(USERNAME_TXB).isDisplayed(); // if TXB is display return true if not return false
    }

    PasswordTXBDisplay(){
        return $(PASSWORD_TXB).isDisplayed();
    }

    LoginBTNDisplay(){
        return $(LOGIN_BTN).isDisplayed();
    }

    SignUpBTNDisplay(){
        return $(SIGNUP_BTN).isDisplayed();
    }

    LoginCredential(username, password){
        $(USERNAME_TXB).setValue(username);//input username
        $(PASSWORD_TXB).setValue(password);//input password
        $(LOGIN_BTN).click();//click login button to submit

        return this; // return object
    }

    

}
export default new Login();