import LoginPage from '../page/LoginPage.js';

describe ( 'Login001', () => {
    it("T001 - Login Display", function() {
        
        LoginPage.open();
        expect(console.log( LoginPage.UsernameTXB.isDisplayed())).toBeDisplayed(true);
        expect(console.log( LoginPage.PasswordTXB.isDisplayed())).toBeDisplayed(true);
        expect(console.log( LoginPage.LoginBTN.isDisplayed())).toBeDisplayed(true);
        expect(console.log( LoginPage.ForgotPassBTN.isDisplayed())).toBeDisplayed(true);
        expect(console.log( LoginPage.SignBTN.isDisplayed())).toBeDisplayed(true);

    })
})