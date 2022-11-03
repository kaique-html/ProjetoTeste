import React from "react";

import "./Terceiro.css"

import imagem from "./imgs/ima.svg"


function TerceiroComponent () {
    return(<div className="third-container" id="Tente">
        <h1 className="third-titulo">Customize this page</h1>
    <p className="third-prgf">Try updating the content of this page to reflect your own. You can<br/> also explore modifying these components or creating your own in your<br/> Butter dashboard. Learn more about Page Types and Components.</p>
    <button className="third-bnt">Upade this page in Buzz</button>
    <img src={imagem} className="third-img" />
    </div>)
}

export default TerceiroComponent;