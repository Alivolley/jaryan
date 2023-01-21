import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
   const navigate = useNavigate();

   const formHandler = (e) => {
      e.preventDefault();
      navigate("/");
   };

   return (
      <>
         <h3 className="payment-title">پرداخت نهایی</h3>
         <div className="payment">
            <form className="payment-form" onSubmit={formHandler}>
               <div className="payment-item">
                  <p className="payment-item__lable">نام اینفلوئنسر :</p>
                  <p className="payment-item__desc">محمد حسینی</p>
               </div>
               <div className="payment-item">
                  <p className="payment-item__lable">تعداد فالور :</p>
                  <p className="payment-item__desc">۷۱۸</p>
               </div>
               <div className="payment-item">
                  <p className="payment-item__lable">قیمت :</p>
                  <p className="payment-item__desc">{(23000).toLocaleString("fa-IR")}</p>
               </div>

               <button className="payment-btn">پرداخت</button>
            </form>
         </div>
      </>
   );
};

export default Payment;
