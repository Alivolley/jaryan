import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogComponent from "../../components/DialogComponent/DialogComponent";
import axiosInstance from "../../libs/axios";
import "./RegisterCompany.css";

const RegisterCompany = () => {
   const [userName, setUserName] = useState("");
   const [number, setNumber] = useState("");
   const [password, setPassword] = useState("");
   const [showDialog, setShowDialog] = useState(false);
   const [dialogText, setDialogText] = useState("");

   let navigate = useNavigate();

   useEffect(() => {
      Cookies.get("access") && navigate("/");
   }, []);

   const formHandler = (e) => {
      e.preventDefault();

      if (userName && number && password) {
         let newInflu = {
            fullname: userName,
            phone_number: number,
            password: password,
         };

         axiosInstance
            .post("accounts/register/company/", JSON.stringify(newInflu))
            .then((res) => {
               if (res.status === 201) {
                  setDialogText("ثبت نام با موفقیت انجام شد");
                  setShowDialog(true);
                  Cookies.set("refresh", res.data.token.refresh, { expires: 1 });
                  Cookies.set("access", res.data.token.access_token, { expires: 1 });
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
      setShowDialog(false);
      dialogText === "ثبت نام با موفقیت انجام شد" && navigate(0);
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

         <DialogComponent open={showDialog} handleClose={closeDialog}>
            {dialogText}
         </DialogComponent>
      </div>
   );
};

export default RegisterCompany;
