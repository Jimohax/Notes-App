import React from 'react'

const Register = () => {
  return (
    <div className="register">
          <Header />
        <form action="" className="create-note">
            <h1>Register</h1>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Retype Password' />
            
        </form>
    </div>
  )
}

export default Register