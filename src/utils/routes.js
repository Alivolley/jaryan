import ChoseRegister from "../pages/ChoseRegister/ChoseRegister";
import Home from "../pages/Home/Home";
import Influencer from "../pages/Influencer/Influencer";
import RegisterCompany from "../pages/RegisterCompany/RegisterCompany";
import RegisterInfo from "../pages/RegisterInfo/RegisterInfo";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/influencers", element: <Influencer /> },
   { path: "/choseRegister", element: <ChoseRegister /> },
   { path: "/registerInfo", element: <RegisterInfo /> },
   { path: "/registerCompany", element: <RegisterCompany /> },
];

export default routes;
