import "./styles.css"
export default function Editar({praia}){

return(
<div>
    
<header><h1>Editar Praias</h1></header>
<div>
            <>
            
            
      <table className='tabela'>
     
        <thead>
          <tr>
            <th>Nome</th>
            <th>Bairro</th>
            <th>Condicao</th>
            
          </tr>
        </thead>
        <tbody>
          {
            praia.map(p => 
              <tr key={p.nome}>
                <td>{p.bairro}</td>
                <td>{p.nome}</td>
                <button className="btn">alterar</button>
                <button className="btn">excluir</button>
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