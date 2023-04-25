import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from './components/questions';
import QuizView from './components/QuizView';
import ScoreView from './components/ScoreView';
import { useState } from 'react';

function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < Questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation /> 
    
      <Routes>
      <Route path="/" element={
         <div className="kviz">
         {isQuizOver ? (
           <ScoreView handleResetClick={handleResetClick} score={score} />
         ) : (
           <QuizView
             questions={Questions}
             currentQuestion={currentQuestion} 
             handleAnswerClick={handleAnswerClick}
           />
         )}
       </div>
        }/>
      
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      <Footer/> 

    </BrowserRouter>
    
    
    
    </div>
  );
}

export default App;