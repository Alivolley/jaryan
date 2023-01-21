import React from "react";
import "./MyAdsItem.css";

const MyAdsItem = ({ order, subject, platform, id }) => {
   return (
      <div className="myAds-card">
         <div className="myAds-card__item">
            <p className="myAds-card__lable">شخص سفارش دهنده :</p>
            <p className="myAds-card__answer">{order}</p>
         </div>
         <div className="myAds-card__item">
            <p className="myAds-card__lable">موضوع تبلیغ :</p>
            <p className="myAds-card__answer">{subject}</p>
         </div>
         <div className="myAds-card__item">
            <p className="myAds-card__lable">پلتفرم درخواستی برای تبلیغات :</p>
            <p className="myAds-card__answer">{platform}</p>
         </div>
         <div className="myAds-card__item">
            <p className="myAds-card__lable">شماره پلن انتخاب شده :</p>
            <p className="myAds-card__answer">{id}</p>
         </div>
      </div>
   );
};

export default MyAdsItem;
