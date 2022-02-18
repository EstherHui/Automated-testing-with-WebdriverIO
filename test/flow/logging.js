import LoginPage from '../page/LoginPage.js';

class Logging {
    
    LoginDisplay() {
        
        LoginPage.open();
        expect(LoginPage.Username_TXB).toBe(true);
        //expect(LoginPage.PasswordTXB.isDisplayed()).toBe(true);
        //expect(LoginPage.LoginBTN.isDisplayed()).toBe(true);
        //expect(LoginPage.ForgotPassBTN.isDisplayed()).toBe(true);
        //expect(LoginPage.SignBTN.isDisplayed()).toBe(true);

        return this;
    }
}
export default new Logging();