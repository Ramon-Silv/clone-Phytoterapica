import style from './Header.module.css';
import Logo from '../img/logo-phytoterapica.png';
import User from '../img/user.png';
import Carrinho from '../img/carrinho-de-compras.png';
import {FaPercent} from 'react-icons/fa';

function Header(){
    return(
        <div>
            <header>
                <div className={style.div}><img src={Logo} alt="Logo"/></div>
                
                <div className={style.menu}>
                    <input type="text" placeholder='O que você procura?'/>
                    <button>
                        <span>-5% NA PRIMEIRA COMPRA</span><FaPercent className= {style.icon}/>
                    </button>
                    <img src={User} alt="Usuário"/>
                    <img src={Carrinho} alt="Carrinho"/>
                </div>
            </header>
            <nav>
                <ul>
                    <li>ÓLEOS ESSENCIAIS</li>
                    <li>ÓLEOS VEGETAIS</li>
                    <li>SINERGIAS</li>
                    <li>COSMÉTICOS NATURAIS</li>
                    <li>HIGIENE PESSOAL</li>
                    <li>AROMATIZADORES</li>
                    <li>SUPLEMENTOS</li>
                    <li>ACESSÓRIOS</li>
                    <li>OFERTAS</li>
                    <li>CONSULTOR(A)</li>
                </ul>
            </nav>

            <script>

            </script>
        </div>
    )
}

export default Header;