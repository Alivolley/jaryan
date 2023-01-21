import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import "./InfoCard.css";

const InfoCard = ({ name, id, image, category, location, followers, price, interaction }) => {
   return (
      <Grid item md={4}>
         <div className="card">
            <div className="card-header">
               <img src={image} className="card-header__image" alt="" />
               <div className="card-header__titles">
                  <h3 className="card-header__name">{name}</h3>
                  <p className="card-header__id">{id}</p>
               </div>
            </div>
            <div className="card-body">
               <CardItem lable="دسته بندی پیج" answer={category} />
               <CardItem lable="لوکیشن" answer={location} />
               <CardItem lable="تعداد فالور" answer={followers} />
               <CardItem lable="شروع قیمت" answer={price} />
               <CardItem lable="نرخ تعامل" answer={interaction} />
            </div>
            <Link to="/payment" className="card-btn">
               سفارش
            </Link>
         </div>
      </Grid>
   );
};

export default InfoCard;
