import './App.css';
import { Link as L, useParams, Navigate } from 'react-router-dom'
import projects from './produtos.json'

function Link({ path, text }) {
  return <L to={path}> {text} </L>
}


function Indice() {

  const categorias = Object.keys(projects.reduce((acc, categoriasUnicas) => ({
    ...acc,
    [categoriasUnicas.categoria]: true,

  }), {}));
  return (
    <div>
      <ul>
        {
          categorias.map((a, i) => {
            return <li key={i}>
              <Link path={`${a}`} text={`${a}`} />

            </li>
          })
        }
      </ul>
    </div>
  );


}

export default Indice;


export function Categoria() {
  const { categoriaProject } = useParams()
  var newArray = projects.filter(function (el) {
    return (el.categoria === categoriaProject)
  });
  return (
    <div>
Produtos da categoria “{categoriaProject}”
      <div id="categorias">
        <ul>
          {newArray.map((categoriasFiltradas) => {
            return <li key={`${categoriasFiltradas.id}`}>
              <Link path={`${categoriasFiltradas.id}`} text={`${categoriasFiltradas.name}`} > </Link>
            </li>
          }
          )
          }
        </ul>
      </div>
      <Link path="/" text="voltar"> oi</Link>
    </div>
  );


}


export function Project() {
  const { idProject } = useParams()
  const project = projects.find(p => p.id === Number(idProject))
  if (!project) return <Navigate replace to="/" />


  return (
    <div id="categorias">
      Projeto {project.name} e {project.categoria}
    </div>


  );


}