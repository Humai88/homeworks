import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <div className={s.nav}>
      <NavLink to="/pre-junior" activeClassName={s.active}>
        Pre-Junior
      </NavLink>
      <NavLink to="/junior" activeClassName={s.active}>
        Junior
      </NavLink>
      <NavLink to="/junior-plus" activeClassName={s.active}>
        Junior+
      </NavLink>
      <FaArrowRight className={s.trigger} />
    </div>
  );
}

export default Header;
