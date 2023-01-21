import ChoseRegister from "../pages/ChoseRegister/ChoseRegister";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import Influencer from "../pages/Influencer/Influencer";
import Login from "../pages/Login/Login";
import RegisterCompany from "../pages/RegisterCompany/RegisterCompany";
import RegisterInfo from "../pages/RegisterInfo/RegisterInfo";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/influencers", element: <Influencer /> },
   { path: "/choseRegister", element: <ChoseRegister /> },
   { path: "/registerInfo", element: <RegisterInfo /> },
   { path: "/registerCompany", element: <RegisterCompany /> },
   { path: "/login", element: <Login /> },
   { path: "/contactUs", element: <ContactUs /> },
];

export default routes;
