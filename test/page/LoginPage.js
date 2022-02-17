class Login {

    get UsernameTXB(){ return $('input[name="username"]');    }

    get PasswordTXB(){ return $('[name="password"]');    }

    get LoginBTN(){ return $('button[@type = "submit"]');      }

    get SignBTN() { return $('button[contains(text(),"SIGN UP")]'); }

    get ForgotPassBTN() { return $('button[contains(text(),"Forgot Password?")]')}

    open(){ return browser.url('http://uwu.securelayers.cloud/login')}


    //Login Flow
    LoginCredential(username, password){
        
        $(this.UsernameTXB).setValue(username);//input username
        $(this.PasswordTXBB).setValue(password);//input password
        $(this.LoginBTN).click();//click login button to submit

        return this; // return object
    }
}
export default new Login();