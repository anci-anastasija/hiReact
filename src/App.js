import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from './components/questions';
import TotalOptions from './components/options'; 
import { useState } from 'react';

function App() {
  
  const [quizQuestions, setQuizQuestion] = useState(Questions);
  const [quizOptions, setQuizOption] = useState(TotalOptions);
  const [count, setCount] = useState(0);
  const [wrong, setWrong] = useState(0);
  const[correctAns, setCorrectAns]=useState(0)

  function getAnswer(ans) {
    if (ans === true) {
      setCorrectAns(correctAns + 1);
      setCount(count+1);
    } else {
      alert("Pogresno, probaj opet");
      setWrong(wrong + 1);
    }
  }
  function increaseCount(){
    if(count+1<quizOptions.length){
      setCount(count + 1);
    }
    else{
      alert("Zavrsen kviz!")
    }

  }
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation /> 
    
      <Routes>
      <Route path="/" element={
        <div className='quiz'>
          <div className='heading'>
          <h2 className='title'>Pitanje {count+1} / {quizOptions.length}</h2>
            <div className='get-ans'>
              <span className='correct-ans'>Tacno: {correctAns}</span>
              <span className='correct-ans'>Netacno: {wrong}</span>
            </div>
          </div>
          
          <div className='card'>
            <h2>{quizQuestions[count].question}</h2>
            <div className="options">
              {quizOptions[count].options.map((item) => 
                <button onClick={()=>getAnswer(item.isCorrect)}>{item.option}</button>)}
            </div>
            
            <button className={wrong>3 ? "next disable": "next"} onClick={increaseCount}>{wrong >3 ? "Previse netacnih odgovora :(": "sledece"}</button>

          </div>
       
      </div>}/>
      
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      <Footer/> 

    </BrowserRouter>
    
    
    
    </div>
  );
}

export default App;