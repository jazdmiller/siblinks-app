import React from 'react'
import SignupCard from '../components/SignupCard'

function Signup() {
  return (
    <div className='login-page'>
        <header className='row text-center w-100'>
            <div className='my-4 header-logo'><span style={{fontFamily: "Nyght Serif Italic"}}>Sib</span>Links</div>
        </header>
        <div className='justify-content-center row w-100 mt-5'>
        <SignupCard />
        </div>
    </div>
  )
}

export default Signup