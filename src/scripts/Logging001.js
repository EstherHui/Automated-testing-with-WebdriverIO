import LoginFlow from '../flows/Logging';

describe('Login001 - ', () => {
  const loggingFLow = new LoginFlow();
  
  it('T001: Verify login page', () => {
    loggingFLow.verifyLoginPage();
  });   

});