import React from 'react'
import { Link } from 'react-router-dom'

function SignupCard() {
    return (
        <div className='card login-card'>
            <div className='card-header mt-3 px-md-5' style={{background: "none", border: "none"}}>
                <div className='row justify-content-between card-header-label'>
                    <div className='col'>Sign Up</div>
                    <Link to="/login" className='col text-end'>Log In</Link>
                </div>
            </div>
            <div className='card-body p-md-5'>
                <form>

                <div className='form-label'>
                    <label>
                       First name
                    </label>
                    <div>
                    <input className='w-100' type="text" name="first name" required/>
                    </div>
                    </div>

                    <div className='form-label'>
                    <label>
                       Email address 
                    </label>
                    <div>
                    <input className='w-100' type="text" name="email address" required/>
                    </div>
                    </div>

                    <div className='form-label'>
                    <label>
                        Password
                    </label>
                    <div>
                        <input className="w-100" type="password" name="password" required/>
                    </div>
                    </div>

                    <div className='form-label'>
                    <label>
                        Confirm password
                    </label>
                    <div>
                        <input className="w-100" type="password" name=" confirm password" required/>
                    </div>
                    </div>

                    <div className='text-center form-label'>
                        <input type="submit" value="Log In" />
                    </div>
                </form>
            </div>
        </div>
  )
}

export default SignupCard