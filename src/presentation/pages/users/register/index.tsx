import React, { useEffect, useState } from 'react';
import './register.scss';
import { IUserRegister, register } from '../../../redux/actions/users';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface IUser extends IUserRegister {
    contirm_password: string;
}

interface IRegister {
    register: (user: IUser) => void;
    propsData: any;
}

const Register: React.FC<IRegister> = ({register: handleRegister, propsData}) => {
    const history = useHistory();
    const [isError, setIsError] = useState(false);
    const [isDisabled, setisDisabled] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        contirm_password: ''

    });
    const handleSubmit = (event: any) => {
        event.preventDefault();
        handleRegister(user);
        
    }
    const handleChange = (event: any) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value 
        })
    }

    useEffect(() => {
        if(user.password != user.contirm_password){
            setIsError(true);
            setisDisabled(true);
        } else {
            if(user.password){
                setisDisabled(false);
            }
            setIsError(false);
        }
        
    
    }, [user]);

    useEffect(() => {
        if(propsData.success){
            history.push('/login.html');
        }

    }, [propsData.success]);

    return (
        <div className="container login-page" style={{marginTop: '50px'}}>

            <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
                    <div className=" main-content-area">
                        <div className="wrap-login-item ">
                            <div className="login-form form-item form-stl">
                                <form name="frm-login" onSubmit={handleSubmit}>
                                    <fieldset className="wrap-title">
                                        <h3 className="form-title">Log in to your account</h3>
                                    </fieldset>
                                    <fieldset className="wrap-input">
                                        <label htmlFor="frm-login-uname">Name:</label>
                                        <input type="text" id="frm-login-name" value={user.name} name="name" onChange={handleChange} placeholder="Type your email address" />
                                    </fieldset>
                                    <fieldset className="wrap-input">
                                        <label htmlFor="frm-login-uname">Email:</label>
                                        <input type="text" id="frm-login-uname" value={user.email} name="email" onChange={handleChange} placeholder="Type your email address" />
                                    </fieldset>
                                    <fieldset className="wrap-input">
                                        <label htmlFor="frm-login-pass">Password:</label>
                                        <input type="password" id="frm-login-pass" value={user.password} onChange={handleChange} name="password" placeholder="************" />
                                    </fieldset>
                                    <fieldset className="wrap-input">
                                        <label htmlFor="frm-login-pass">Confirm Password:</label>
                                        <input type="password" id="frm-contirm_password" value={user.contirm_password} onChange={handleChange} name="contirm_password" placeholder="************" />
                                    </fieldset>

                                    {
                                        isError && ( <fieldset className="error-messages">
                                            <li className="error-messages__text">
                                                <span>Password and Confirm Password not match</span>
                                            </li>
                                        </fieldset>)
                                    }
                                   

                                    <fieldset className="wrap-input">
                                        <label className="remember-field">
                                            <input className="frm-input " name="rememberme" id="rememberme" value="forever" type="checkbox" /><span>Remember me</span>
                                        </label>
                                        <a className="link-function left-position" href="#" title="Forgotten password?">Forgotten password?</a>
                                    </fieldset>
                                    <input disabled={isDisabled} type="submit" className="btn btn-submit" value="Register" name="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


const mapStateToProps = (state: any) => {
    return {
        propsData: state.usersReducer.registerReducer
    }
  }
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        register
    },
    dispatch
)
  
 export default connect(mapStateToProps, mapDispatchToProps)(Register);