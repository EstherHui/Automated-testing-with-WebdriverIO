import LoginPage from  '../pageobjects/login.page'

export default class Login{

    constructor(testdata){
        
        this._testdata = testdata;

    }
    async blank () {

        await LoginPage.open();
        await LoginPage.clickLoginBtn();

        return this;
    }

    async login () {

        await LoginPage.open();
        await LoginPage.inputUsername(this._testdata.username);
        await LoginPage.inputPassword(this._testdata.password);
        await LoginPage.clickLoginBtn();
        await LoginPage.Logout

        return this;
    }

    async loginNoUsername () {

        await LoginPage.open();
        await LoginPage.inputUsername(this._testdata.busername);
        await LoginPage.inputPassword(this._testdata.password);
        await LoginPage.clickLoginBtn();

        return this;
    }

    async loginNoPassword () {

        await LoginPage.open();
        await LoginPage.inputUsername(this._testdata.username);
        await LoginPage.inputPassword(this._testdata.bpassword);
        await LoginPage.clickLoginBtn();

        return this;
    }

    async loginInUsername () {

        await LoginPage.open();
        await LoginPage.inputUsername(this._testdata.invalid_username);
        await LoginPage.inputPassword(this._testdata.password);
        await LoginPage.clickLoginBtn();

        return this;
    }

    async loginInPassword () {

        await LoginPage.open();
        await LoginPage.inputUsername(this._testdata.username);
        await LoginPage.inputPassword(this._testdata.invalid_password);
        await LoginPage.clickLoginBtn();

        return this;
    }

    async loginNoExisting () {

        await LoginPage.open();
        await LoginPage.inputUsername(this._testdata.invalid_username);
        await LoginPage.inputPassword(this._testdata.invalid_password);
        await LoginPage.clickLoginBtn();

        return this;
    }

    async blankForgot () {

        await LoginPage.open();
        await LoginPage.clickForgotBtn();
        await LoginPage.clickResetBtn();

        return this;
    }

    async ForgotPass(){
        
        await LoginPage.open();
        await LoginPage.clickForgotBtn();
        await LoginPage.inputUsername(this._testdata.username);
        await LoginPage.inputEmail(this._testdata.email);
        await LoginPage.clickResetBtn();

        return this;
    }

    async ForgotPassBUsername(){
        
        await LoginPage.open();
        await LoginPage.clickForgotBtn();
        await LoginPage.inputUsername(this._testdata.busername);
        await LoginPage.inputEmail(this._testdata.email);
        await LoginPage.clickResetBtn();

        return this;
    }

    async ForgotPassBEmail(){
        
        await LoginPage.open();
        await LoginPage.clickForgotBtn();
        await LoginPage.inputUsername(this._testdata.username);
        await LoginPage.inputEmail(this._testdata.bemail);
        await LoginPage.clickResetBtn();

        return this;
    }

    async ForgotInUsername () {

        await LoginPage.open();
        await LoginPage.clickForgotBtn();
        await LoginPage.inputUsername(this._testdata.invalid_username);
        await LoginPage.inputEmail(this._testdata.email);
        await LoginPage.clickResetBtn();

        return this;
    }

    async ForgotInEmail () {

        await LoginPage.open();
        await LoginPage.clickForgotBtn();
        await LoginPage.inputUsername(this._testdata.username);
        await LoginPage.inputEmail(this._testdata.invalid_email);
        await LoginPage.clickResetBtn();

        return this;
    }

    async ForgotWFormatEmail () {

        await LoginPage.open();
        await LoginPage.clickForgotBtn();
        await LoginPage.inputUsername(this._testdata.username);
        await LoginPage.inputEmail(this._testdata.Wformat_email);
        await LoginPage.clickResetBtn();

        return this;
    }




}