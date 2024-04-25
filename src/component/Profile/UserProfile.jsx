import { AccountCircle } from "@mui/icons-material";
import React from "react";
import {Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../State/Authentication/Action";

export const UserProfile = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    const { auth } = useSelector(store => store)
    console.log("auth", auth);
    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <AccountCircle sx={{fontSize: "9rem"}}/>
                <h1 className="py-5 text-2xl font-semibold">
                    {auth?.user?.fullName}
                </h1>
                <p>Email: {auth?.user?.email}</p>
                <Button variant="contained" onClick={()=>handleLogout()} sx={{margin: "2rem 0rem"}}>Logout</Button>
            </div>
        </div>
    );
}