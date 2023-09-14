import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  console.log(currentUser)
  
  async function handleLogout(){
    setError('')

    try {
      await logout()
      navigate('/login')
    } catch(error){
      setError('Falied to logout', error)
    }
  }
  return (
    <div className='dashboard-page'>
      <div className='container'>

    <header className='row'>
      <div className='col'>
        Hello, {currentUser.displayName}!
      </div>
      <div className='col text-end'>
    <button onClick={handleLogout}><Link to="/login">Logout</Link></button>
      </div>
    </header>
      </div>

      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

export default Dashboard