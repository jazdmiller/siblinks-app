import React, { useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
           await resetPassword(emailRef.current.value)
           setMessage('Check your inbox for further instructions')
        } catch(err){
            setError('Failed to reset password.')
            console.error(err)
        } finally {

            setLoading(false)
        }
    }
  return (
        <div className='card login-card'>
            <div className='card-header mt-3 px-md-5' style={{background: "none", border: "none"}}>
                <div className='row justify-content-between card-header-label'>
                    <div className='col'>Reset Password</div>
                    <Link to="/signup" className='col text-end'>Sign Up</Link>
                </div>
            </div>
            {message && <div className='alert alert-success'>{message}</div>}
            {error && <div className='alert alert-danger'>{error}</div>}
            <div className='card-body p-md-5'>
                <form onSubmit={handleSubmit}>

                    <div className='form-label'>
                    <label>
                       Email address 
                    </label>
                    <div>
                    <input className='w-100' type="text" name="email address" ref={emailRef}/>
                    </div>
                    </div>

                    <div className='text-center form-label'>
                        <input disabled={loading} type="submit" value="Reset Password" />
                    </div>
                </form>
                <div className="text-center mt-3"><Link to="/login">Login</Link> </div>
            </div>
        </div>
  )
}

export default ForgotPassword