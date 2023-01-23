import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DialogComponent from "../../components/DialogComponent/DialogComponent";
import Loader from "../../components/Loader/Loader";
import axiosInstance from "../../libs/axios";
import toFarsiNumber from "../../utils/toFarsi";
import "./Payment.css";

const Payment = () => {
   const [paymentInfo, setPaymentInfo] = useState();
   const [isLoading, setIsLoading] = useState(true);
   const [showDialog, setShowDialog] = useState(false);

   const navigate = useNavigate();
   const { paymentId } = useParams();

   useEffect(() => {
      axiosInstance(`payment/${paymentId}/`)
         .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
               setPaymentInfo(res.data);
               setIsLoading(false);
            }
         })
         .catch((err) => console.log(err));
   }, []);

   const formHandler = (e) => {
      e.preventDefault();

      if (Cookies.get("access")) {
         navigate(`/done/${paymentId}/`);
      } else {
         setShowDialog(true);
      }
   };

   const closeDialog = () => {
      setShowDialog(false);
   };

   return (
      <>
         <h3 className="payment-title">پرداخت نهایی</h3>
         {isLoading ? (
            <Loader />
         ) : (
            <div className="payment">
               <form className="payment-form" onSubmit={formHandler}>
                  <div className="payment-item">
                     <p className="payment-item__lable">نام اینفلوئنسر :</p>
                     <p className="payment-item__desc">{paymentInfo.fullname}</p>
                  </div>
                  <div className="payment-item">
                     <p className="payment-item__lable">تعداد فالور :</p>
                     <p className="payment-item__desc">{toFarsiNumber(paymentInfo.follower_count)}</p>
                  </div>
                  <div className="payment-item">
                     <p className="payment-item__lable">قیمت :</p>
                     <p className="payment-item__desc">{paymentInfo.price.toLocaleString("fa-IR")}</p>
                  </div>
                  <div className="payment-item">
                     <p className="payment-item__lable">دسته بندی :</p>
                     <p className="payment-item__desc">{paymentInfo.category}</p>
                  </div>
                  <div className="payment-item">
                     <p className="payment-item__lable">آیدی پیج :</p>
                     <p className="payment-item__desc">{paymentInfo.page_id}</p>
                  </div>

                  <button className="payment-btn">پرداخت</button>
               </form>

               <DialogComponent open={showDialog} handleClose={closeDialog}>
                  برای پرداخت ابتدا باید وارد حساب کاربری خود شوید
               </DialogComponent>
            </div>
         )}
      </>
   );
};

export default Payment;
