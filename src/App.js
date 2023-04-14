import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPraias from './components/ListaPraias';


import Filtro from './components/Filtro';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import CadastroNovaPraia from './components/CadastroNovaPraia';
import EditarPraia from './components/EditarPraia';
import Header from './components/Header';
import FiltroPraias from './components/Filtro';


function App() {
  
  const [exibirOutroComponente, setExibirOutroComponente] = useState(false);
  const[praia,setPraia] = useState([]);
  const [opcao, setOpcao] = useState('');
  const [praiasFiltradas, setPraiasFiltradas] = useState([]);


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

  function handleClick() {
    setExibirOutroComponente(true);
  }

  
  useEffect(() => {
    if (opcao) {
      const filtro = opcao === 'propria' ? true : false;
      const praias = praia.filter((praia) => praia.acessivel === filtro);
      setPraiasFiltradas(praias);
    }
  }, [opcao]);
  


  return (
    <div className="App">

      <div className='container'>
      <BrowserRouter>
      
      <div>
      <FiltroPraias onChange={setOpcao} />
      {praiasFiltradas.length > 0 ? (
        <ListaPraias praia={praiasFiltradas} />
      ) : (
        <p>Nenhuma praia encontrada.</p>
      )}
    </div>
      
      <div className='conteudo'>
      <Routes>
        <Route path="/" element={<ListaPraias praia={praia} editarPraia={setPraia} />}  />
        <Route path="/editar-praia" element={<EditarPraia praia={praia} editarPraia={setPraia} />}  />
        <Route path="/cadastro-praia" element={<CadastroNovaPraia praia={praia} editarPraia={setPraia} />}  />
        
              
          
        
        
      </Routes>

      </div>
      <div className='botao'>
      <Button onClick={handleClick} />
      {exibirOutroComponente && <EditarPraia praia={praia} editarPraia={setPraia} />}
      </div>
      
      </BrowserRouter>
      <CadastroNovaPraia praia={praia} editarPraia={setPraia} />
      
      
      </div>
    </div>
  );
}

export default App;