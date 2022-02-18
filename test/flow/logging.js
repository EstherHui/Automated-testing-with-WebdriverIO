import LoginPage from '../page/LoginPage.js';

class Logging {
    
    LoginDisplay() {
        
        LoginPage.open();
        expect(LoginPage.Username_TXB).toBe(true);
        expect(LoginPage.Password_TXB).toBe(true);
        expect(LoginPage.Login_BTN).toBe(true);
        expect(LoginPage.ForgotPassBTN).toBe(true);
        expect(LoginPage.SignBTN).toBe(true);

        return this;
    }
}
export default new Logging();
