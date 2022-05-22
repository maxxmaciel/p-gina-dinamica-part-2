import projects from '../arquvos json/produtos.json';
import { Link as L, useParams } from 'react-router-dom'


function Link({ path, text }) {
    return <L to={path}> {text} </L>
}


export function CategoriaContainer() {



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
                            <Link path={`${categoriasFiltradas.id}`} text={`${categoriasFiltradas.nome}`} > </Link>
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