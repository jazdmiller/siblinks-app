import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser } = useAuth()
  console.log(currentUser)
  function handleLogout(){

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