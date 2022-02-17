const { default: $ } = require("webdriverio/build/commands/browser/$");
const PAGE_NAV = 'http://uwu.securelayers.cloud/login';
const USERNAME_TXB = 'input[name="username"]';
const PASSWORD_TXB = 'input[name="password"]';
const LOGIN_BTN = 'button[type = "submit"]';
const FORGOT_PW_BTN = 'button[contains(text(),"Forgot Password?")]';
const SIGNUP_BTN = 'button[contains(text(),"SIGN UP")]';

class Login{

    open(){

        browser.url(PAGE_NAV);
        return this;
    }

    UsernameTXBDisplay(){
        username = $(USERNAME_TXB);
        return username.isDisplayed(); // if TXB is display return true if not return false
    }

    PasswordTXBDisplay(){
        password = $(PASSWORD_TXB);
        return password.isDisplayed();
    }

    LoginBTNDisplay(){
        logBTN = $(LOGIN_BTN);
        return logBTN.isDisplayed();
    }

    SignUpBTNDisplay(){
        signBTN = $(SIGNUP_BTN);
        return signBTN.isDisplayed();
    }

    ForgotPassBTNDisplay(){
        forgotBTN = $(FORGOT_PW_BTN);
        return forgotBTN.isDisplayed();
    }

    LoginCredential(username, password){
        $(USERNAME_TXB).setValue(username);//input username
        $(PASSWORD_TXB).setValue(password);//input password
        $(LOGIN_BTN).click();//click login button to submit

        return this; // return object
    }

}
export default new Login();
