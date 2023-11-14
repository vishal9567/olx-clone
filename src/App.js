import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * ?  =====Import Components=====
*/
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContex } from './store/FirebaseContex';
import Post from './store/PostContex'

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContex)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
     <div>
      <Post>
        <Router>
          <Routes>
            <Route Component={Home} path='/' />
          </Routes>
          <Routes>
            <Route Component={Signup} path='/signup' />
          </Routes>
          <Routes>
            <Route Component={Login} path='/login' />
          </Routes>
          <Routes>
            <Route Component={Create} path='/create' />
          </Routes>
          <Routes>
            <Route Component={View} path='/view' />
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
