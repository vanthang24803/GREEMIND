import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Loading from './components/Loading'
import HomePage from './components/HomePage';
import Page404 from './components/Page404';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <div className="App">
      {loading ?
        <Loading loading={loading} />
        :
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}

export default App
