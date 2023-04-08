
import './styles.css'
export default function DeletaPraia( { nome, excluirPraia } ) {

  // function handleExcluirPersonagem() {
  //   excluirPersonagem(nome);
  // }

  return (
    <div className='personagem-container'>
     
      <div className='personagem-info'>
        <span >{nome}</span>
        
      </div>
      <div className='personagem-botoes'>
        <button className="btn" onClick={ () => excluirPraia(nome) } >Excluir</button>
      </div>
    </div>
  )
}
