import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";
import Loader from "../Loader/Loader";
import MyAdsItem from "../MyAdsItem/MyAdsItem";
import "./MyAds.css";

const MyAds = () => {
   const [myAds, setMyAds] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let token = Cookies.get("access");

      axiosInstance("dashboard/", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
         .then((res) => {
            console.log(res);
            if (res.status === 200) {
               setMyAds(res.data.ads);
               setIsLoading(false);
            }
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : myAds.length ? (
            <div className="myAds">
               {myAds.map((ad) => (
                  <MyAdsItem key={ad.id} order={ad.company.fullname} subject={ad.influ.category} influName={ad.influ.fullname} phoneNumber={ad.influ.phone_number} />
               ))}
            </div>
         ) : (
            <p className="myAds-noAds">هیچ تبلیغی وجود ندارد.</p>
         )}
      </>
   );
};

export default MyAds;
