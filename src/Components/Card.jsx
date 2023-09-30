import React from "react";
import { CardContainer, EventInfo, EventName } from "./style";
import { Link } from "react-router-dom";

function Card({ event }) {
  return (
      <CardContainer>
        <EventName>{event.name}</EventName>
        <EventInfo>Data: {event.date}</EventInfo>
        <EventInfo>Local: {event.location}</EventInfo>
        <EventInfo>Descrição: {event.description}</EventInfo>
        <p>Preço: R$ {event.price}</p>
        <Link to={`/compra/${event.id}`}><button>Comprar Evento</button></Link>
        <button>Deletar Evento</button>
      </CardContainer>
  );
}

export default Card;
