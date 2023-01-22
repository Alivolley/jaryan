import { Grid } from "@mui/material";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./DashboardInfo.css";

const DashboardInfo = () => {
   let navigate = useNavigate();

   useEffect(() => {
      !Cookies.get("access") && navigate("/");
   }, []);

   const logOutHandler = () => {
      Cookies.remove("access");
      Cookies.remove("refresh");
      navigate(0);
   };
   return (
      <div className="dashboardInfo">
         <Grid container columnSpacing={5}>
            <Grid item sm={3}>
               <div className="dashboardInfo-right">
                  <NavLink to="myAds" className="dashboardInfo-right__link">
                     تبلیغ های من
                  </NavLink>
                  <NavLink to="contact" className="dashboardInfo-right__link">
                     تماس با ما
                  </NavLink>
                  <button className="dashboardInfo-right__btn" onClick={logOutHandler}>
                     خروج از حساب
                  </button>
               </div>
            </Grid>
            <Grid item sm={9}>
               <div className="dashboardInfo-left">
                  <Outlet />
               </div>
            </Grid>
         </Grid>
      </div>
   );
};

export default DashboardInfo;
