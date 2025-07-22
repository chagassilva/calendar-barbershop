import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionContainer = styled.section`
  background-color: #bea57c;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1300px;
  margin: auto;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content:center;
  }

  body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

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
  max-width: 1300px;
  background-color: #151515;
  border-radius: 10px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content:center;
  }

  body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

`;
