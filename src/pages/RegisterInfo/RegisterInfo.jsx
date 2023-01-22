import React, { useEffect, useState } from "react";
import "./RegisterInfo.css";
import axiosInstance from "../../libs/axios";
import DialogComponent from "../../components/DialogComponent/DialogComponent";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const RegisterInfo = () => {
   const [userName, setUserName] = useState("");
   const [number, setNumber] = useState("");
   const [password, setPassword] = useState("");
   const [pageId, setPageId] = useState("");
   const [followers, setFollowers] = useState("");
   const [showDialog, setShowDialog] = useState(false);
   const [dialogText, setDialogText] = useState("");

   let navigate = useNavigate();

   useEffect(() => {
      Cookies.get("access") && navigate("/");
   }, []);

   const formHandler = (e) => {
      e.preventDefault();

      if (userName && number && password && pageId && followers) {
         let newInflu = {
            fullname: userName,
            phone_number: number,
            page_id: pageId,
            follower_count: followers,
            password: password,
         };

         axiosInstance
            .post("accounts/register/influ/", JSON.stringify(newInflu))
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
      setUserName("");
      setNumber("");
      setPassword("");
      setPageId("");
      setFollowers("");
      setDialogText("");
      setShowDialog(false);
      navigate(0);
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

         <DialogComponent open={showDialog} handleClose={closeDialog}>
            {dialogText}
         </DialogComponent>
      </div>
   );
};

export default RegisterInfo;
