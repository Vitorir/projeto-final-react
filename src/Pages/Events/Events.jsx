import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";

function Events() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // criar logica para puxar esses dados
    async function buscar_eventos() {
      try {
        const req = await fetch("http://localhost:3000/events");
        const res = await req.json();

        setEventos(res);
        console.log(eventos);
      } catch (error) {
        console.log("Erro ao buscar eventos", error);
      }
    }

    buscar_eventos();
  }, []);

  return (
    <>
      <h1>Events</h1>

      {eventos ? (
        eventos.map((evento) => (
            <Card key={evento.key} event={evento} />
        ))
      ) : (
        <p>Não encontrado ou não carregado</p>
      )}
    </>
  );
}

export default Events;
