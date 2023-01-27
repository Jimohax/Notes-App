import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div className="logIn">
        <Header />
        <form action="" className="create-note center-note">
            <h1 className='pop'>Log In</h1>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Password' />
            
        </form>
    </div>
  )
}

export default Login