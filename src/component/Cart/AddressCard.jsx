import React from "react";
import { Home } from "@mui/icons-material";
import { Button, Card } from "@mui/material";

export const AddressCard = ({item, showButton, handleSelectAddress}) => {
    // const handleSelectAddress = (item) => {
    //   console.log(item);
    // }
    return(
        <Card className="flex gap-5 w-64 p-5">
            <Home/>
            <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>
                    Mumbai, new shivam building, gokuldham market, 530068, Maharashtra, India
                </p>
                {
                    showButton && <Button variant="outlined" fullWidth onClick={()=> handleSelectAddress(item)} >Select</Button>
                }
            </div>
        </Card>

    );
}