import React, { useState, useEffect } from "react";
import { formatHorario } from "../../utils/formatHorario";
import { ButtonContainer, HourContainer, MainContainer } from "./style";

export default function SeletorHorario() {
  const [horarios, setHorarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const RANGE = "Dados!E2:F100"; // E = data | F = horário
  const SHEET_ID = import.meta.env.VITE_SHEET_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const parseDataBrasileira = (dataString) => {
    if (!dataString.includes("/")) return dataString; // já pode estar no formato certo
    const [dia, mes, ano] = dataString.split("/");
    return `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  };

  const fetchHorarios = async () => {
    setIsLoading(true);

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.values && data.values.length > 0) {
        const dataHoje = new Date().toISOString().split("T")[0];

        const horariosFiltrados = data.values
          .filter(row => {
            if (row.length < 2) return false;
            const dataPlanilha = parseDataBrasileira(row[0]);
            return dataPlanilha === dataHoje && row[1];
          })
          .map(row => ({
            data: row[0],
            horario: row[1],
            isAvailable: true,
          }));

        setHorarios(horariosFiltrados);
      } else {
        setHorarios([]);
      }
    } catch (error) {
      console.error("Erro ao buscar planilha:", error);
      setHorarios([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHorarios();
  }, []);

  return (
    <MainContainer>
      <HourContainer>
        {isLoading ? (
          <p>Carregando horários...</p>
        ) : horarios.length > 0 ? (
          horarios.map((horario) => (
            <ButtonContainer
              key={horario.horario}
              $isAvailable={horario.isAvailable}
            >
              {formatHorario(horario.horario)}
            </ButtonContainer>
          ))
        ) : (
          <p>Nenhum horário disponível para hoje.</p>
        )}
      </HourContainer>
    </MainContainer>
  );
}
