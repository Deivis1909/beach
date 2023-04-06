import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPraias from './components/ListaPraias';
import Editar from './components/Editar';
import Cadastro from './components/Cadastro';
import Filtro from './components/Filtro';
import { useEffect, useState } from 'react';
import Button from './components/Button';

function App() {

  const[praia,setPraia] = useState([]);

  useEffect(() => {
   
    fetch('praias.json')
    .then(resp => resp.json())
    .then(praias => {
      const p = praias.map( doMap =>{
        return {bairro: doMap.bairro, acessivel: doMap.acessivel, nome: doMap.nome,

        }


      })

      
      setPraia(p);
    })
  
    
  }, [])
  

  return (
    <div className="App">


      <BrowserRouter>
      <Filtro />
      
      <Routes>
        <Route path="/" element={<ListaPraias praia={praia}/>}  />
        <Route path="/editar" element={<Editar praia={praia} />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        

      </Routes>
      <Button  />
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
