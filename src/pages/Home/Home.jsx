import { Grid } from "@mui/material";
import React from "react";
import "./Home.css";
import social1 from "./../../assets/images/social1.png";
import { Link } from "react-router-dom";
import InfoCard from "../../components/InfoCard/InfoCard";
import social2 from "./../../assets/images/social2.jpg";

const Home = () => {
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
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={social2} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={social2} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={social2} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
         </Grid>
      </>
   );
};

export default Home;
