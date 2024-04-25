import React, { useEffect, useState } from "react";
import {
  Grid,
  Divider,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { MenuCard } from "../MenuCard/MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood } from "../State/Menu/Action";
const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const menu = [1, 1, 1, 1, 1, 1, 1];

const Food = () => {
  const [foodType, setFoodType] = useState("all");
  const navigate = useNavigate();
  const disptach = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {menu} = useSelector((store) => store);

  console.warn("menu", menu);
  const [selectedCategory, setSelectedCategory] = useState("");


  const { id, city } = useParams();

  const handleFilter = (e) => {
    const selectedFoodType = e.target.value;
    setFoodType(selectedFoodType);
    disptach(getAllFood({ jwt, isAll: selectedFoodType==="all", isVegeterian: selectedFoodType==="vegetarian", isSeasonal: selectedFoodType==="seasonal",  isNonVeg: selectedFoodType==="non_vegetarian"}));
  };


  const handleFilterCategory = (e) => {
    console.log(e.target.value, e.target.name);
  };

  useEffect(() => {
    disptach(getAllFood({ jwt, isAll: true, isVegeterian: false, isSeasonal: false,  isNonVeg: false }));
  }, []);


  return (
    <div className="px-5 lg:px-20">
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl>
                <RadioGroup>
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                      onChange={handleFilter}
                      checked={foodType === item.value}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu?.menuItems?.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Food;
