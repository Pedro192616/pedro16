import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Clínica BemViver</h1>
      <p>Bem-vindo à nossa clínica de fisioterapia.</p>
      <Link to="/agendamento"><button>Agendar consulta</button></Link>
    </div>
  );
}
