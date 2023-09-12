import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function SignupCard() {
    const firstNameRef = useRef() 
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('false')

    function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Passwords do not match.')
        }

        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account.')
            setLoading(false)
        }
    }
    return (
        <div className='card login-card'>
            <div className='card-header mt-3 px-md-5' style={{background: "none", border: "none"}}>
                <div className='row justify-content-between card-header-label'>
                    <div className='col'>Sign Up</div>
                    <Link to="/login" className='col text-end'>Log In</Link>
                </div>

                {error && <div className='alert alert-danger'>{error}</div>}
            </div>
            <div className='card-body p-md-5'>
                <form onSubmit={handleSubmit}>

                <div className='form-label'>
                    <label>
                       First name
                    </label>
                    <div>
                    <input className='w-100' type="text" ref={firstNameRef} name="first name" required/>
                    </div>
                    </div>

                    <div className='form-label'>
                    <label>
                       Email address 
                    </label>
                    <div>
                    <input className='w-100' type="text" ref={emailRef} name="email address" required/>
                    </div>
                    </div>

                    <div className='form-label'>
                    <label>
                        Password
                    </label>
                    <div>
                        <input className="w-100" type="password" ref={passwordRef} name="password" required/>
                    </div>
                    </div>

                    <div className='form-label'>
                    <label>
                        Confirm password
                    </label>
                    <div>
                        <input className="w-100" type="password" ref={confirmPasswordRef} name="confirm password" required/>
                    </div>
                    </div>

                    <div className='text-center form-label'>
                        <button  >Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default SignupCard