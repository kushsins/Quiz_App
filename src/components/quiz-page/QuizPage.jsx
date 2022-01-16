import React, { useState, useEffect } from 'react'
import './QuizPage.css'
import questions from '../../script'
import {useNavigate} from 'react-router-dom'





const QuizPage = ({setScore}) => {


    let navigate = useNavigate();
    
    const [questionNumber, setQuestionNumber] = useState(0);
    const [buttonText, setButtonText] = useState("NEXT");
    const [buttonColor, setButtonColor] = useState("btn-light");
    const [clickedId, setClickedId] = useState(-1);

    const [counter, setCounter] = useState(60);
    const [clicker, setClicker] = useState(0);
    const [corretAnswerCount, setCorretAnswerCount] = useState(0);
    
    useEffect(() => {
        if(counter <= 0){
            finishQuiz();
        }
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    
    const nextQuestion = () => {
        setClicker(0);
        setClickedId(-1);
        if(questionNumber < 4){
            setQuestionNumber(questionNumber+1);
            if(questionNumber === 3 ){
                setButtonText("Finish");
            }
        }else  {
           finishQuiz();
        }
        
    }

    const finishQuiz = () => {
        navigate("/result");
        setScore(counter*corretAnswerCount);
        

    }



    return (
        <>
            <div className="container-fluid">
                <div className="card" >
                    <div className="card-body">
                        <h2 className="card-title">{questions[questionNumber].questionText}</h2>
                        {questions[questionNumber].options.map((option) => (
                            <button className={` ${option.id === clickedId ? buttonColor: "btn-light"} btn option-btn`} key={option.id} 
                            onClick={(event) => {
                                
                                if (clicker < 1){
                                    setClicker(1)
                                    setClickedId(option.id);
                                    if(event.target.innerText === questions[questionNumber].answer){
                                        setButtonColor("btn-success")
                                        setCorretAnswerCount(corretAnswerCount+1);
                                        
                                    }else{
                                        setButtonColor("btn-danger");
                                        setCounter(counter-10);
                                    }
                                }
                                
                            }}>
                               {option.text}
                            </button>
                        ))}
                        <div className='btn-holder'>
                            <span className='time-section'>
                            {counter <= 0 ? 0 : counter}
                            </span>
                            <button className='btn btn-primary btn-lg next-btn' onClick={nextQuestion}>{buttonText}</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizPage
