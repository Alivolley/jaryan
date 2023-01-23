import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Home.css";
import social1 from "./../../assets/images/social1.png";
import { Link } from "react-router-dom";
import InfoCard from "../../components/InfoCard/InfoCard";
import axiosInstance from "../../libs/axios";
import Loader from "../../components/Loader/Loader";

const Home = () => {
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
      <>
         <Grid container className="banner">
            <Grid item lg={6}>
               <p className="banner-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                  لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
               </p>
               <Link to="/influencers" className="banner-btn">
                  لیست اینفلوئنسر ها
               </Link>
            </Grid>
            <Grid item lg={6} sx={{ display: "flex", alignItems: "center" }}>
               <img src={social1} alt="" className="banner-image" />
            </Grid>
         </Grid>
         <h2 className="home-bests-title">اینفلوئنسر های برتر ماه</h2>
         <Grid container className="home-bests-wrapper" spacing={4} sx={{ marginTop: "5rem", marginBottom: "15rem" }}>
            {isLoading ? (
               <Loader />
            ) : (
               bestMonth.map(
                  (best, index) =>
                     index < 3 && (
                        <InfoCard
                           key={best.id}
                           name={best.fullname}
                           pageId={best.page_id}
                           image={`https://alirezafa.pythonanywhere.com${best.image}`}
                           category={best.category}
                           location="تهران"
                           followers={best.follower_count}
                           price={best.price.toLocaleString("fa-IR")}
                           interaction="12"
                           paymentId={best.id}
                        />
                     )
               )
            )}
         </Grid>
      </>
   );
};

export default Home;
