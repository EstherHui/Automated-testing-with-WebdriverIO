import Login from '../pages/Login';

 export default class Logging{

    constructor(credential){
        this.credential= credential;
    }
    
    verifyLoginPage(){
        
        Login.open();
        expect(Login.UsernameTXBDisplay()).toBe(true);
        expect(Login.PasswordTXBDisplay()).toBe(true);
        expect(Login.LoginBTNDisplay()).toBe(true);
        expect(Login.SignUpBTNDisplay).toBe(true);

        return this;
    }

    loginWithCredential(credential){
        Login.open().LoginCredential(credential.usernamer,credential.password);
        return this;
    }

    verifyLoggingSuccessfully() {

        const expect = require('chai').expect;
        expect(browser.getUrl()).toEqual(url.resolve(browser.options.baseUrl, 'http://uwu.securelayers.cloud/home'));//go to other page
        return this;
      }
    
      verifyLoggingFailed() {
          const newLocal = 'src';
          const expect = require('chai').expect;
        expect(browser.getUrl()).toEqual(url.resolve(browser.options.baseUrl, newLocal));//run again
        return this;
      }
}
