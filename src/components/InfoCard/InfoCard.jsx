import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import "./InfoCard.css";

const InfoCard = ({ name, pageId, image, category, location, followers, price, interaction, paymentId }) => {
   return (
      <Grid item md={4}>
         <div className="card">
            <div className="card-header">
               <img src={image} className="card-header__image" alt="" />
               <div className="card-header__titles">
                  <h3 className="card-header__name">{name}</h3>
                  <p className="card-header__id">{pageId}</p>
               </div>
            </div>
            <div className="card-body">
               <CardItem lable="دسته بندی پیج" answer={category} />
               <CardItem lable="لوکیشن" answer={location} />
               <CardItem lable="تعداد فالور" answer={followers} />
               <CardItem lable="شروع قیمت" answer={price} />
               <CardItem lable="نرخ تعامل" answer={interaction} />
            </div>
            <Link to={`/payment/${paymentId}`} className="card-btn">
               سفارش
            </Link>
         </div>
      </Grid>
   );
};

export default InfoCard;
