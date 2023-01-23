import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogComponent from "../../components/DialogComponent/DialogComponent";
import axiosInstance from "../../libs/axios";
import "./Login.css";

const Login = () => {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [showDialog, setShowDialog] = useState(false);
   const [dialogText, setDialogText] = useState("");

   let navigate = useNavigate();

   useEffect(() => {
      Cookies.get("access") && navigate("/");
   }, []);

   const formHandler = (e) => {
      e.preventDefault();

      if (userName && password) {
         let user = {
            fullname: userName,
            password: password,
         };

         axiosInstance
            .post("accounts/login/", JSON.stringify(user))
            .then((res) => {
               if (res.status === 201) {
                  setDialogText("ورود با موفقیت انجام شد");
                  setShowDialog(true);
                  Cookies.set("refresh", res.data.token.refresh, { expires: 1 });
                  Cookies.set("access", res.data.token.access_token, { expires: 1 });
               }
            })
            .catch((err) => {
               console.log(err.response.data);
               err.response.data.non_field_errors[0] === "invalid data" && setDialogText("کاربری با این اطلاعات یافت نشد");
               setShowDialog(true);
            });
      }
   };

   const closeDialog = () => {
      setShowDialog(false);
      dialogText === "ورود با موفقیت انجام شد" && navigate(0);
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

         <DialogComponent open={showDialog} handleClose={closeDialog}>
            {dialogText}
         </DialogComponent>
      </div>
   );
};

export default Login;
