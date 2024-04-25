// // export const Admin = () => {
// //     return <div>Admin</div>
// // }

// import {
//     AccountBalanceWallet,
//     AddReaction,
//     Event,
//     Favorite,
//     Logout,
//     NotificationsActive,
//     ShoppingBag,
//     Dashboard,
//     LocalMall,
//     List,
//     RestaurantMenu,
//     SoupKitchen,
//     Summarize
//   } from "@mui/icons-material";
//   import React from "react";
//   import { Drawer, Divider, useMediaQuery } from "@mui/material";
//   import { useNavigate } from 'react-router-dom';
//   import { useDispatch, useSelector } from "react-redux";
// //   import { logout } from "../State/Authentication/Action";
  
//   const menu = [
//     { title: "Dashboard", icon: <Dashboard /> },
//     { title: "Orders", icon: <LocalMall /> },
//     { title: "Menu", icon: <List /> },
//     { title: "Food Category", icon: <RestaurantMenu /> },
//     { title: "Ingredients", icon: <SoupKitchen /> },
//     { title: "Events", icon: <Event /> },
//     { title: "Details", icon: <Summarize /> },
//     { title: "Logout", icon: <Logout /> },
//   ];
  
//   export const Admin = ({ open, handleClose }) => {
//     const isSmallScreen = useMediaQuery("min-width:900px");
//     const dispatch = useDispatch();
//     const navigate =  useNavigate();
//     const { auth } = useSelector(store => store)
//     console.log("auth", auth);
//     const handleNavigate = (item) => {
//       if(item.title === "Logout"){
//         //dispatch(logout());
//         navigate("/");
//       }else
//       navigate(`/admin/restaurant/${item.title.toLowerCase()}`);
//     }
  
//     return (
//       <div>
//         <Drawer
//           variant={isSmallScreen ? "temporary" : "permanent"}
//           onClose={handleClose}
//           open={open}
//           anchor="left"
//           sx={{ zIndex: 1 , position: "sticky"}}
//         >
          // <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
          //   {menu.map((item, i) => (
          //     <>
          //       <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer" style={{cursor: "pointer"}}>
          //         {item.icon}
          //         <span>{item.title}</span>
          //       </div>
          //       {i !== menu.length - 1 && <Divider />}
          //     </>
          //   ))}
          // </div>
//         </Drawer>
//       </div>
//     );
//   };

import { Route, Routes } from "react-router-dom";
import { AdminSideBar } from "./AdminSideBar";
import  Dashboard  from "../../AdminComponent/Admin/Dashboard/Dashboard";
export const Admin = () => {
  const handleClose = () => {

  }
  return (
    <div>
      <div className="lg:flex justify-between">
        <div>
          <AdminSideBar handleClose={handleClose}/>
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Dashboard />} />
            <Route path="/menu" element={<Dashboard />} />
            <Route path="/category" element={<Dashboard />} />
            <Route path="/ingredients" element={<Dashboard />} />
            <Route path="/events" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}