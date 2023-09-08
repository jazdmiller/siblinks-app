import React from 'react'
import { Link } from 'react-router-dom'

function LoginCard() {
  return (
        <div className='card login-card'>
            <div className='card-header mt-3 px-md-5' style={{background: "none", border: "none"}}>
                <div className='row justify-content-between card-header-label'>
                    <div className='col'>Log In</div>
                    <Link className='col text-end'>Sign Up</Link>
                </div>
            </div>
            <div className='card-body p-md-5'>
                <form>

                    <div className='form-label'>
                    <label>
                       Email address 
                    </label>
                    <div>
                    <input className='w-100' type="text" name="email address" />
                    </div>
                    </div>

                    <div className='form-label'>
                    <label>
                        Password
                    </label>
                    <div>
                        <input className="w-100" type="password" name="password"/>
                    </div>
                    </div>

                    <div className='text-center form-label'>
                        <input type="submit" value="Log In" />
                    </div>
                {/* <ul className='list-group list-group-flush'>
                    <li className='list-group-item p-3'>Email address</li>
                    <li className='list-group-item p-3'>Password</li>
                    <li className='list-group-item p-3'>
                        <button>Log In</button>
                    </li>
                </ul> */}
                </form>
            </div>
        </div>
  )
}

export default LoginCard