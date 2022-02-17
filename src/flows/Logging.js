import LoginPage from '../pages/Login';

 export default class Logging{

    constructor(credential){
        this.credential= credential;
    }
    
    verifyLoginPage(){
        
        
        LoginPage.open();
        expect(LoginPage.UsernameTXBDisplay()).toBe(true);
        expect(LoginPage.PasswordTXBDisplay()).toBe(true);
        expect(LoginPage.LoginBTNDisplay()).toBe(true);
        expect(LoginPage.SignUpBTNDisplay()).toBe(true);

        return this;
    }

    loginWithCredential(credential){
        LoginPage.open().LoginCredential(credential.username,credential.password);
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
