import { useState,useRef } from "react";
import ListaPraias from "../ListaPraias";
export default function CadastroNovaPraia({praia,editarPraia}){
    const [msgErro, setMsgErro] = useState('');

  const inputNomeRef = useRef();
  const inputBairroRef = useRef();
  

  function handleAdicionarPraia(e) {
    e.preventDefault();  // evita o comportamento padrão de enviar o formulario pro servidor e recarregar a tela
    const nome = inputNomeRef.current.value;
    const bairro = inputBairroRef.current.value;
   

    const contemNros = /\d/.test(nome);
    if (contemNros) {
      setMsgErro('Nome não pode conter números!');
      return;
    }

    const jaExiste = praia.some(p => p.nome === nome);
    if (jaExiste) {
      // alert("Já foi cadastrado praia com este nome!");
      setMsgErro('ja existe praia com esse nome!');
      return;
    }

    //objeto para ser inserido no cadastro
    const novo = {
       nome: nome,
       bairro: bairro,
       acessivel: true,
        acessibilidade:true
    };
    const atualizado = [...praia, novo];
    editarPraia(atualizado);
    alert("praia inserida com sucesso")

    inputNomeRef.current.value = '';
    inputBairroRef.current.value = '';
    
    setMsgErro('');
  }
    return(
        <section className='cadastro-container'>

        <div className='cadastro-titulo'>Cadastro</div>
        <form onSubmit={ handleAdicionarPraia } className="form-personagem">

          <div className='form-grupo'>
            <label htmlFor="input-nome">Nome: </label>
            <input type="text" required id="input-nome" ref={inputNomeRef} placeholder="Informe o nome" />
          </div>
          <div className='form-grupo'>
            <label htmlFor="input-bairro">bairro: </label>
            <input type="text" required id="input-bairro" ref={inputBairroRef} placeholder="Informe o bairro" />

          </div>
          

          <input type="submit" value="Adicionar" className='btn-adicionar' /> 
          <span className='msg-erro'>{msgErro !== '' ? msgErro : null}</span>

        </form>
        <ListaPraias praia={praia} editarPraia={editarPraia} />
    </section>
    )
}