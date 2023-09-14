import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'
import Protected from './components/Protected';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const logIn = () => {
    setIsLoggedIn(true)
  }
  const logOut = () => {
    setIsLoggedIn(false)
  }

  return (
    
      <AuthProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>}/>
      </Routes>
    </Router>
        </AuthProvider>
    
  );
}

export default App;
