import React from 'react'
import Header from './Header'

const SignUp = () => {
  return (
    <div className="signup">
          <Header />
        <form action="" className="create-note sign">
            <h1>Sign Up</h1>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Retype Password' />
            
        <div>
          <span className='dont' style={{fontSize: "12px"}}>Don't have an account? Login!</span>
        </div>
        <button className="button infoButton" type="submit">
        LogIn
        </button>
        </form>
    </div>
  )
}

export default SignUp;