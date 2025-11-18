import { useState } from "react";
import axios from "axios";

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviar = async (e) => {
    e.preventDefault();
    if (!nome || !telefone || !servico) {
      setMensagem("⚠️ Preencha todos os campos!");
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/agendamentos", { nome, telefone, servico });
      setMensagem("✅ Agendamento realizado com sucesso!");
      setNome(""); setTelefone(""); setServico("");
    } catch (err) {
      setMensagem("❌ Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="container">
      <h2>Agendar Consulta</h2>
      <form onSubmit={enviar}>
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input type="text" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
        <select value={servico} onChange={e => setServico(e.target.value)}>
          <option value="">Selecione o serviço</option>
          <option>Fisioterapia Geral</option>
          <option>Pilates Terapêutico</option>
          <option>RPG</option>
          <option>Reabilitação Pós-operatória</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
