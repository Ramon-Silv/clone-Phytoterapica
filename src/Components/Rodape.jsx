import style from './Rodape.module.css';
import Logo from '../img/logo-phytoterapica.png';
import pagamento1 from '../img/pagamento1.webp';
import pagamento2 from '../img/pagamento2.webp';
import pagamento3 from '../img/pagamento3.webp';
import pagamento4 from '../img/pagamento4.webp';
import pagamento5 from '../img/pagamento5.webp';
import pagamento6 from '../img/pagamento6.webp';
import folha from '../img/folha.svg';
import pata from '../img/pata.svg';
import gota from '../img/gota.svg';
import { FaBlog, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Rodape() {
    return (
        <div>
            <section id={style.email}>
                <div className={style.email_txt}>
                    <h3>INSCREVA-SE</h3>
                    <p>E RECEBA NOVIDADES E <br /> PROMOÇÕES</p>
                </div>
                <form>
                    <input type="text" placeholder='Seu e-mail'/>
                    <input type="submit" value="ASSINAR NEWSLETTER" />
                </form>
            </section>

            <section className={style.valores}>
                <div className={style.valores_cont}>
                    <img src={folha} alt="Produto Vegano" />
                    <div>
                        <span><h2>Vegano</h2></span>
                        <span>sem componentes de origem animal</span>
                    </div>
                </div>
                <div className={style.valores_cont}>
                    <img src={pata} alt="Livre de crueldade animal" />
                    <div>
                        <span><h2>Cruelty-Free</h2></span>
                        <span>não testado em animais</span>
                    </div>
                </div>
                <div className={style.valores_cont}>
                    <img src={gota} alt="100% Puro" />
                    <div>
                        <span><h2>100% Puro</h2></span>
                        <span>óleos puros e naturais</span>
                    </div>
                </div>
            </section>

            <footer>
                <div className={style.rodape}>
                    <div className={style.divLogo}><img src={Logo} alt="Logo" /></div>

                    <div className={style.suporte}>
                        <p>Suporte</p>
                        <ul>

                            <li>Política de Entrega</li>
                            <li>Política de Troca e Devolução</li>
                            <li>Ingestão de Óleos Essenciais</li>
                            <li>Cromatografia</li>
                        </ul>
                    </div>

                    <div className={style.pagamento}>
                        <p>Formas de pagamento</p>
                        <img src={pagamento1} alt="Logo" />
                        <img src={pagamento2} alt="Logo" />
                        <img src={pagamento3} alt="Logo" />
                        <br />
                        <img src={pagamento4} alt="Logo" />
                        <img src={pagamento5} alt="Logo" />
                        <img src={pagamento6} alt="Logo" />
                    </div>

                    <div className={style.contato}>
                        <p>Contato</p>
                        <ul>
                            <IconContext.Provider value={{ className: style.icons }}>

                                <li><FaInstagram /><span>Instagram</span></li>
                                <li><FaFacebook /><span>Facebook</span></li>
                                <li><FaBlog /><span>Blog</span></li>
                                <li><FaYoutube /><span>Youtube</span></li>
                                <li><FaTwitter /><span>Twitter</span></li>

                            </IconContext.Provider>
                        </ul>
                    </div>
                </div>
                <div className={style.direitos}>
                    <span>PHYTOTERAPICA© 2023 | AV NOVA CANTAREIRA, 2627 - SÃO PAULO/SP | CNPJ: 72.962.327/0001-55</span>
                    <p><span>POLÍTICA DE PRIVACIDADE</span>  | <span>TERMOS E CONDIÇÕES</span></p>

                </div>
            </footer>
        </div>
    )
};

export default Rodape;