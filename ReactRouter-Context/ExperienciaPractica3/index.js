import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Integrantes from "./pages/Integrantes";
import Numero from "./pages/Numero";
import Curso from "./pages/Curso";
import NoPage from "./pages/NoPage";
import { OtrosCursos } from './pages/OtrosCursos';
import { Teoricos } from './pages/Teoricos';
import { Practicos } from './pages/Practicos';
import { Estudiantes } from "./pages/Estudiantes";
import { CodigoEstudiante } from "./pages/CodigoEstudiante";

export default function App() {
 return (
 <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Integrantes />} />
        <Route path="numero" element={<Numero />} />
        <Route path="curso" element={<Curso />} />
        <Route path="*" element={<NoPage />} />
        <Route path="otroscursos" element={<OtrosCursos />} >
        <Route path="teoricos" element={<Teoricos />} />
        <Route path="practicos" element={<Practicos />} />
 </Route>
 <Route>
 <Route path="estudiantes" element={<Estudiantes />} />
 <Route path="codigoestudiante" element={<CodigoEstudiante />} />
 </Route>
      </Route>
    </Routes>
 </BrowserRouter>
 );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
