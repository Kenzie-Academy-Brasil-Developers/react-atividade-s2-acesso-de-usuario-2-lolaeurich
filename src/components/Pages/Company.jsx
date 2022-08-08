import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function Company({members}){
    const { company } = useParams()
    const member = members.find((obj) => obj.id === company)

    return (
        <div>
            <h1>Detalhes da empresa</h1>

            <p>Nome da empresa: {member && member.name}</p>

            <Link to="/">Voltar</Link>
        </div>
    )
}

export default Company