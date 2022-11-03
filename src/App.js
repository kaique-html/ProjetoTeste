import React from "react";

import "./app.css";

import imagem from "./componentes/imgs/imagem.svg";

import FirscComponent from "./componentes/FirstComponent";

import SecondComponent from "./componentes/SecondComponent";

import TeceiroComponent from "./componentes/TerceiroComponent";

import Eventos from "./componentes/FourthComponet";


const app = () => {

  function Evento(){
   location.reload()
  }
  
  return ( <body><header>
    <div className="container">
    <nav>
      <div className="logo">
        <span>Buzzpy-Tech</span>
      </div>
      <ul>
        <li> <a href="#Home" title="Home">Home</a></li>
        <li> <a href="#Sobre" title="Sobre">Sobre</a></li>
        <li> <a href="#Caracteristicas" title="Caracteristicas">Caracteristicas</a></li>
        <li> <a href="#Tente" title="Tente">Tente</a></li>
        <li> <a href="#Depoimentos" title="Depoimentos">Depoimentos</a></li>
        <li> <a href="#Blougue" title="Blouge">Blougue</a></li>
      </ul>
    </nav>
    </div>
    <div className="subcontainer" id="Home">
   <div className="item1"> <h2 className="titulo">Bem-vindo à sua Prova </h2>
    <h3 className="subtitulo">de Conceito BuzzPy-Tech</h3>
    <p className="p1">Use este aplicativo como sua própria prova de conceito para explorar os recursos do Butter por si mesmo. Quando estiver pronto, hospede este aplicativo e convide sua equipe para experimentá-lo bem!</p>
    <button className="bnt" onClick={Evento}>Upade page in BuzzPy</button>
    <a className="link" href="https://vercel.com/templates/next.js/NextJS-starter-buttercms">Need an account?</a>
   </div>
    <div className="item2">
      <img src={imagem} className="img1"/>
            </div>
    </div>
    </header>
<FirscComponent />
<SecondComponent />
<TeceiroComponent />
<Eventos />
      <script src="https://kit.fontawesome.com/6d00fbc472.js" crossorigin="anonymous"></script>
  </body>)
};

export default app;