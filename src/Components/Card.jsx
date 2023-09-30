import React from 'react'

function Card({event}) {
  return (
    <div className="event">
      <h2>{event.name}</h2>
      <p>Data: {event.date}</p>
      <p>Local: {event.location}</p>
      <p>Descrição: {event.description}</p>
      <p>Preço: R$ {event.price}</p>
      <button>Comprar Ingresso</button>
      <button>Deletar Evento</button>
    </div>
  )
}

export default Card