import React, {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import './Result.css'



const Result = ({score}) => {
    let navigate = useNavigate();
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const nameInput = useRef(null);
    

    

    const addHighScore = () => {

        const highScore = {
            "id" : highScores.length+1,
            "name" : nameInput.current.value,
            "highscore" : score
        }

        highScores.push(highScore);

        highScores.sort((a,b) => b.highscore - a.highscore );
        highScores.splice(5);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        

        navigate("/highscore")

    }

    
    return (
        <>
            <div className="container-fluid">
                <div className="card" >
                     <div className="card-body">
                        <h2 className="card-title">All Done!</h2>
                        <div className='text-holder'>
                            <p className="card-text">Your Final Score is {score}</p>
                        </div>
                        <div  className='input-container'>
                            <input 
                                ref={nameInput} 
                                type="text" 
                                className="form-control input" 
                                placeholder="Enter your name!" 
                            />
                            <button 
                                className ="btn btn-primary btn-submit" 
                                type="button" 
                                id="button-addon2 " 
                                onClick={addHighScore}
                            >
                                SUBMIT
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Result
