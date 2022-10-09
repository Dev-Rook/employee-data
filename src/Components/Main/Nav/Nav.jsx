import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../../Styles/Component-Styles/Nav-Styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <div className={Styles.Logo_Container}>
          <img
            src={`https://github.com/Dev-Rook/rookdev/blob/master/src/Assests/Images/Logo.png?raw=true`}
            alt=""
            className={Styles.Logo}
          />
        </div>

        <h3 className={Styles.Brand}>Data</h3>
      </div>

      <div className={Styles.Right_Side}>
        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink}>Home</Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink}>About</Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink}>Personel</Link>
          </li>
          <li className={Styles.NavItem}>
            <Link className={Styles.Navlink}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
