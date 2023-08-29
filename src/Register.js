import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Register() {
    const url = "http://localhost:3000/Employe";
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const onchange = (e) => {
        setdata({
            ...data, [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();

        setdata({
            name: "",
            email: "",
            passwoed: "",
            cpassword: ""
        })
        console.log(setdata);
    }

    const navigate = useNavigate();
    const goto = () => {
        navigate('/login')
    }

    return (
        <React.Fragment>
            <table>
                <div>
                    <div className="container">
                        <header>Signup Form</header>

                        <div className="form-outer">
                            <form action="#" onClick={submit}>
                                <div className="page slide-page">
                                    <div className="title">Basic Information :-</div>
                                    <div className="field">
                                        <div className="label">First Name</div>
                                        <input type="text" name='name' placeholder='Name' onChange={onchange} />
                                    </div>
                                    <div className="field">
                                        <div className="label">Email</div>
                                        <input type="email" name='email' placeholder='Email' onChange={onchange} />
                                    </div>
                                    <div className="field">
                                        <div className="label">Passoword</div>
                                        <input type="password" name='password' placeholder='Password' onChange={onchange} />
                                    </div>
                                    <div className="field">
                                        <div className="label">Conform Passoword</div>
                                        <input type="password" name='cpassword' placeholder='Confrom Password' onChange={onchange} />
                                    </div>
                                    <div className="field">
                                        <Link to="/login">Sign Up</Link>
                                    </div>
                                    <div className='reg'>
                                        <span className='fw-bolder'>Already have an account? <span onClick={() => goto(navigate())} className='in'>Sign In</span></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </table>
        </React.Fragment>

    )
}

export default Register
