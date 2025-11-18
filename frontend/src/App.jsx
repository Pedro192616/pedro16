import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Agendamento from "./pages/Agendamento";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Clínica BemViver</Link> | <Link to="/sobre">Sobre</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </BrowserRouter>
  );
}

