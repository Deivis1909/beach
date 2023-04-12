import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPraias from './components/ListaPraias';


import Filtro from './components/Filtro';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import CadastroNovaPraia from './components/CadastroNovaPraia';
import EditarPraia from './components/EditarPraia';


function App() {
  
  const [exibirOutroComponente, setExibirOutroComponente] = useState(false);
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

  function handleClick() {
    setExibirOutroComponente(true);
  }
  


  return (
    <div className="App">

      <div className='container'>
      <BrowserRouter>
      
      
      <Filtro praia = {praia} />
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
      
      </div>
    </div>
  );
}

export default App;