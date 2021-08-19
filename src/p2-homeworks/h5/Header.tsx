import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  const [nav, setNav] = useState(false);
  const onChangeHandler = () => {
    setNav(!nav);
  };
  const hideNavbar = () => {
    setNav(false);
  };
  return (
    <div className="menu-wrap">
      <input
        type="checkbox"
        className="toggler"
        onChange={onChangeHandler}
        checked={nav}
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <NavLink
                to="/pre-junior"
                onClick={hideNavbar}
                activeClassName="active"
              >
                Pre-Junior
              </NavLink>
              <NavLink
                to="/junior"
                onClick={hideNavbar}
                activeClassName="active"
              >
                Junior
              </NavLink>
              <NavLink
                to="/junior-plus"
                onClick={hideNavbar}
                activeClassName="active"
              >
                Junior+
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <div className={s.nav}>
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
    </div> */
}
