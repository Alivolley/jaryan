import React, { useState } from "react";
import axiosInstance from "../../libs/axios";
import DialogComponent from "../DialogComponent/DialogComponent";
import "./ContactDashboard.css";

const ContactDashboard = () => {
   const [text, setText] = useState("");
   const [showDialog, setShowDialog] = useState(false);
   const [dialogText, setDialogText] = useState("");

   const formHandler = (e) => {
      e.preventDefault();

      if (text) {
         let textMessege = {
            message: text,
         };

         axiosInstance
            .post("contact_us/create/", JSON.stringify(textMessege))
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
      setText("");
      setDialogText("");
      setShowDialog(false);
   };

   return (
      <form className="contactDashboard" onSubmit={formHandler}>
         <div className="contactDashboard-lable">هرگونه پیشنهاد ، انتقاد و شکایات خود را برای ما ارسال کنید.</div>
         <textarea className="contactDashboard-textArea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
         <button className="contactDashboard-btn">ارسال</button>
         <DialogComponent open={showDialog} handleClose={closeDialog}>
            {dialogText}
         </DialogComponent>
      </form>
   );
};

export default ContactDashboard;
