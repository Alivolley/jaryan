import React from "react";
import "./DialogComponent.css";
import { Dialog } from "@mui/material";

const DialogComponent = ({ open, handleClose, children }) => {
   return (
      <Dialog open={open} onClose={handleClose}>
         <div className="dialog">{children}</div>
         <button className="dialog-btn" onClick={handleClose}>
            تایید
         </button>
      </Dialog>
   );
};

export default DialogComponent;
