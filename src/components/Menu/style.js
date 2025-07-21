import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  max-width:1400px;
  background-color: #bea57c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
  margin:0 auto;
  border-top-left-radius:6px;
  border-top-right-radius:6px;

  .logo img {
    width: 60px;
    background-color:white;
    border-radius:100px;
    padding:10px 10px;
  }

  .menu-central {
    display: flex;
    align-items:center;
    font-size:25px;
  }

  .btn-mainmenu, .btn-agendamento {
    text-decoration: none;
    color: #151515;
    font-weight: 600;
    transition: color 0.3s;
  }

  .btn-agendamento {
    background: #baa77f;
    padding: 8px 16px;
    border-radius: 10px;
    color: #fff;
  }

  .btn-mainmenu:hover,
  .btn-agendamento:hover {
    color: #a7946e;
  }

`;
