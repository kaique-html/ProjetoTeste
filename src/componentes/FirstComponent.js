import React from "react";

import imagem from "./imgs/img.svg"

import './First.css'

function FirscComponent (){

    function Evento(){
        location.reload()
    }

    return(
        <div className="first-container" id="Sobre">
            <img src={imagem} className="img" />
            <h1 className="first-titulo">ButterCMS is your <br/>content backend</h1>
            <p className="first-prgf">Butter has three core content solutions: Pages, Posts, and Collections.<br/> Combine this with advanced capabilities like localization, Write API, <br/>multi-site + multi-env and Butter is your centralized content backend<br/> no matter how much content you're managing.</p>
            <button className="first-bnt" onClick={Evento} >Upade this Page in Buzz</button>
        </div>

    )
}

export default FirscComponent;