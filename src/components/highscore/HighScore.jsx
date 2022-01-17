import React, { useState, useEffect }  from 'react'
import {useNavigate} from 'react-router-dom'
import './HighScore.css'





const Highscore = () => {
    let navigate = useNavigate();
    const[highScoreStatus, setHighScoreStatus] = useState(true);
    const highScore = JSON.parse(localStorage.getItem("highScores")) || [];
    const clearHighScore = () =>{
        localStorage.setItem("highScores", JSON.stringify([]));
        setHighScoreStatus(true);
    }
    useEffect(() => {
        setHighScoreStatus(highScore.length === 0 ? true : false);
    },[highScore.length]);
   
    
    return (

        <div className="container-fluid">
            <div className="card" >
                <div className="card-body highscore-details">
                        <h2 className="card-title">HighScores</h2>
                        <div className='highscores'>
                            { highScoreStatus ? `NO HIGHSCORES YET` : highScore.map((highScore, number = 0) => (
                                <div key={highScore.id}>
                                    {`${number+1}. ${highScore.name} : ${highScore.highscore}`}
                                </div>
                            ))} 
                        </div>
                        <div className='btn-holder'>
                            <button className='btn-back btn btn-primary' onClick={() => navigate("/") }>GO BACK</button>
                            <button className='btn-clear btn btn-primary' onClick={clearHighScore}>CLEAR HIGHSCORE</button>
                        </div>
                        
                </div>
            </div>
        </div> 
        
    )
}

export default Highscore;
