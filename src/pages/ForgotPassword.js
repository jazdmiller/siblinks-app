import React, { useRef, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ForgotPassword() {
    const emailRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
        //    await login(emailRef.current.value, passwordRef.current.value)
           navigate('/dashboard')
        } catch(err){
            setError('Failed to login.' + err.message)
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