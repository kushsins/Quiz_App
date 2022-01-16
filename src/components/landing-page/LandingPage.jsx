import React from 'react'
import './LandingPage.css'
import {useNavigate} from 'react-router-dom'



const LandingPage = ({setActive}) => {
    let navigate = useNavigate();

    return (
        <>
           <div className="container-fluid ">
                <div className="card" >
                     <div className="card-body">
                        <h2 className="card-title">Coding Quiz Challange</h2>
                        <div className='text-holder'>
                            <p className="card-text">Try to answer the following code-related 
                                questions within the time limit</p>
                            <p className="card-text">Keep in mind that incorrect answers will penalize 
                                you score/time by ten seconds! </p>
                        </div>
                        
                        <button className="btn btn-primary" onClick = {() => {
                            navigate("quiz");
                            setActive(true);
                        }}> Start Quiz</button>
                    </div>
                </div>
            </div> 
        </>

    )
}

export default LandingPage
