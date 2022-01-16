import React, { useState, useEffect } from 'react'
import  './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Navbar = () => {

    
    return (
        <div className='header'>
            <span className="equalHW">
                    <Link className="logo" to ="/">QUIZAPP</Link>
            </span>
            <span>
                <Link to="highscore" className = "equalHW highscore-link">View Highscores 
                <span> </span>
                <FontAwesomeIcon icon={faHandPointLeft}/>
            </Link>
            </span>
           
            
        </div>
    )
}

export default Navbar;
