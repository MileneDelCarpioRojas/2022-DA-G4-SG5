import React, { useEffect, useState } from "react";
/*import "./styles.css";*/

function EnviarMensaje({ message: aviso }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(aviso);
    }, 4000);
    return () => {
      clearInterval(id);
    };
  }, [aviso]);

  return <div className="message">En 4 segundos envio este mensaje a la consola "{aviso}"</div>;
}

export default function App() {
  const [mensaje, setMessage] = useState("Primer mensaje inicial");

  return (
    <div className="App">
      <h3>Escriba un mensaje para enviarlo a la consola</h3>
      <input
        type="text"
        value={mensaje}
        onChange={(e) => setMessage(e.target.value)}
      />
      <EnviarMensaje message={mensaje} />
    </div>
  );
}

