import React, { useEffect, useState } from "react";

const CALENDAR_ID =
  "2cc256a37fe337c166584ba8d849bb2a949321f88747cfb0916d362b70a4cae4@group.calendar.google.com";
const API_KEY = "AIzaSyCzxViosl6FyeVTC6DfNb_6yrLOo1LOe6I";
const MAX_RESULTS = 10;

export default function EventosPublicos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&maxResults=${MAX_RESULTS}&orderBy=startTime&singleEvents=true&=${new Date().toISOString()}`;
        const res = await fetch(url);
        const data = await res.json();
        setEventos(data.items || []);
      } catch (err) {
        console.error("Erro ao buscar eventos:", err);
      }
    };

    fetchEventos();
  }, []);

  return (
    <div>
      <h2>Próximos eventos</h2>
      {eventos.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        <ul>
          {eventos.map((evento) => (
            <li key={evento.id}>
              <strong>{evento.summary}</strong>
              <br />
              Início:{" "}
              {new Date(
                evento.start.dateTime || evento.start.date
              ).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
