const { default: $ } = require("webdriverio/build/commands/browser/$");
class Login {

    get UsernameTXB(){ return $('input[name="username"]');    }

    get PasswordTXB(){ return $('input[name="password"]');    }

    get LoginBTN(){ return $('button[@type = "submit"]');      }

    get SignBTN() { return $('button[contains(text(),"SIGN UP")]'); }

    get ForgotPassBTN() { return $('button[contains(text(),"Forgot Password?")]')}

    open(){ return browser.url('http://uwu.securelayers.cloud/login')}

    Username_TXB(){
        
        this.UsernameTXB = usernameTXB;
        return $(usernameTXB).isDisplayed();
    }

    Password_TXB(){
        
        this.PasswordTXB = passwordTXB;
        return $(passwordTXB).isDisplayed();
    }

    Login_BTN(){

        this.LoginBTN = loginBTN;
        return $(loginBTN).isDisplayed();
    }

    Sign_BTN(){

        this.SignBTN = signBTN;
        return $(signBTN).isDisplayed();
    }

    ForgotPass_BTN(){

        this.ForgotPassBTN = forgotPassBTN;
        return $(forgotPassBTN).isDisplayed();
    }


    //Login Flow
    LoginCredential(username, password){
        
        $(this.UsernameTXB).setValue(username);//input username
        $(this.PasswordTXBB).setValue(password);//input password
        $(this.LoginBTN).click();//click login button to submit

        return this; // return object
    }
}
export default new Login();