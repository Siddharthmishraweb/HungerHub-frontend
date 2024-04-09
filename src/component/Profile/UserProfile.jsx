import { AccountCircle } from "@mui/icons-material";
import React from "react";
import {Button} from "@mui/material";

export const UserProfile = () => {
    const handleLogout = () => {

    }
    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <AccountCircle sx={{fontSize: "9rem"}}/>
                <h1 className="py-5 text-2xl font-semibold">
                    Siddharht Mishra
                </h1>
                <p>Email: mishrasiddharth1999@gmail.com</p>
                <Button variant="contained" onClick={()=>handleLogout()} sx={{margin: "2rem 0rem"}}>Logout</Button>
            </div>
        </div>
    );
}