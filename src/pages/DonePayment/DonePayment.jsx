import React from "react";
import { Link } from "react-router-dom";
import "./DonePayment.css";

const DonePayment = () => {
   return (
      <div className="donePayment">
         <h2 className="donePayment-title">پرداخت با موفقیت انجام شد .</h2>
         <Link to="/" className="donePayment-btn">
            برو به سفارشات من
         </Link>
      </div>
   );
};

export default DonePayment;
