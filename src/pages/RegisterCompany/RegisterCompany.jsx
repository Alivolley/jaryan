import React, { useState } from "react";
import "./RegisterCompany.css";

const RegisterCompany = () => {
   const [userName, setUserName] = useState("");
   const [number, setNumber] = useState("");
   const [password, setPassword] = useState("");

   const formHandler = (e) => {
      e.preventDefault();
   };
   return (
      <div className="register">
         <h3 className="register-title">ثبت نام به عنوان شرکت</h3>
         <form className="register_form" onSubmit={formHandler}>
            <div className="register-input__wrapper">
               <label className="register-input__lable">نام : </label>
               <input type="text" className="register-input" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="register-input__wrapper">
               <label className="register-input__lable">شماره تماس : </label>
               <input type="text" className="register-input" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="register-input__wrapper">
               <label className="register-input__lable">رمز عبور : </label>
               <input type="text" className="register-input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="register-btn">ثبت نام</button>
         </form>
      </div>
   );
};

export default RegisterCompany;
