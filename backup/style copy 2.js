import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MenuBar = styled.header`
  background-color: #ffffff;
  padding: 20px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  font-size: 1.5rem;
  color: #151515;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const MainSection = styled.section`
  background-color: #151515;
  padding: 40px;
  margin: 40px auto;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CalendarPickerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ScheduleFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
