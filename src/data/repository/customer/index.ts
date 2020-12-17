import CustomerCloud from './cloud';
import CustomerStorage from './storage';

export default class CustomerRepository {
    loginUser = (email: string, password: string) => {
        
        return CustomerCloud.Login(email, password);
    }

 

}