import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
   const [isLogin, setIsLogin] = useState(false);

   useEffect(() => {
      Cookies.get("access") && setIsLogin(true);
   }, []);

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
         {!isLogin ? (
            <>
               <NavLink className="header-item" to={"/login"}>
                  ورود
               </NavLink>
               <NavLink className="header-item" to={"/choseRegister"}>
                  ثبت نام
               </NavLink>
            </>
         ) : (
            <NavLink className="header-item" to={"/dashboard/myAds"}>
               داشبورد
            </NavLink>
         )}
      </div>
   );
};

export default Header;
