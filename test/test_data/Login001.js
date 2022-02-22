import Credential from "../entity/credential";

const credentialL = new Credential();
credentialL.username = 'candy';
credentialL.password = 'Qwerty!23';
credentialL.invalid_username = 'Candies';
credentialL.invalid_password = 'Axciou!23';
credentialL.busername = '';
credentialL.bpassword = '';

const data= {
    
    credential : credentialL
}

export default data;
