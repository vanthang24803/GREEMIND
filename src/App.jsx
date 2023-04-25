import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Loading from './components/Loading'
import Page404 from './components/Page404';
import Main from './components/Main';
import Login from './components/Login';
import Forgot from './components/Forgot';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div className="App">
      {loading ?
        <Loading loading={loading} />
        :
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />}/>
            <Route path="*" element={<Page404 />} />
            <Route path='/forgot' element={<Forgot />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}

export default App
