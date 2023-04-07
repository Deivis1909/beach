import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPraias from './components/ListaPraias';
import Editar from './components/Editar';

import Filtro from './components/Filtro';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import CadastroNovaPraia from './components/CadastroNovaPraia';

function App() {

  const[praia,setPraia] = useState([]);

  useEffect(() => {
   
    fetch('praias.json')
    .then(resp => resp.json())
    .then(praias => {
      const p = praias.map( doMap =>{
        return {bairro: doMap.bairro, acessivel: doMap.acessivel, nome: doMap.nome,acessibilidade: doMap.acessibilidade

        }


      })

      
      setPraia(p);
    })
  
    
  }, [])

  const excluirPraia = (nome) => {
    const resposta = window.confirm('Excluir o livro de ISBN ' + nome + "?");
    if (!resposta)
      return;
    
    const lista = praia.filter(p => p.nome !== nome);
    setPraia(lista);
  }

  const incluirPraia = (novo) => {
    novo.acessivel = true;
    setPraia([...praia, novo]);
  }

  const alterarPraia = (atualizado) => {
    const newPraia = praia.map(p => {
      if (p.nome === atualizado.nome) {
        atualizado.acesssivel = praia.acessivel;
        return atualizado;
      }
      return p;
    });
   
  }

  function filtrarAcessivel(){
    praia.filter(p => {
      return p.acessivel === true;
    })
  }
  function filtrarNao(){
    praia.filter(p => {
      return p.acessivel === false;
  })
  }

  

  return (
    <div className="App">


      <BrowserRouter>
      <Filtro positivo={filtrarAcessivel} negativo={filtrarNao} />
      
      <Routes>
        <Route path="/" element={<ListaPraias praia={praia}/>}  />
        <Route path="/editar" element={<Editar praia={praia} />} />
        <Route path="cadastro-praia/:nome?" element = { 
              <CadastroNovaPraia praia={praia} incluirPraia={incluirPraia} alterarPraia={alterarPraia} />
            } />
        

      </Routes>
      <Button  />
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;