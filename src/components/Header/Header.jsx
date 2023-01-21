import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
   return (
      <div className="header">
         <NavLink className="header-item" to={"/"}>
            صفحه اصلی
         </NavLink>
         <NavLink className="header-item" to="/influencers">
            لیست اینفلوئنسر ها
         </NavLink>
         <NavLink className="header-item" to={"/contactUs"}>
            تماس با ما
         </NavLink>
         <NavLink className="header-item" to={"/login"}>
            ورود
         </NavLink>
         <NavLink className="header-item" to={"/choseRegister"}>
            ثبت نام
         </NavLink>
      </div>
   );
};

export default Header;
