import Credential from "../entity/credential";

const credentialL = new Credential();
credentialL.username = 'candy';
credentialL.email = 'candy@gmail.com';
credentialL.invalid_username = 'Candies';
credentialL.invalid_email = 'candies@gmail.com';
credentialL.Wformat_email = 'candies#gmail.com';
credentialL.busername = '';
credentialL.bemail = '';

const data= {
    
    credential : credentialL
}

export default data;
