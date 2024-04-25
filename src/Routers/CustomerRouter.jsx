import { Home } from "../component/Home/Home";
import { Navbar } from "../component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "../component/Profile/Profile";
import Cart from "../component/Cart/Cart";
import RestaurantDetails from "../component/Restaurant/RestaurantDetails";
import Food from "../component/Food/Food";

import { Auth } from "../component/Auth/Auth";
import { PaymentSuccess } from "../component/PaymentSuccess/PaymentSuccess";

export const CustomerRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/account/:register" element={<Home/>} />
                <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/food" element={<Food/>} />
                <Route path="/my-profile/*" element={<Profile/>} />
                <Route path="/payment/success/:id" element={<PaymentSuccess/>} />
            </Routes>
            
            <Auth />
        </div>
    );
}