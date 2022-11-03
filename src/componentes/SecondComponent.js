import React from "react"

import './Second.css'

import imagem from "./imgs/imgs.svg"

import icone from "./imgs/icone.webp"

import icone2 from "./imgs/icone3.webp"

import icone3 from "./imgs/icone2.webp"

import icone4 from "./imgs/icone4.webp"

function SecondComponent (){
    return(
        <div className="second-container" id="Caracteristicas">
            <h1 className="second-titulo">
            This page is built using<br/> ButterCMS Components
            </h1>
            <p className="second-prgf">This page is an example of utilizing Butter Components <br/>which allow you to build dynamic landing pages by<br/> choosing Components from a Component Library. Reuse <br/> and reorder Components in any way you want!</p>
        <img src={icone} className="first-icon" />
        <h3 className="second-titulo2">Components on this page</h3>
        <p className="second-prgf2">This sample page has four component <br/>types: hero, two column with image, <br/>features, and testimonials.</p>
       <img src={icone2} className="second-icon" />
       <h3 className="second-titulo3">Infinite possibilities</h3>
        <p className="second-prgf3">Build carousels, call to actions,<br/> testimonials, and much more. There's <br/>infinite flexbility.</p>
        <img src={icone3} className="second-icon2" />
        <h3 className="second-titulo4">Build your own</h3>
        <p className="second-prgf4">This page is just an example set of<br/> Components. You can build your own<br/> custom Component library!</p>
        <img src={icone4} className="second-icon3" />
     <h3 className="second-titulo5">Reorder them</h3>
       <p className="second-prgf5">Components are great because you <br/>can reorder them from your Butter<br/> dashboard</p>
        </div>
    )
}


export default SecondComponent;