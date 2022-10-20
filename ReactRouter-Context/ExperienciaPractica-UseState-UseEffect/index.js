import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState} from "react";
//import App from './App';
import reportWebVitals from './reportWebVitals';

function Cabecera(){
  const estiloTitulo = {
    color: "white",
    fontsize:"60px"
  }
  const estiloCabecera = {
    background: 'green',
  }
  return (
    <div style={estiloCabecera}>
      <h2 style={estiloTitulo}> Experiencia de Práctica N°1</h2>
      <h1 style={{color:"greenyellow"}}><em> Hook - UseState </em></h1>
    </div>
  );
}

const estiloBoton = {
  fontsize: "100px",
  padding: "10px 60px",
  margin: "10px 60px"
}

function UsoEstado1(){
const[respuesta,setResp] = useState(0);
const[verificar,setVerif] = useState("")

const verificarRespuesta = () => {
  if (respuesta == 1540){
    setVerif("Correcta");
  }
  else{
    setVerif("Incorrecta");
  }
 }

 return (
  <>
  <Cabecera/>
  <div style={{background:"green"}}>
    <h2 style={{color:"white"}}> EJEMPLO 1</h2>
  </div>
  <div>
    <h2>PREGUNTA: ¿En qué año se fundó Arequipa?</h2>
    <h3><em> Click en un botón responder</em></h3>
    <button 
      style = {estiloBoton} 
      onClick={() => setResp(1540)}>1540</button>
    <button 
      style = {estiloBoton}
      onClick={() => setResp(1541)}>1541</button>
    <h2> Arequipa se fundo en {respuesta} </h2>
    <h3><em> Click en el botón verificar tu respuesta</em></h3>
    <button 
      style={estiloBoton}
      onClick={verificarRespuesta}>Verificar</button>
    <h2> Tu respuesta es: {verificar} </h2>
  </div>
  </>
);
};

function UsoEstado2(){
 const[mensaje,setMens] = useState(
  {
    color: "negro",
    texto:"Este es un mensaje"
  })

return(
  <>
  <Cabecera/>
  <div style={{background:"green"}}>
    <h2 style={{color:"white"}}>EJEMPLO 2</h2>
  </div>
  <div>
    <h2>{mensaje.texto}</h2>
    <h2>Su color es: {mensaje.color}</h2>
  </div>
  </>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UsoEstado2/>);

reportWebVitals();