import React, { useState, useEffect } from "react";
import {formatHorario}  from "../../utils/formatHorario";
import { ButtonContainer, HourContainer, MainContainer } from "./style";

export default function SeletorHorario() {
  // Estados
  const [horarios, setHorarios] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const token = localStorage.getItem("access_token");
  // localStorage.setItem("access_token", token);


  // Configurações do OAuth
  // const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  // const redirectUri = import.meta.env.VITE_REDIRECT_URI;
  const clientId = "1040579762146-56ns08kkhfimsrcui8b59q4lpm78uaes.apps.googleusercontent.com";
  const redirectUri = "http://localhost:5173"; // Essa URL deve estar autorizada no console Google
  const scope = "https://www.googleapis.com/auth/spreadsheets.readonly";

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}&include_granted_scopes=true`;

  // Função de login com popup
  const loginWithPopup = () => {
    const popup = window.open(authUrl, "_blank", "width=500,height=600");

    // Checa periodicamente o hash do popup para extrair o token
    const interval = setInterval(() => {
      try {
        // Tenta acessar a URL do popup
        const url = new URL(popup.location.href);

        // Quando o popup estiver no seu domínio, vai ter o hash com o token
        if (url.hash) {
          const params = new URLSearchParams(url.hash.slice(1));
          const token = params.get("access_token");
          if (token) {
            setAccessToken(token);
            popup.close();
            clearInterval(interval);
          }
        }
      } catch (error) {
        // Erro esperado por causa do Cross-Origin-Opener-Policy, ignora
      }

      // Se o popup foi fechado manualmente, limpa o intervalo
      if (popup.closed) {
        clearInterval(interval);
      }
    }, 500);
  };

  // Busca os dados da planilha
  const fetchHorarios = async () => {
    if (!accessToken) return;

    setIsLoading(true);

    const sheetId = "12PHiO2854qTWhcV9UHxnmAyux6xzhjfGInXosp2pbvA";
    const range = "Dados!F2:G10"; // Coluna F: horário, G: status

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?access_token=${accessToken}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Dados da planilha:", data.values);

      if (data.values) {
        const horariosFormatados = data.values.map((row) => ({
          horario: row[0] || "Indefinido",
          isAvailable: row[1]?.toLowerCase() === "disponível",
        }));
        setHorarios(horariosFormatados);
      }
    } catch (error) {
      console.error("Erro ao buscar planilha:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reage à mudança no token
  useEffect(() => {
    if (accessToken) {
      fetchHorarios();
    }
  }, [accessToken]);

  // Ação ao clicar em um horário
  const handleSelectHour = (horario) => {
    if (horario.isAvailable) {
      setSelectedHour(horario.horario);
      alert(`Você selecionou o horário ${horario.horario}`);
    } else {
      alert(`O horário ${horario.horario} está ocupado.`);
    }
  };

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
              onClick={() => handleSelectHour(horario)}
              disabled={!horario.isAvailable}
            >
             {formatHorario(horario.horario)}
            </ButtonContainer>
          ))
        ) : (
          <p>Nenhum horário disponível.</p>
        )}
      </HourContainer>

      {/* Se não estiver logado, mostra botão de login */}
      {!accessToken && (
        <button onClick={loginWithPopup}>Login com Google (popup)</button>
      )}

      {/* Mostra o horário selecionado */}
      {selectedHour && (
        <p style={{ marginTop: "1rem" }}>
          Horário selecionado: <strong>{selectedHour}</strong>
        </p>
      )}
    </MainContainer>
  );
}
