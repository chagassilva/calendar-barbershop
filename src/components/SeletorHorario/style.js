import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 88%;
  padding: 20px;
  background-color: transparent; // cor de fundo suave
  border-radius: 6px; // bordas arredondadas
  //padding: 20px;
  box-shadow: 0 4px 12px rgba(58, 57, 57, 0.1);
`;

// Contêiner que segura os horários em grid com 5 colunas e espaçamento
export const HourContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5 colunas iguais
  gap: 15px;
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); // 2 colunas no mobile
  }
`;

// Botão estilizado para cada horário
export const ButtonContainer = styled.button`
  padding: 12px 0;
  background-color: #d4a354;
  color: #151515;
  border: none;
  border-radius: 100px;
  height: 45px;
  width: 45px;
  font-weight: 600;
  cursor: not-allowed;
  transition: background-color 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #5e3a01ff;
    color:white;
  }

  &:focus {
    outline: 2px solid #999;
  }
`;

// import styled from "styled-components";

// // Contêiner principal, centrado na página
// export const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   padding: 20px;
// `;

// // Contêiner que segura os horários
// export const HourContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 15px;
//   justify-content: center;
//   max-width: 600px;
//   width: 100%;
// `;

// export const ButtonContainer = styled.button`
//   background-color: ${({ $isAvailable }) => ($isAvailable ? 'green' : 'red')};
//   cursor: ${({ $isAvailable }) => ($isAvailable ? 'pointer' : 'not-allowed')};
//   // Adicione o estilo conforme necessário
// `;

// // Botão de horário (estilo base)
// // export const ButtonContainer = styled.button`
// //   background-color: ${({ isAvailable }) => (isAvailable ? "#baa77f" : "#dcdcdc")};
// //   color: ${({ isAvailable }) => (isAvailable ? "white" : "gray")};
// //   font-size: 16px;
// //   padding: 12px 25px;
// //   border-radius: 10px;
// //   border: none;
// //   cursor: ${({ isAvailable }) => (isAvailable ? "pointer" : "not-allowed")};
// //   transition: all 0.3s ease;

// //   &:hover {
// //     background-color: ${({ isAvailable }) =>
// //       isAvailable ? "#a7946e" : "#dcdcdc"};
// //     transform: ${({ isAvailable }) => (isAvailable ? "scale(1.05)" : "none")};
// //   }

// //   &:disabled {
// //     background-color: #dcdcdc;
// //     color: #aaa;
// //   }
// // `;
