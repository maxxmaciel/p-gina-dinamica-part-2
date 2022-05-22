import './App.css';
import { IndiceContainer } from './páginas/indice.js'
import { CategoriaContainer } from './páginas/categoria.js'
import { ProdutoContainer } from './páginas/produto.js'




function Indice() {


  return (
    < IndiceContainer />
  );


}

export default Indice;

export function Categoria() {
  return (
    < CategoriaContainer />
  );
}


export function Produto() {
  return (
    <ProdutoContainer />
  );
}