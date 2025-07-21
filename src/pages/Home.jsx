import React, { useState } from "react";
import { CalendarPicker } from "../components/CalendarPicker/CalendarPicker";
import { ScheduleForm } from "../components/ScheduleForm/ScheduleForm";
import Menu from "../components/Menu/Menu";
import {
  CalendarPickerContainer,
  MainContainer,
  ScheduleFormContainer,
  HeaderContainer,
  PageWrapper,
  SectionContainer,
} from "./style";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <PageWrapper>
      <Menu />
      <SectionContainer id="agd">
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
      </SectionContainer>
    </PageWrapper>
  );
}
