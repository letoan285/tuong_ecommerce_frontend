import CustomerCloud from './cloud';
import CustomerStorage from './storage';

export default class CustomerRepository {
    loginUser = (email: string, password: string) => {
        
        return CustomerCloud.Login(email, password);
    }

    registerUser = (name: string, email: string, password: string) => {
        
        return CustomerCloud.Register(name, email, password);
    }


 

}