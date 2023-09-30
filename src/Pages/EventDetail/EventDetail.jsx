import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";

function EventDetail() {
    const { id } = useParams()
    const [event, setEvent] = useState()

    useEffect(() => {
        async function buscaEvento() {
            try {
                const req = await fetch(`http://localhost:3000/events/${id}`) 
                const res = await req.json()

                setEvent(res)
            } catch (error) {
                console.log(error.message);
            }
        }

        buscaEvento()
    }, [id])
  
    return (
    <>
      {event && 
      <Card event={event} />
      }
    </>
  );
}

export default EventDetail;
