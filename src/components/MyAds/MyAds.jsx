import React from "react";
import MyAdsItem from "../MyAdsItem/MyAdsItem";
import "./MyAds.css";

const MyAds = () => {
   return (
      <div className="myAds">
         <MyAdsItem order="احمد رحیمی" subject="مبلمان" platform="اینستاگرام" id={2275} />
         <MyAdsItem order="علی رسولی" subject="پنجره دو جداره" platform="توئیتر" id={7136} />
         <MyAdsItem order="لیلا سهیلی" subject="لورم ایپسوم" platform="تلگرام" id={9463} />
      </div>
   );
};

export default MyAds;
