import { CalendarPicker } from "../components/CalendarPicker/CalendarPicker";
import { ScheduleForm } from "../components/ScheduleForm/ScheduleForm";
import SeletorHorario from "../components/SeletorHorario/SeletorHorario";
import React, { useState } from "react";
import {
  CalendarPickerContainer,
  MainContainer,
  ScheduleFormContainer,
  HeaderContainer,
} from "./style";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    // <div className="w-full max-w-[1300px] items-center justify-center m-auto " style={{ backgroundColor: "#ffffff" }}></div>
    <HeaderContainer>
      <MainContainer>
        <CalendarPickerContainer>
          <CalendarPicker onSelectDate={setSelectedDate} />
        </CalendarPickerContainer>
        <ScheduleFormContainer>
          <ScheduleForm selectedDate={selectedDate} />
        </ScheduleFormContainer>
      </MainContainer>
    </HeaderContainer>
  );
}
