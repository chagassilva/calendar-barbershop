import React, { useState } from "react";
import { CalendarPicker } from "../components/CalendarPicker/CalendarPicker";
import { ScheduleForm } from "../components/ScheduleForm/ScheduleForm";
import Menu from "../components/Menu/Menu";
import {
  PageWrapper,
  MainSection,
  GridContainer,
  CalendarPickerContainer,
  ScheduleFormContainer,
  MenuBar,
} from "./style";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <PageWrapper>
      <Menu />
      <MenuBar>
        <h1>DevBarbershop 💈</h1>
      </MenuBar>

      <MainSection>
        <GridContainer>
          <CalendarPickerContainer>
            <CalendarPicker onSelectDate={setSelectedDate} />
          </CalendarPickerContainer>
          <ScheduleFormContainer>
            <ScheduleForm selectedDate={selectedDate} />
          </ScheduleFormContainer>
        </GridContainer>
      </MainSection>
    </PageWrapper>
  );
}
