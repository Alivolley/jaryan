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
   const [category, setCategory] = useState("");
   const [price, setPrice] = useState("");
   const [avatar, setAvatar] = useState("");
   const [showDialog, setShowDialog] = useState(false);
   const [dialogText, setDialogText] = useState("");

   let navigate = useNavigate();

   useEffect(() => {
      Cookies.get("access") && navigate("/");
   }, []);

   const formHandler = (e) => {
      e.preventDefault();

      if (userName && number && password && pageId && followers && category && price && avatar) {
         let formData = new FormData();

         formData.append("fullname", userName);
         formData.append("phone_number", number);
         formData.append("page_id", pageId);
         formData.append("follower_count", followers);
         formData.append("password", password);
         formData.append("category", category);
         formData.append("price", price);
         formData.append("image", avatar);

         axiosInstance
            .post("accounts/register/influ/", formData, {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            })
            .then((res) => {
               if (res.status === 201) {
                  setDialogText("ثبت نام با موفقیت انجام شد");
                  setShowDialog(true);
                  Cookies.set("refresh", res.data.token.refresh, { expires: 1 });
                  Cookies.set("access", res.data.token.access_token, { expires: 1 });
               }
            })
            .catch((err) => {
               err.response.data.fullname[0] === "user influ extend with this fullname already exists." && setDialogText("شخصی با این نام کاربری موجود میباشد");
               setShowDialog(true);
            });
      }
   };

   const closeDialog = () => {
      setShowDialog(false);
      dialogText === "ثبت نام با موفقیت انجام شد" && navigate(0);
   };

   return (
      <div className="register" style={{ marginTop: "3rem" }}>
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
            <div className="register-input__wrapper">
               <label className="register-input__lable">دسته بندی :</label>
               <input type="text" className="register-input" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="register-input__wrapper">
               <label className="register-input__lable">قیمت درخواستی :</label>
               <input type="text" className="register-input" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="register-input__wrapper">
               <label className="register-input__lable">انتخاب عکس پروفایل :</label>
               <input type="file" className="register-input" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} />
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
