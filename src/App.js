import './App.css';
import Header from './Components/Header';
import Fundo from './Components/Fundo';
import Filtro from './Components/Filtro';
import ConteudoPrincipal from './Components/ConteudoPrincipal';
import Rodape from './Components/Rodape';

function App() {
  return (
    <div className="App">
      <Header/>

      <Fundo/>

      <Filtro/>

      <ConteudoPrincipal img1="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=637725599700270000" descricao1="Lavanda (gt. França) - 10ml" preco1=" 60,00" desconto1="20,00"
      img2="https://phytoterapica.vtexassets.com/arquivos/ids/155814/oleo-essencial-geranio-5ml-phytoterapica-01.jpg?v=637725623120030000" descricao2="Gerânio - 5ml" preco2=" 44,00" desconto2="14,66"
      img3="https://phytoterapica.vtexassets.com/arquivos/ids/155804/oleo-essencial-alecrim-10ml-phytoterapica-01.jpg?v=637725608065330000" descricao3="Alecrim (qt. Cineol) - 10ml" preco3=" 37,00" desconto3="12,33"
      img4="https://phytoterapica.vtexassets.com/arquivos/ids/155806/oleo-essencial-hortela-pimenta-10ml-phytoterapica-01.jpg?v=637725609590700000" descricao4="Hortelã-Pimenta (Menta) - 10ml" preco4=" 52,00" desconto4="17,33"
      />

      <ConteudoPrincipal img1="https://phytoterapica.vtexassets.com/arquivos/ids/155808/oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica-01.jpg?v=637725610656700000" descricao1="Melaleuca (Tea Tree) - 10ml" preco1=" 50,00" desconto1="16,66"
      img2="https://phytoterapica.vtexassets.com/arquivos/ids/155886/oleo-essencial-laranja-organico-10ml-phytoterapica-01.jpg?v=637753643540330000" descricao2="Laranja (Orgânico) - 10ml" preco2=" 26,00" desconto2="8,66"
      img3="https://phytoterapica.vtexassets.com/arquivos/ids/155820/oleo-essencial-eucalipto-globulus-10ml-phytoterapica-01.jpg?v=637725633480370000" descricao3="Eucalipto Globulus - 10ml" preco3=" 35,20" desconto3="11,73"
      img4="https://phytoterapica.vtexassets.com/arquivos/ids/155838/oleo-essencial-bergamota-5ml-phytoterapica-01.jpg?v=637725646137900000" descricao4="Bergamota - 5ml" preco4=" 40,00" desconto4="13,33"/>

      <ConteudoPrincipal img1="https://phytoterapica.vtexassets.com/arquivos/ids/156013/Mockup_Caixa_OE_Melaleuca_5ml_1000x1000px.jpg?v=637976535392430000" descricao1="Melaleuca (Tea Tree) - 5ml" preco1=" 39,20" desconto1="13,06"
      img2="https://phytoterapica.vtexassets.com/arquivos/ids/156000/Mockup_Caixa_OE_Lavanda_5ml_1000x1000px.jpg?v=637975742756530000" descricao2="Lavanda - 5ml" preco2=" 47,02" desconto2="15,67"
      img3="https://phytoterapica.vtexassets.com/arquivos/ids/155415/_leo_essencial_de_lim_o-tahiti_10ml_-_phytoterapica_1_.jpg?v=637653490559770000" descricao3="Limão-Tahiti - 10ml" preco3=" 34,20" desconto3="11,40"
      img4="https://phytoterapica.vtexassets.com/arquivos/ids/155552/oleo-essencial-lemongrass-organico-10ml-phytoterapica-caixa.jpg?v=637655992663170000" descricao4="Lemongrass (Orgânico) - 10ml" preco4=" 39,00" desconto4="13,00"/>

      <ConteudoPrincipal img1="https://phytoterapica.vtexassets.com/arquivos/ids/155533/_leo_essencial_de_ol_bano_5ml_-_phytoterapica_1_.jpg?v=637655362480800000" descricao1="Olíbano - 5ml" preco1=" 84,00" desconto1="28,00"
      img2="https://phytoterapica.vtexassets.com/arquivos/ids/155845/oleo-essencial-patchouli-5ml-phytoterapica-01.jpg?v=637725650810000000" descricao2="Patchouli - 5ml" preco2=" 37,00" desconto2="12,33"
      img3="https://phytoterapica.vtexassets.com/arquivos/ids/155539/_leo_essencial_de_s_lvia_esclareia_5ml_-_phytoterapica_1_.jpg?v=637655799653700000" descricao3="Sálvia Esclareia - 5ml" preco3=" 51,20" desconto3="17,06"
      img4="https://phytoterapica.vtexassets.com/arquivos/ids/156017/Mockup_Caixa_OE_Hortela_5ml_1000x1000px.jpg?v=637976556731430000" descricao4="Hortelã-Pimenta (Menta) - 5ml" preco4=" 40,70" desconto4="13,56"/>

      <Rodape/>
    </div>
  );
}

export default App;
