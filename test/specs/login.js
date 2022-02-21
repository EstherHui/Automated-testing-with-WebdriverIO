import LoginPage from  '../pageobjects/login.page';
//import SecurePage from '../pageobjects/secure.page';

describe('Login001', () => {

    /*it("T001 - Login Display", async() => {
        
       Logging.LoginDisplay();

    })*/
    it('T002 - Login with blank all field', async () => {
       
        await LoginPage.open();        
        await LoginPage.login('', '');
        for (let i=0 ;i<2 ;i++){
        let messageA = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        //let messageB = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await console.log(await messageA.getText());
        //await console.log(messageB);
        };
        
        //await expect(messageA).toHaveText('Username Is Required');
        //await expect(messageB).toHaveText('Password Is Required');
    });

    it('T003 - Login with blank Username', async () => {
        await LoginPage.open();        
        await LoginPage.login('', 'Qwerty!23');
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Username Is Required');
    });

    /*it('T004 - Login with blank Password', async () => {
        await LoginPage.open();        
        await LoginPage.login('candy', '');
        await expect(browser).toHaveTextContaining('Password is required');
    });

    it('T005 - Login with valid username and invalid password', async () => {
        await LoginPage.open();        
        await LoginPage.login('candy', '123456');
        //await expect(browser).toHaveTextContaining('Password is required');
    });

    it('T006 - Login with invalid username and valid password', async () => {
        await LoginPage.open();        
        await LoginPage.login('canyd', 'Qwerty!23');
        //await expect(browser).toHaveTextContaining('Password is required');
    });

    it('T007 - Login with not existing user', async () => {
        await LoginPage.open();        
        await LoginPage.login('Cutie pie', 'Asdf@34');
        //await expect(browser).toHaveUrlContaining('home');
    });
    

    it('T008 - Login successful', async () => {
        await LoginPage.open();        
        await LoginPage.login('candy', 'Qwerty!23');
        await expect(browser).toHaveUrlContaining('home');
    });*/
});


