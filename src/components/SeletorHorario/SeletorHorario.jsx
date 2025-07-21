import React, { useEffect, useState } from "react";
import { ButtonContainer, HourContainer, MainContainer } from "./style";
import { formatHorario } from "../../utils/formatHorario";

export default function SeletorHorario() {
  const [horarios, setHorarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Função que compara se a data da planilha é hoje
  const isHoje = (dataPlanilha) => {
    const [dia, mes, ano] = dataPlanilha.trim().split("/");
    const hoje = new Date();
    return (
      hoje.getDate() === parseInt(dia) &&
      hoje.getMonth() + 1 === parseInt(mes) &&
      hoje.getFullYear() === parseInt(ano)
    );
  };

  // Puxa dados da planilha
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_SHEET_ID}/values/Dados!E2:F100?key=${import.meta.env.VITE_GOOGLE_CLIENT_ID}`
        );

        const data = await response.json();

        if (!data.values) {
          console.warn("⚠️ Nenhum dado retornado da planilha.");
          setHorarios([]);
          return;
        }

        // Filtra horários apenas do dia atual
        const horariosHoje = data.values
          .filter((row) => row.length >= 2 && isHoje(row[0]))
          .map((row) => row[1].trim()) // pega apenas a hora
          .sort();

        setHorarios(horariosHoje);
      } catch (error) {
        console.error("Erro ao buscar horários:", error);
        setHorarios([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      {/* <h2>Horários disponíveis para hoje</h2> */}

      {isLoading ? (
        <p>Carregando...</p>
      ) : horarios.length === 0 ? (
        <p>Nenhum horário disponível para hoje.</p>
      ) : (
        <HourContainer>
          {horarios.map((hora, index) => (
            <ButtonContainer key={index}>
              {formatHorario(hora)}
            </ButtonContainer>
          ))}
        </HourContainer>
      )}
    </MainContainer>
  );
}
