import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import axiosInstance from "../../libs/axios";
import "./DonePayment.css";

const DonePayment = () => {
   const [isLoading, setIsLoading] = useState(true);

   const { paymentId } = useParams();

   useEffect(() => {
      let token = Cookies.get("access");

      axiosInstance(`payment/buy/${paymentId}/`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
         .then((res) => {
            console.log(res);
            if (res.status === 200) {
               setIsLoading(false);
            }
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="donePayment">
         {isLoading ? (
            <Loader />
         ) : (
            <>
               <h2 className="donePayment-title">پرداخت با موفقیت انجام شد .</h2>
               <Link to="/dashboard/myAds" className="donePayment-btn">
                  برو به سفارشات من
               </Link>
            </>
         )}
      </div>
   );
};

export default DonePayment;
