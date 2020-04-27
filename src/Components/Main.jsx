import React from 'react';
import PlayGame from './PlayGame.jsx'
import './Main.css'

function Main(){
    return(
        <div>
            <PlayGame/>
            <button id="reset" onClick={()=>window.location.reload()}>
                Restart Game!
            </button>
        </div>
    )
}

export default Main;