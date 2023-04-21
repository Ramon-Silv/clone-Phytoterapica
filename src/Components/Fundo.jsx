import style from './Fundo.module.css';

function Fundo(){
    return(
        <div>
            <section className={style.fundo}>
                <span>
                    <h1>Óleos Essenciais</h1>
                    <p>Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.</p>
                </span>
            </section>
        </div>
    )
}

export default Fundo;