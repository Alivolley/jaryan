import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./utils/routes";

const App = () => {
   const route = useRoutes(routes);

   return (
      <div>
         <Header />
         {route}
      </div>
   );
};

export default App;
