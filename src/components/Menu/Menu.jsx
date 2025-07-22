import React from "react";
import { HeaderStyled } from "./style";
import ddddd from "../../assets/barber_logo.png";
import { IoHomeSharp } from "react-icons/io5";
import { BiBorderBottom } from "react-icons/bi";

export default function Menu() {
  return (
    <HeaderStyled>
      <div className="logo">
        <a href="/">
          <img src={ddddd} alt="Logo" width="60px" />
        </a>
      </div>
      <nav className="menu-central">
        <a href="https://barbershop.chagassilva.com" className="btn-mainmenu">
          <IoHomeSharp />
          Home
        </a>
      </nav>
      <div className="redes-sociais">
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </HeaderStyled>
  );
}
