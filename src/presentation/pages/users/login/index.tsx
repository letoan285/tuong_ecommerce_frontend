import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { IUserLogin, login } from '../../../redux/actions/users';

interface ILogin {
    login: (user: IUserLogin) => void;
}

const Login: React.FC<ILogin> = ({login: handleLogin}) => {
    const history = useHistory();

    const [passwordText, setPasswordText] = useState('password');
    const [user, setUser] = useState({
        email: '',
        password: '',
        remember: true
    });
    const handleChange = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleLogin(user);
        const historyPage = localStorage.getItem('history_page');
        // alert(historyPage);
        if(historyPage){
            history.push(`/${historyPage}`);
        } else {
            history.push('/');
        }
        // console.log(user);
        
    }
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
                                        <label htmlFor="frm-login-uname">Email Address:</label>
                                        <input type="text" id="frm-login-uname" value={user.email} name="email" onChange={handleChange} placeholder="Type your email address" />
                                    </fieldset>
                                    <fieldset className="wrap-input">
                                        <label htmlFor="frm-login-pass">Password:</label>
                                        <input type={passwordText} id="frm-login-pass" value={user.password} onChange={handleChange} name="password" placeholder="************" />
                                    </fieldset>

                                    <fieldset className="wrap-input">
                                        <label className="remember-field">
                                            <input className="frm-input " name="rememberme" id="rememberme" value="forever" type="checkbox" /><span>Remember me</span>
                                        </label>
                                        <a className="link-function left-position" href="#" title="Forgotten password?">Forgotten password?</a>
                                    </fieldset>
                                    <input type="submit" className="btn btn-submit" value="Login" name="submit" />
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
        propsData: state.productsReducer
    }
  }
  
  const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        login
    },
    dispatch
  )
  
 export default connect(mapStateToProps, mapDispatchToProps)(Login);
