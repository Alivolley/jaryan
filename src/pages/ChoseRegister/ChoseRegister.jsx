import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ChoseRegister.css";

const ChoseRegister = () => {
   return (
      <Grid container sx={{ direction: "rtl", marginTop: "10rem" }} columnSpacing={2}>
         <Grid item sm={6}>
            <Link to="/registerInfo" className="choseRegister-link choseRegister-link__first">
               ثبت نام به عنوان اینفلوئنسر
            </Link>
         </Grid>
         <Grid item sm={6}>
            <Link to="/registerCompany" className="choseRegister-link choseRegister-link__second">
               ثبت نام به عنوان شرکت
            </Link>
         </Grid>
      </Grid>
   );
};

export default ChoseRegister;
