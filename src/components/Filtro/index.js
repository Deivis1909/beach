import "./styles.css"
import { useState } from "react";


export default function Filtro ({positivo,negativo,praia}){
  const [selectedOption, setSelectedOption] = useState(null);
      
   // else if({selectedOption} === "i"){
    
     // const resultado = praia.filter(p => p.acessivel === false);
      //setFiltradas(resultado);
    
  //} 
  
      return(
          <div>
           <form>
    <h3>Praias da ilha da magia</h3>
    <ul>
    <li><input type="radio" name="proprias" value="proprias" checked={selectedOption === "p"} onChange={(e) => setSelectedOption(e.target.value)}/>proprias</li>
        <li><input type="radio" name="improprias" value="improprias" checked={selectedOption === "i"} onChange={(e) => setSelectedOption(e.target.value)}/>improprias</li>
        
    </ul>
    <button id="btn-salvar" type="submit" value='salada' >Filtrar</button>
</form>

<p>Opção selecionada: {selectedOption}</p>


         </div>
        )

        
      


      }

    



