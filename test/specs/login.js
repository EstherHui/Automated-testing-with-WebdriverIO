import LoginPage from  '../pageobjects/login.page';
import Login from  '../flow/Login';
import testdata from '../test_data/Login001';
import testdataF from '../test_data/Login002';


// describe('Login001', () => {

//     it("T001 - Login Display", async() => {
       
//         await LoginPage.open(); 
//         await LoginPage.VerifyLogin();

//     })

//     it('T002 - Login with blank all field', async () => {
        
//         const loginFlow = new Login();
//         await loginFlow.blank();
//         let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
//         await expect(message).toHaveTextContaining('Is Required');

//     });

//     it('T003 - Login with blank Username', async () => {
        
//         const blankUsername= testdata.credential;
//         const loginFlow = new Login(blankUsername);
//         await loginFlow.loginNoUsername();
//         let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
//         await expect(message).toHaveText('Username Is Required');

//     });

//     it('T004 - Login with blank Password', async () => {
        
//         const blankpass= testdata.credential;
//         const loginFlow = new Login(blankpass);
//         await loginFlow.loginNoPassword();
//         let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
//         await expect(message).toHaveText('Password Is Required');

//     });

//     it('T005 - Login with valid username and invalid password', async () => {
        
//         const invalid_password= testdata.credential;
//         const loginFlow = new Login(invalid_password);
//         await loginFlow.loginInPassword();
//         let error = await $('[class="MuiAlert-message css-1w0ym84"]');
//         await expect(error).toHaveText('Invalid Username or Password');

//     });

//     it('T006 - Login with invalid username and valid password', async () => {
        
//         const invalid_username= testdata.credential;
//         const loginFlow = new Login(invalid_username);
//         await loginFlow.loginInUsername();
//         let error = await $('[class= "MuiAlert-message css-1w0ym84"]');
//         await expect(error).toHaveText('Invalid Username or Password');

//     });

//     it('T007 - Login with not existing user', async () => {

//         const NotExisting= testdata.credential;
//         const loginFlow = new Login(NotExisting);
//         await loginFlow.loginNoExisting();
//         let error = await $('[class= "MuiAlert-message css-1w0ym84"]');
//         await expect(error).toHaveText('Invalid Username or Password');

//     });

//     it('T008 - Login successful', async () => {
  
//         const validacc= testdata.credential;
//         const loginFlow = new Login(validacc);
//         await loginFlow.login();
//         await expect(browser).toHaveUrlContaining('home'); 

//     });
    
// });

describe('Login002', () =>{

    it('T009 - Forgot Password Display', async () => {

        await LoginPage.open();
        await LoginPage.clickForgotBtn;
        await LoginPage.VerifyForgotPass;

    });

    it('T010 - Reset password with blank all field', async () => {
        
        const loginFlow = new Login();
        await loginFlow.blankForgot();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveTextContaining('Is Required');

    });

    it('T011 - Reset password with blank email field', async () => {
        
        const blankEmail= testdataF.credential;
        const loginFlow = new Login(blankEmail);
        await loginFlow.ForgotPassBEmail();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Email Is Required');
        
    });

    it('T012 - Reset password with blank username field', async () => {
        
        const blankUsername= testdataF.credential;
        const loginFlow = new Login(blankUsername);
        await loginFlow.ForgotPassBUsername();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1jbqw8g"]');
        await expect(message).toHaveText('Username Is Required');

    });

    it('T013 - Reset password with invalid email', async () => {
        
        const inEmail= testdataF.credential;
        const loginFlow = new Login(inEmail);
        await loginFlow.ForgotInEmail();
        let error = await $('[class="MuiAlert-message css-1w0ym84"]');
        await expect(error).toHaveTextContaining('Not Found');
      
    });

    it('T014 - Reset password with wrong email format ', async () => {
        
        const wFormatEmail= testdataF.credential;
        const loginFlow = new Login(wFormatEmail);
        await loginFlow.ForgotWFormatEmail();
        let message = await $('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-1jbqw8g"]');
        await expect(message).toHaveText('Invalid Email Format');

    });

    it('T015 - Reset password with invalid username', async () => {
        
        const inUsername= testdataF.credential;
        const loginFlow = new Login(inUsername);
        await loginFlow.ForgotInUsername();
        let error = await $('[class="MuiAlert-message css-1w0ym84"]');
        await expect(error).toHaveTextContaining('Not Found');

    });

});