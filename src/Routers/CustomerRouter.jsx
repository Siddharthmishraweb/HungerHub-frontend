import { Home } from "../component/Home/Home";
import { Navbar } from "../component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "../component/Profile/Profile";
import Cart from "../component/Cart/Cart";
import RestaurantDetails from "../component/Restaurant/RestaurantDetails";

export const CustomerRouter = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/account/:register" element={<Home/>} />
                <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/my-profile/*" element={<Profile/>} />

            </Routes>
        </div>
    );
}