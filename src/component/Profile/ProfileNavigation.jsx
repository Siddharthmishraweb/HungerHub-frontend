import {
  AccountBalanceWallet,
  AddReaction,
  Event,
  Favorite,
  Logout,
  NotificationsActive,
  ShoppingBag,
} from "@mui/icons-material";
import React from "react";
import { Drawer, Divider, useMediaQuery } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
  { title: "Orders", icon: <ShoppingBag /> },
  { title: "Favorites", icon: <Favorite /> },
  { title: "Address", icon: <AddReaction /> },
  { title: "Payments", icon: <AccountBalanceWallet /> },
  { title: "Notification", icon: <NotificationsActive /> },
  { title: "Events", icon: <Event /> },
  { title: "Logout", icon: <Logout /> },
];

export const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("min-width:900px");
  const dispatch = useDispatch();
  const navigate =  useNavigate();
  const { auth } = useSelector(store => store)
  console.log("auth", auth);
  const handleNavigate = (item) => {
    if(item.title === "Logout"){
      dispatch(logout());
      navigate("/");
    }else
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  }

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={open}
        anchor="left"
        sx={{ zIndex: 1 , position: "sticky"}}
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
    </div>
  );
};
