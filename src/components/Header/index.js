import { Link } from 'react-router-dom';

//import './styles.css';
import EditarPraia from '../EditarPraia';
import ListaPraias from '../ListaPraias';

export default function Header() {
  return (
    <header className="container-cabecalho">
        <span className='logo'>
            Coin Market
        </span>
        <nav>
            
            
            <Link to='praias'> <EditarPraia /> Todas as praias </Link>
        </nav>
    </header>
  )
}
