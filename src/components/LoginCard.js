import React from 'react'

function LoginCard() {
  return (
        <div className='card w-50'>
            <div className='card-header'>
                <div className='row justify-content-between'>
                    <div className='col'>Log In</div>
                    <div className='col text-end'>Sign Up</div>
                </div>
            </div>
            <div className='card-body mt-4 p-5'>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item p-3'>Email address</li>
                    <li className='list-group-item p-3'>Password</li>
                    <li className='list-group-item p-3'>
                        <button>Log In</button>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default LoginCard