import React, { useState } from "react";
import { ButtonContainer, HourContainer, MainContainer } from "./style";

// Simulando dados de horários (ideia de "horários ocupados" e "disponíveis")
const horarios = [
  { horario: "08:00", isAvailable: true },
  { horario: "09:00", isAvailable: false }, // Ocupado
  { horario: "10:00", isAvailable: true },
  { horario: "11:00", isAvailable: false }, // Ocupado
  { horario: "12:00", isAvailable: true },
  { horario: "14:00", isAvailable: true },
  { horario: "15:00", isAvailable: false }, // Ocupado
  { horario: "16:00", isAvailable: true },
  { horario: "17:00", isAvailable: true },
  { horario: "18:00", isAvailable: false }, // Ocupado
  { horario: "19:00", isAvailable: true },
];

export default function SeletorHorario() {
  const [selectedHour, setSelectedHour] = useState(null);

  const handleSelectHour = (horario) => {
    if (horario.isAvailable) {
      setSelectedHour(horario.horario);
      // Aqui você pode adicionar a lógica para realizar o agendamento ou redirecionar o cliente.
      alert(`Você selecionou o horário ${horario.horario}`);
    } else {
      alert(`O horário ${horario.horario} já está ocupado.`);
    }
  };

  return (
    <MainContainer>
      <HourContainer>
        {horarios.map((horario) => (
          <ButtonContainer
            key={horario.horario}
            isAvailable={horario.isAvailable}
            onClick={() => handleSelectHour(horario)}
            disabled={!horario.isAvailable}
          >
            {horario.horario}
          </ButtonContainer>
        ))}
      </HourContainer>
    </MainContainer>
  );
}
