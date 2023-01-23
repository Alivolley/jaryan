import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import Loader from "../../components/Loader/Loader";
import axiosInstance from "../../libs/axios";
import profile from "./../../assets/images/profile.png";
import "./Influencer.css";

const Influencer = () => {
   const [bestMonth, setBestMonth] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      axiosInstance("influ/")
         .then((res) => {
            setIsLoading(false);
            setBestMonth(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div className="influencer">
         <h3 className="influencer-title">لیست اینفلوئنسر ها</h3>
         <Grid container spacing={4} sx={{ marginTop: "5rem", marginBottom: "15rem" }}>
            {isLoading ? (
               <Loader />
            ) : (
               bestMonth.map((best) => (
                  <InfoCard
                     key={best.id}
                     name={best.fullname}
                     pageId={best.page_id}
                     location="تهران"
                     followers={best.follower_count}
                     interaction="12"
                     paymentId={best.id}
                     image={`https://alirezafa.pythonanywhere.com${best.image}`}
                     category={best.category}
                     price={best.price.toLocaleString("fa-IR")}
                  />
               ))
            )}
         </Grid>
      </div>
   );
};

export default Influencer;
