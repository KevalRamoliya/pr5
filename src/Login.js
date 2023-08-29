import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const goto = () => {
        navigate('/')
    }
    return (
        <React.Fragment>
            <div>
                <div className="container">
                    <header>SignIn Form</header>

                    <div className="form-outer">
                        <form action="#">
                            <div className="page slide-page">
                                <div className="field">
                                    <div className="label">Email</div>
                                    <input type="email" name='email' placeholder='Email' onChange={onchange} />
                                </div>
                                <div className="field">
                                    <div className="label">Passoword</div>
                                    <input type="password" name='password' placeholder='Password' onChange={onchange} />
                                </div>
                                <div className="field">
                                    <Link className='cp' to="/forget">Forgot Passoword</Link>
                                    <Link to="/dash">Sign In</Link>
                                </div>
                                <div className='reg'>
                                    <span className='fw-bolder me-3'>Don't have an account? <span className='in' onClick={() => goto()}> Sing Up </span></span>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Login
