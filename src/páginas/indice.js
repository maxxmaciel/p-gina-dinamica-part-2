import projects from '../arquvos json/produtos.json';
import { Link as L } from 'react-router-dom'

function Link({ path, text }) {
    return <L to={path}> {text} </L>
}



export function IndiceContainer() {
    const categorias = Object.keys(projects.reduce((acc, categoriasUnicas) => ({
        ...acc,
        [categoriasUnicas.categoria]: true,

    }), {}));

    return (



        <div className="indice">
            <h1>Categoria </h1>
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