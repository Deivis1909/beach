import { useEffect,useState,useRef } from "react";
import "./styles.css";
import DeletaPraia from "../DeletaPraia";

export default function EditarPraia({praia,editarPraia}){

  const [lista, setLista] = useState(praia);
  const inputFiltroRef = useRef();

  useEffect(() => {
    setLista(praia);
  }, [praia])
  

  function excluirPraia(nome) {
        
      const filtrados = praia.filter(p => p.nome !== nome);
     editarPraia(filtrados);  
     alert(nome+" deletada com sucesso")
  }

  function filtrarPraia() {
      const nome = inputFiltroRef.current.value;
      if (!nome) {
         setLista(praia);
          return;
      }
      const selecionado = praia.find(p => p.nome === nome);
      if (selecionado) {
          setLista([selecionado]);
          alert("praia selcionada")
      } else {
          alert('Praia nao encontrada!')
      }
  }


    return(

    <div>

<div className='lista-titulo'>Praia</div>
             <div className='filtro'>
           
               </div>
                    <div className='lista-dados'>
      
          {
            praia.map(p => <DeletaPraia 
               key={p.nome}
               nome = {p.nome}
                excluirPraia={excluirPraia}  
              />
            )
          }
            </div>  
             

    </div>

            

          
                
  )
}