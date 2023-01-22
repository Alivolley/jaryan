import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
   return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
         <CircularProgress />
      </div>
   );
};

export default Loader;
