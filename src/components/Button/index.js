

import "./styles.css" 
export default function Button ({onClick}){
    return(
        <div>
          <container className="botoes">
          
         
         <button className="del" onClick={onClick} ><h1>+</h1></button> 
           
               
         
         </container>
        </div>
        
    )
}