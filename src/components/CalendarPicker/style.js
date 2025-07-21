import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  gap: 15px;
  h2 {
    color: #ffffff;
    font-family: "Oswald";
    font-weight: 500;
    font-style: italic;
    font-size: 25px;
    line-height: 100%;
    margin-bottom: 20px;
    color: #d29d46;
    text-shadow: 1px 1px 2px #38270c;
  }

  h4 {
    color: #ffffff;
    font-family: "Oswald";
    font-weight: 100;
    font-style: normal;
    font-size: 15px;
    line-height: 100%;
    margin-bottom: 20px;
    color: #d29d46;
    text-shadow: 1px 1px 2px #38270c;
    text-align:left;
  }

  .react-calendar {
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 0 10px;
  }

  .react-calendar__tile {
    border-radius: 100px;
    height: 45px;
    width: 40px;
  }

  .react-calendar__tile--active {
    background: #d4a354;
    color: white;

    &:hover {
      background-color: #915b03;
    }
  }
`;

export const Calendar = styled.div`
  border-radius: 6px;
  height: 40px;
  padding: 0 10px;
  width: 66%;
  outline: none;
  border: none;
  margin-bottom: 10px;
  margin-top: 3px;
`;
