import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
   const [userName, setUserName] = useState("");
   const [number, setNumber] = useState("");
   const [password, setPassword] = useState("");
   const [text, setText] = useState("");

   const formHandler = (e) => {
      e.preventDefault();
   };

   return (
      <div className="register">
         <h3 className="register-title">میتوانید از طریق ارسال اطلاعات خود با ما در ارتباط باشید.</h3>
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
               <label className="register-input__lable">موضوع :</label>
               <input type="text" className="register-input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="register-input__wrapper">
               <label className="register-input__lable">متن :</label>
               <textarea name="" id="" cols="30" rows="10" className="register-input" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <button className="register-btn">ارسال اطلاعات</button>
         </form>
      </div>
   );
};

export default ContactUs;
