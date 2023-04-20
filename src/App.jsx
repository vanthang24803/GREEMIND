import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Selling from './components/Selling'
import About from './components/About'
import Category from './components/Category'
import Company from './components/Company'
import Footer from './components/Footer'
function App() {

  return (
    <div className="App">
     <Navbar />
     <Home />
     <Selling />
     <About />
     <Category />
     <Company />
     <Footer />
    </div>
  )
}

export default App
