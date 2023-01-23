import ContactDashboard from "../components/ContactDashboard/ContactDashboard";
import MyAds from "../components/MyAds/MyAds";
import ChoseRegister from "../pages/ChoseRegister/ChoseRegister";
import ContactUs from "../pages/ContactUs/ContactUs";
import DashboardCompony from "../pages/DashboardCompony/DashboardCompony";
import DashboardInfo from "../pages/DashboardInfo/DashboardInfo";
import DonePayment from "../pages/DonePayment/DonePayment";
import Home from "../pages/Home/Home";
import Influencer from "../pages/Influencer/Influencer";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
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
   { path: "/payment/:paymentId", element: <Payment /> },
   { path: "/done/:paymentId", element: <DonePayment /> },
   {
      path: "/dashboard",
      element: <DashboardInfo />,
      children: [
         { path: "myAds", element: <MyAds /> },
         { path: "contact", element: <ContactDashboard /> },
      ],
   },
   { path: "/dashboardCompany", element: <DashboardCompony /> },
];

export default routes;
