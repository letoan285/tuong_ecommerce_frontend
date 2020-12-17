import { IUseCase } from "../../../shared/interface/common/usecase";
import CustomerRepository from '../../../data/repository/customer';
import { TokenType } from '../../../data/constants'

export default class UserLoginUseCase implements IUseCase {
    userRepository: CustomerRepository;

    constructor(public email: string, public password: string){
        this.userRepository = new CustomerRepository();

    }
    validate = () => {
        if(!this.email || !this.password){
            return false;
        }
        return true;
    }
    execute = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            if(this.validate()){
                this.userRepository.loginUser(this.email, this.password).then((res) => {
                    localStorage.setItem(TokenType.access_token, res.token);
                    resolve(res);
                })
            } else {
     
                reject('Email and Password is required');
            }
           
        })
    };
}