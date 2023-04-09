import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPraias from './components/ListaPraias';


import Filtro from './components/Filtro';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import CadastroNovaPraia from './components/CadastroNovaPraia';
import EditarPraia from './components/EditarPraia';
import Header from './components/Header';

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


      <BrowserRouter>
      <Header />
      <Filtro praia = {praia} />
      
      <Routes>
        <Route path="/" element={<ListaPraias praia={praia} editarPraia={setPraia} />}  />
        <Route path="/editar-praia" element={<EditarPraia praia={praia} editarPraia={setPraia} />}  />
        <Route path="cadastro-praia/:nome?" element = { 
              <CadastroNovaPraia praia={praia} />
            } />
        
        
      </Routes>
      <div>
      <Button onClick={handleClick} />
      {exibirOutroComponente && <EditarPraia praia={praia} editarPraia={setPraia} />}
      </div>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;