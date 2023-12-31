import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/events"}>Eventos</Link></li>
            <li><Link to={"/create-event"}>Criação de Eventos</Link></li>
            <li><Link to={"/cadastro"}>Cadastro</Link></li>
        </ul>
    </nav>
  )
}

export default Menu