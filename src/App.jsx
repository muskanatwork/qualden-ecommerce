import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/AboutUs/Aboutus';
import Productus from './components/ProductUs/Products';
import Contactus from './components/ContactUs/Contactus';

function App() {
  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={< Productus/>} />
                <Route path="/contact" element={<Contactus />} />
            </Routes>
        </Router>

    </>
  )
}

export default App
