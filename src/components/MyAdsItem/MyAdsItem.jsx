import React from "react";
import toFarsiNumber from "../../utils/toFarsi";
import "./MyAdsItem.css";

const MyAdsItem = ({ order, subject, influName, phoneNumber }) => {
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
            <p className="myAds-card__lable">نام انفلوئنسر :</p>
            <p className="myAds-card__answer">{influName}</p>
         </div>
         <div className="myAds-card__item">
            <p className="myAds-card__lable">شماره تماس اینفلوئنسر :</p>
            <p className="myAds-card__answer">{toFarsiNumber(phoneNumber)}</p>
         </div>
      </div>
   );
};

export default MyAdsItem;
