import React from 'react'
import "./Loginpage.css";
import { NavLink } from 'react-router-dom';

const Loginpage = () => {
  return (
       <div className="login">
      <h4 className="login-title">Login Here</h4>

      <div className="login-flex">
        <div className="login-box1">
          <ul className="login-text1">
            Hi!
            <br />
            Welcome Back,
          </ul>

          <div className="username">
            <input
              className="line-input"
              type="text"
              placeholder="Username, Email or Phone Number"
            />
            <input
              className="line-input"
              type="password"
              placeholder="Password"
            />
          </div>

            <span className='signupbotton-text'>
                Dont have account?
            <NavLink to="/signup" >Sign Up</NavLink>
            </span>

        </div>

        <div className="login-box2"></div>
      </div>
    </div>
  )
}

export default Loginpage