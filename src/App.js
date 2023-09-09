import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'
import Protected from './components/Protected';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const logIn = () => {
    setIsLoggedIn(true)
  }
  const logOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/dashboard" element={<Protected isLoggedIn={isLoggedIn}><Dashboard /></Protected>}/>
      </Routes>
    </Router>
  );
}

export default App;
