import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";
 function CambiarColor() {
 const [color, setColor] = useState("negro");
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CambiarColor />);
export default CambiarColor;