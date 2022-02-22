import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get UsernameTXB() {
        return $('input[name="username"]');
    }

    get PasswordTXB() {
        return $('input[name="password"]');
    }

    get LoginBTN() {
        return $('button[type="submit"]');
    }

    get SignUpBTN(){
        return $('button [type ="button"]');

    }

    get ForgotPasswordBTN(){
        return $('[class="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root font-secondary css-1m06nlo"]')

    }

    async VerifyLogin(){

        await (await this.UsernameTXB).isDisplayed();
        await (await this.PasswordTXB).isDisplayed();
        await (await this.SignUpBTN).isDisplayed();
        await (await this.LoginBTN).isDisplayed();
        await (await this.ForgotPasswordBTN).isDisplayed();

        return this;
    }

    async inputUsername(username){
        await (await this.UsernameTXB).setValue(username);
        return this;
    }

    async inputPassword(password){

        await (await this.PasswordTXB).setValue(password);
        return this;
    }

    async clickLoginBtn(){
        await (await this.LoginBTN).click();
        return this;
    }

    get Email(){
        return $('input[name = "email"]');

    }

    get ResetBTN(){
        return $('button[type = "submit"]');

    }

    get ProfileBTN(){
        return $('[class="MuiBox-root css-34k09d"]');

    }

    get SignOutBtn(){
        return $('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1qqmpvb"]')
    }

    get ConfirmBTN(){
        return $('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1tatqka"]')
    }

    async inputEmail(email){

        await (await (this.Email)).setValue(email);
        return this;

    }

    async clickForgotBtn(){
        await (await (this.ForgotPasswordBTN)).click();
        return this;
    }

    async clickResetBtn(){
        await (await (this.ResetBTN)).click();
        return this;
    }

    async VerifyForgotPass(){
        await (await this.ForgotPasswordBTN).click();
        await (await this.UsernameTXB).isDisplayed();
        await (await this.Email).isDisplayed();
        await (await this.ResetBTN).isDisplayed();

    }

    async Logout(){

        await (await this.ProfileBTN).click();
        await (await this.SignOutBtn).click();
        await (await this.ConfirmBTN).click();
    }


    // async clear(){

    //     await (await this.UsernameTXB).clearValue();
    //     await (await this.Email).clearValue();
    //     browser.pause(10000);
    //     console.log( 'Username : ' + (await (await this.UsernameTXB).getText()));

    // }


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();
