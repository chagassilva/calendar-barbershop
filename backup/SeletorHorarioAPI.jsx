import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const SPREADSHEET_ID = "12PHiO2854qTWhcV9UHxnmAyux6xzhjfGInXosp2pbvA";
const API_KEY = "1040579762146-ao6goep39e8inv7mjk3u8a3g213j6ms5.apps.googleusercontent.com";
const CLIENT_ID = "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";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly"; // Defina o escopo

function SeletorHorario() {
  useEffect(() => {
    // Carregar o cliente gapi
    gapi.load('client:auth2', initClient);

    function initClient() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ],
        scope: SCOPES,
      }).then(() => {
        // Verificar se o cliente está autenticado
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          fetchHorarios(); // Se autenticado, faz a requisição para os dados
        } else {
          // Caso não esteja autenticado, fazer login
          authInstance.signIn().then(fetchHorarios);
        }
      }).catch((error) => {
        console.error("Erro ao inicializar o cliente gapi: ", error);
      });
    }

    const fetchHorarios = () => {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: "Dados!F2:F10", // Ajuste o range conforme sua planilha
      }).then((response) => {
        console.log("Horários obtidos: ", response.result.values); // Dados obtidos
      }).catch((error) => {
        console.error("Erro ao obter dados: ", error);
      });
    };
  }, []);

  return (
    <div>
      <p>Seleção de Horários</p>
      <div>
        {/* Aqui você pode renderizar os dados, como os botões de horário */}
      </div>
    </div>
  );
}

export default SeletorHorario;
