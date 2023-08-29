import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/")
  }
  return (
    <React.Fragment>
      <div>
        <div className="container">
          <header>Forgot Password</header>
          <h5 className='for'>Please enter your email address. You will receive a link to create a new password via email.</h5>

          <div className="form-outer">
            <form action="#">
              <div className="page slide-page">
                <div className="field">
                  <div className="label">Email</div>
                  <input type="email" name='email' placeholder='Email' onChange={onchange} />
                </div>
                <div className="field">
                  <div className="label">New Password</div>
                  <input type="password" name='password' placeholder='Password' onChange={onchange} />
                </div>
                <div className="field">
                  <p className='cp'>Forgat Passoword</p>
                </div>
                <div className='retu'>
                  <h4 onClick={() => goto(navigate('/'))}>Return to the Sign Up Page</h4>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Layout
