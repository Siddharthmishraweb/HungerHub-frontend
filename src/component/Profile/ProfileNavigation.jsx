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
  const navigate =  useNavigate();
  const handleNavigate = (item) => {
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
