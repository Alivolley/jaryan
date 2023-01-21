import React, { useState } from "react";
import "./Login.css";

const Login = () => {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");

   const formHandler = (e) => {
      e.preventDefault();
   };

   return (
      <div className="register">
         <h3 className="register-title">ورود به پنل</h3>
         <form className="register_form" onSubmit={formHandler}>
            <div className="register-input__wrapper">
               <label className="register-input__lable">نام : </label>
               <input type="text" className="register-input" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>

            <div className="register-input__wrapper">
               <label className="register-input__lable">رمز عبور : </label>
               <input type="text" className="register-input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="register-btn">ورود</button>
         </form>
      </div>
   );
};

export default Login;
