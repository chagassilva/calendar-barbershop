import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #ffffff;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.section`
  background-color: #bea57c;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  max-height: 100%;
  margin: 0px auto;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1300px;
  margin: auto;
  align-items: start;
`;

export const CalendarPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScheduleFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  max-height: 1000px;
  background-color: #151515;
  border-radius: 10px;
`;
