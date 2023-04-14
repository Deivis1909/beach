
import './styles.css'
export default function DeletaPraia( { nome, excluirPraia } ) {

  // function handleExcluirPersonagem() {
  //   excluirPersonagem(nome);
  // }

  return (
    <div className='-container'>
     
      <div className='info'>
        <span >{nome}</span>
        
      </div>
      <div className='botoes'>
        <button className="btn" onClick={ () => excluirPraia(nome) } >Excluir</button>
      
      <div><button className='btn-alterar'>Alterar</button></div>
      </div>
    </div>
  )
}
