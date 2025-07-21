import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MainContainer } from "./style";
import SeletorHorario from "../SeletorHorario/SeletorHorario";

export function CalendarPicker({ onSelectDate }) {
  const [value, setValue] = useState(new Date());

  const handleChange = (date) => {
    setValue(date);
    onSelectDate(date);
  };

  return (
    <MainContainer>
      <h2>Escolha a data do corte</h2>
      <Calendar value={value} onChange={handleChange} />
      <h4>Horarios agendado</h4>
      <SeletorHorario />
    </MainContainer>
  );
}
