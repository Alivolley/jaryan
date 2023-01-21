import React, { useState } from "react";
import "./ContactDashboard.css";

const ContactDashboard = () => {
   const [text, setText] = useState("");

   const formHandler = (e) => {
      e.preventDefault();
   };

   return (
      <form className="contactDashboard" onSubmit={formHandler}>
         <div className="contactDashboard-lable">هرگونه پیشنهاد ، انتقاد و شکایات خود را برای ما ارسال کنید.</div>
         <textarea className="contactDashboard-textArea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
         <button className="contactDashboard-btn">ارسال</button>
      </form>
   );
};

export default ContactDashboard;
