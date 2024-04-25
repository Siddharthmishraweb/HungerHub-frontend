// import { CssBaseline, ThemeProvider } from 'styled-components';
import { CssBaseline, ThemeProvider } from "@mui/material";
import GoogleFontsLoader from "./component/Navbar/GoogleFontsLoader";

import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import { Home } from "./component/Home/Home";
import { Restaurant } from "./component/Restaurant/Restaurant";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import { CustomerRouter } from "./Routers/CustomerRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./component/State/Authentication/Action";
import { findCart } from "./component/State/Cart/Action";
import { Routers } from "./Routers/Routers";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <GoogleFontsLoader />

      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Profile /> */}
      <Routers />
    </ThemeProvider>
  );
}

export default App;
