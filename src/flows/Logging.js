import LoginPage from '../pages/Login';

export default class Logging {

    constructor(tetData){
        this._testData = testData;
    }

    login(){
        LoginPage.open()
        .inputUsername(this._testData.username)
        .inputPassword(this._testData.password)
        .clickLoginBtn();

        return this;
    }

    verifyLoggingSuccessfully(){
        //use Chai assertion to verify title
        const expect = require('chai').expect;
        expect(browser.getTitle()).to.equal('Satoken | Member');

        return this;
    }
}