import style from './ConteudoPrincipal.module.css';

function ConteudoPrincipal(props){

    return(
        <div>
            <main>
                <div className={style.prop}> 
                    <img src={props.img1} alt="Imagem do Produto" />
                    <p>Óleo Essencial de {props.descricao1}</p>
                    <span>R$ {props.preco1} <br /></span>
                    (ou em até 3x de R$ {props.desconto1} sem juros)
                </div>
                <div className={style.prop}>
                    <img src={props.img2} alt="Imagem do Produto" />
                    <p>Óleo Essencial de {props.descricao2}</p>
                    <span>R$ {props.preco2} <br /></span>
                    (ou em até 3x de R$ {props.desconto2} sem juros)
                </div>
                <div className={style.prop}>
                    <img src={props.img3} alt="Imagem do Produto" />
                    <p>Óleo Essencial de {props.descricao3}</p>
                    <span>R$ {props.preco3} <br /></span> 
                    (ou em até 3x de R$ {props.desconto3} sem juros)
                </div>
                <div className={style.prop}>
                    <img src={props.img4} alt="Imagem do Produto" />
                    <p>Óleo Essencial de {props.descricao4}</p>
                    <span>R$ {props.preco4} <br /></span>
                    (ou em até 3x de R$ {props.desconto4} sem juros)
                </div>
            </main>            
        </div>
    )
}

export default ConteudoPrincipal;