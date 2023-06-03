import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro161 from "./Pages/MacBookPro161";
import CustomerDetails from "./Pages/CustomerDetails";
import ProductUpdate from "./Pages/ProductUpdate";
import DashBoard from "./Pages/DashBoard";
import InventaryNear from "./Pages/InventaryNear";
import Inventory from "./Pages/Inventory";
import Profile from "./Pages/Profile";
import UserProfile from "./Pages/UserProfile";
import EnterOTP from "./Pages/EnterOTP";
import CreateYourAccount from "./Pages/CreateYourAccount";
import NewPassword from "./Pages/NewPassword";
import ForgotPassword from "./Pages/ForgotPassword";
import SignIn from "./Pages/SignIn";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customer-details":
        title = "";
        metaDescription = "";
        break;
      case "/product-update":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/inventary-near":
        title = "";
        metaDescription = "";
        break;
      case "/inventory":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/enter-otp":
        title = "";
        metaDescription = "";
        break;
      case "/create-your-account":
        title = "";
        metaDescription = "";
        break;
      case "/new-password":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro161 />} />
      <Route path="/customer-details" element={<CustomerDetails />} />
      <Route path="/product-update" element={<ProductUpdate />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/inventary-near" element={<InventaryNear />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/enter-otp" element={<EnterOTP />} />
      <Route path="/create-your-account" element={<CreateYourAccount />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
export default App;
