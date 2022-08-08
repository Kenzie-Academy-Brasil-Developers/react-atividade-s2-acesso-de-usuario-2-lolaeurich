import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"

import "./styles/Customer.css"

function Costumer({members}){
    const { myId } = useParams()
    const member = members?.find((obj) => obj.id === myId.id)
    console.log(member)

    return (
    <>
    <h1>Detalhes do cliente</h1>
    <p>
      Nome: {member && member.name}
    </p> 
    <Link to="/">
      Voltar
    </Link>
    </> 
    )
}
export default Costumer


