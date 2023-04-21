import style from './Filtro.module.css';
import {BsFilterLeft, BsSliders} from 'react-icons/bs';

function Filtro(){
    return(
        <div>
            <div className={style.filtro}>
                <div>
                    <button>FILTRAR  <BsSliders className={style.icon}/></button>
                    <button>ORDENAR POR <BsFilterLeft className={style.icon}/></button>
                </div>
                <span>16 produtos</span>
            </div>
        </div>
    )
}

export default Filtro;