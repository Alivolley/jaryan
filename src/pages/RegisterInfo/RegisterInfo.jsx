import React, { useState } from "react";
import "./RegisterInfo.css";

const RegisterInfo = () => {
   const [userName, setUserName] = useState("");
   const [number, setNumber] = useState("");
   const [password, setPassword] = useState("");
   const [pageId, setPageId] = useState("");
   const [followers, setFollowers] = useState("");

   const formHandler = (e) => {
      e.preventDefault();
   };

   return (
      <div className="register">
         <h3 className="register-title">ثبت نام به عنوان اینفلوئنسر</h3>
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
            <div className="register-input__wrapper">
               <label className="register-input__lable">آیدی پیج : </label>
               <input type="text" className="register-input" value={pageId} onChange={(e) => setPageId(e.target.value)} />
            </div>
            <div className="register-input__wrapper">
               <label className="register-input__lable">تعداد فالوور : </label>
               <input type="text" className="register-input" value={followers} onChange={(e) => setFollowers(e.target.value)} />
            </div>
            <button className="register-btn">ثبت نام</button>
         </form>
      </div>
   );
};

export default RegisterInfo;
