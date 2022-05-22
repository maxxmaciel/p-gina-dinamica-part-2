import projects from '../arquvos json/produtos.json';
import { Link as L, useParams, Navigate } from 'react-router-dom'


function Link({ path, text }) {
    return <L to={path}> {text} </L>
}





export function ProdutoContainer() {
    const { idProject } = useParams()
    const project = projects.find(p => p.id === Number(idProject))
    if (!project) return <Navigate replace to="/" />






    return (
        <div id="categorias">
            <div>
                Projeto {project.nome} e {project.categoria}
            </div>



            <div>
                <Link path="/" text="voltar"> oi</Link>
            </div>
        </div>


    );






}