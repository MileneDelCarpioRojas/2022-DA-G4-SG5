import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class CambiarColor extends React.Component{
  constructor(props){
    super(props);
    this.state = {color: "negro"}
  }

  render (){
    return (
      <>
      <h1>Elijo el color: {color}</h1>
      <button
        type="button"
        onClick={() => setColor("azul")}
      >Cambiar Color</button>
    </>  
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CambiarColor />);

export default CambiarColor;
