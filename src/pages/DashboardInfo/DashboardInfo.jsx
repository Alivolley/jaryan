import { Grid } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./DashboardInfo.css";

const DashboardInfo = () => {
   return (
      <div className="dashboardInfo">
         <Grid container columnSpacing={5}>
            <Grid item sm={4}>
               <div className="dashboardInfo-right">
                  <NavLink to="myAds" className="dashboardInfo-right__link">
                     تبلیغ های من
                  </NavLink>
                  <NavLink to="contact" className="dashboardInfo-right__link">
                     تماس با ما
                  </NavLink>
               </div>
            </Grid>
            <Grid item sm={8}>
               <div className="dashboardInfo-left">
                  <Outlet />
               </div>
            </Grid>
         </Grid>
      </div>
   );
};

export default DashboardInfo;
