import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation /> 
      <Routes>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;