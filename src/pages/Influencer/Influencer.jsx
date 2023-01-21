import { Grid } from "@mui/material";
import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import profile from "./../../assets/images/profile.png";
import "./Influencer.css";

const Influencer = () => {
   return (
      <div className="influencer">
         <h3 className="influencer-title">لیست اینفلوئنسر ها</h3>
         <Grid container spacing={4} sx={{ marginTop: "5rem", marginBottom: "15rem" }}>
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
            <InfoCard name="محمد قربانی فر" id="moh_ghorbni8" image={profile} category="طنز" location="تهران" followers={354} price={"23,000"} interaction="12" />
         </Grid>
      </div>
   );
};

export default Influencer;
