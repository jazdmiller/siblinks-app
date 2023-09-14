import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function Protected({children}) {

  const { currentUser } = useAuth()

    if(!currentUser){
        return <Navigate to='/login' replace />
    }
  return children;
}

export default Protected