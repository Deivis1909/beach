
import CadastroNovaPraia from "../CadastroNovaPraia"
import "./styles.css" 
export default function Button ({onClick}){
    return(
        <div>
          <container className="botoes">
          <button> 
           
           <h1>+</h1>
               
         </button>
         
         <button className="del" onClick={onClick} >Deletar</button> 
           
               
         
         </container>
        </div>
        
    )
}