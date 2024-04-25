// export const AdminSideBar = () => {
//     return (<div>Admin Side Bar</div>)
// }

// // export const Admin = () => {
// //     return <div>Admin</div>
// // }

import {
    AccountBalanceWallet,
    AddReaction,
    Event,
    Favorite,
    Logout,
    NotificationsActive,
    ShoppingBag,
    Dashboard,
    LocalMall,
    List,
    RestaurantMenu,
    SoupKitchen,
    Summarize
  } from "@mui/icons-material";
  import React from "react";
  import { Drawer, Divider, useMediaQuery } from "@mui/material";
  import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from "react-redux";
//   import { logout } from "../State/Authentication/Action";
  
  const menu = [
    { title: "Dashboard", icon: <Dashboard /> , path:"/" },
    { title: "Orders", icon: <LocalMall /> , path:"/orders" },
    { title: "Menu", icon: <List /> , path:"/menu"},
    { title: "Food Category", icon: <RestaurantMenu /> , path:"/category"},
    { title: "Ingredients", icon: <SoupKitchen /> , path:"/ingredients"},
    { title: "Events", icon: <Event /> , path:"/events"},
    { title: "Details", icon: <Summarize /> , path:"/details"},
    { title: "Logout", icon: <Logout /> , path:"/logout"},
  ];
  
//   export const AdminSideBar = ({ open, handleClose }) => {
//     const isSmallScreen = useMediaQuery("min-width:900px");
//     const dispatch = useDispatch();
//     const navigate =  useNavigate();
//     const { auth } = useSelector(store => store)
//     console.log("auth", auth);
    // const handleNavigate = (item) => {
    //   if(item.title === "Logout"){
    //     //dispatch(logout());
    //     navigate("/");
    //   }else
    //   navigate(`/admin/restaurant/${item.title.toLowerCase()}`);
    // }
  
//     return (
//       <div>
//         <Drawer
//           variant={isSmallScreen ? "temporary" : "permanent"}
//           onClose={handleClose}
//           open={open}
//           anchor="left"
//           sx={{ zIndex: 1 , position: "sticky"}}
//         >
//           <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
//             {menu.map((item, i) => (
//               <>
//                 <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer" style={{cursor: "pointer"}}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </div>
//                 {i !== menu.length - 1 && <Divider />}
//               </>
//             ))}
//           </div>
//         </Drawer>
//       </div>
//     );
//   };

export const AdminSideBar = ({ handleClose }) => {
    const navigate =  useNavigate();
    const isSmallScreen = useMediaQuery("min-width:900px");
    const handleNavigate = (item) => {
        if(item.title === "Logout"){
          //dispatch(logout());
          navigate("/");
        }else
        navigate(`/admin/restaurant${item.path}`);
      }
    return(
    <div>
        <>
           <Drawer onClose={handleClose}
             variant={isSmallScreen ? "temporary" : "permanent"}
             open={true}
             anchor="left"
             sx={{zIndex: 1}}

           >
          <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
            {menu.map((item, i) => (
              <>
                <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer" style={{cursor: "pointer"}}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {i !== menu.length - 1 && <Divider />}
              </>
            ))}
          </div>
           </Drawer>
        </>
    </div>
    )

}