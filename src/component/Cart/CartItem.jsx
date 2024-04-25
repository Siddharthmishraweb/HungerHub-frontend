import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCartItem } from "../State/Cart/Action";

export const CartItem = ({ item }) => {
    const { auth, cart } = useSelector(store => store);
    const navigate = useNavigate();
    const disptach = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const handleUpdateCartItem = (value) => {
        if(value === -1 && item.quantity === 1){
            handleRemoveCartItem()
        }
        const data = { cartItemId: item.id, quantity: item.quantity + value }
        disptach(updateCartItem({data, jwt}));
    }
    const handleRemoveCartItem = () => {

    }

    return(
        <div className="px-5">
            <div className="lg:flex items-center lg:space-x-5">
                <div>
                    <img className="w-[5rem] h-5rem object-cover" 
                     src={item?.food?.images[0]} alt="" />
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p>{item.food.name}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                                <IconButton onClick={()=> handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutline/>
                                </IconButton>
                                <div className="w-5 h-5 text-xs flex items-center justify-center">
                                    {item.quantity}
                                </div>
                                <IconButton onClick={()=> handleUpdateCartItem(1)}>
                                    <AddCircleOutline />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>₹ {item.totalPrice}</p>
                </div>
            </div>
            <div className="pt-3 space-x-2">
                {item?.food?.ingredients.map((item) => <Chip label={"bread"} />)}
            </div>
        </div>
    )
}