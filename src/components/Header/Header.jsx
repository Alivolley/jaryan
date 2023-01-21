import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <div className="header">
         <NavLink className="header-item" to={"/"}>
            خانه
         </NavLink>
         <NavLink className="header-item" to="/influencers">
            لیست اینفلوئنسر ها
         </NavLink>
         <NavLink className="header-item" to={"/"}>
            تماس با ما
         </NavLink>
         <NavLink className="header-item" to={"/"}>
            ورود
         </NavLink>
         <NavLink className="header-item" to={"/"}>
            ثبت نام
         </NavLink>
      </div>
   );
};

export default Header;
