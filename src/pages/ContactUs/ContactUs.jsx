import React, { useState } from "react";
import DialogComponent from "../../components/DialogComponent/DialogComponent";
import axiosInstance from "../../libs/axios";
import "./ContactUs.css";

const ContactUs = () => {
   const [userName, setUserName] = useState("");
   const [number, setNumber] = useState("");
   const [subject, setSubject] = useState("");
   const [text, setText] = useState("");
   const [showDialog, setShowDialog] = useState(false);
   const [dialogText, setDialogText] = useState("");

   const formHandler = (e) => {
      e.preventDefault();

      if (userName && number && subject && text) {
         let newContect = {
            name: userName,
            phone_number: number,
            subject: subject,
            message: text,
         };

         axiosInstance
            .post("contact/create/", JSON.stringify(newContect))
            .then((res) => {
               if (res.status === 201) {
                  setDialogText("پیغام شما با موفقیت ارسال شد");
                  setShowDialog(true);
               }
            })
            .catch((err) => {
               setDialogText(err.message);
               setShowDialog(true);
               console.log(err);
            });
      }
   };

   const closeDialog = () => {
      setUserName("");
      setNumber("");
      setSubject("");
      setText("");
      setDialogText("");
      setShowDialog(false);
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
               <input type="text" className="register-input" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="register-input__wrapper">
               <label className="register-input__lable">متن :</label>
               <textarea name="" id="" cols="30" rows="10" className="register-input" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <button className="register-btn">ارسال اطلاعات</button>
         </form>

         <DialogComponent open={showDialog} handleClose={closeDialog}>
            {dialogText}
         </DialogComponent>
      </div>
   );
};

export default ContactUs;
