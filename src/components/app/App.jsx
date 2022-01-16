import React, { useState } from 'react'
import LandingPage from '../landing-page/LandingPage'
import Navbar from '../navbar/Navbar'
import QuizPage from '../quiz-page/QuizPage'
import HighScore from '../highscore/HighScore'
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import Result from '../result/Result'

const App = () => {
  const[score, setScore] = useState(0);
  const[active, setActive] = useState(false);
  
    return (
      <Router>
         <div className='App'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<LandingPage setActive={setActive}/>} />
            <Route path="/quiz" element={active ? <QuizPage setScore = {setScore}/> : <Navigate replace to="/" />}/>
            <Route path="/highscore" element ={<HighScore/>}/>
            <Route path="/result" element = {active ? <Result score = {score}/> : <Navigate replace to="/" />}/>
          </Routes>
        </div>
      </Router>
    )
}

export default App
