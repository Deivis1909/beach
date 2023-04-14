

import "./styles.css";

export default function ListaPraias({praia,editarPraia}){

  
  


return(
<div>
    
<header><h1>Lista de Praias </h1></header>
<div>
            <>
            
            
      <table className='tabela'>
     
        <thead>
          <tr>
            <th>Nome</th>
            <th>Bairro</th>
            <th>Condicao</th>
            <th>acessibilidade</th>
            
          </tr>
        </thead>
        <tbody>
          {
             praia.map(p => 
              <tr key={p.nome}>
                <td>{p.bairro}</td>
                <td>{p.nome}</td>
                <td className={p.acessivel ? 'green' : 'red'}>{p.acessivel? 'SIM' : 'NÃO'}</td>
                <td className={p.acessibilidade ? 'green' : 'red'}>{p.acessibilidade? 'SIM' : 'NÃO'}</td>
                
              </tr>
            )
          }
        </tbody>
      </table>
      
    </>

         </div>

</div>

)

}