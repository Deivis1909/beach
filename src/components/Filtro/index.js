import { useState } from "react";

export default function FiltroPraias({ onChange }) {
  const [opcao, setOpcao] = useState('');

function handleChange(event) {
    const { value } = event.target;
    setOpcao(value);
    onChange(value);
  }

  return (
    <header className="filtro">
      <h4>Selecione uma opção de balneabiliade</h4>
    <select className="sele" value={opcao} onChange={handleChange}>
      <option className="sele" value="">Selecione uma opção</option>
      <option className="sele" value="propria">Praias próprias</option>
      <option className="sele" value="impropria">Praias impróprias</option>
    </select>
    </header>
  );
}