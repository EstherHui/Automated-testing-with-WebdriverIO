import LoggingFlow from '../flows/Logging';

describe('Login001 - ', () => {

    it('should login successfully with valid accout', () => {
        const validAccount = {
            username: 'active000' ,
            password: '123456'
        }

        const loggingFlow = new LoggingFlow(validAccount);
        loggingFlow.login().verifyLoggingSuccessfully()
    });

});