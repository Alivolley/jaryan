import React from "react";
import "./CardItem.css";

const CardItem = ({ lable, answer }) => {
   return (
      <div className="cardItem">
         <p className="cardItem-lable">{lable}</p>
         <p className="cardItem-answer">{answer}</p>
      </div>
   );
};

export default CardItem;
