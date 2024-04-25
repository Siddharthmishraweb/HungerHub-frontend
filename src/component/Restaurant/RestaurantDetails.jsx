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
import { LocationOn, CalendarToday } from "@mui/icons-material";
import { MenuCard } from "../MenuCard/MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../State/Restaurant/Action";
import { getAllFood, getMenuItemsByRestaurantId } from "../State/Menu/Action";
const categories = ["All", "pizza", "biryani", "burger", "rice"];
const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const menu = [1, 1, 1, 1, 1, 1, 1];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const navigate = useNavigate();
  const disptach = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant, menu } = useSelector((store) => store);
  const [selectedCategory, setSelectedCategory] = useState("");


  const { id, city } = useParams();

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  const handleFilterCategory = (e) => {
    console.log(e.target.value, e.target.name);
  };

  useEffect(() => {
    disptach(getRestaurantById({ restaurantId: id, jwt: jwt }));
    disptach(getRestaurantsCategory({ jwt, restaurantId: id }));
  }, []);

  useEffect(() => {
    disptach(
      getMenuItemsByRestaurantId({
        jwt,
        restaurantId: id,
        isVegeterian: false,
        isSeasonal: false,
        isNonVeg: false,
        foodCategory: selectedCategory,
      })
    );
  }, [selectedCategory]);


  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/india/indian Fast food/3
        </h3>
        <div>
          {restaurant?.restaurant?.images && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {restaurant.restaurant.images.slice(0, 2).map((img, index) => (
                  <Grid item xs={6} key={index} style={{ padding: "6px" }}>
                    <img
                      className="gallery-image"
                      src={img}
                      alt={`Restaurant Image ${index + 1}`}
                      onLoad={(event) => {
                        const image = event.target;
                        const naturalWidth = image.naturalWidth;
                        const naturalHeight = image.naturalHeight;
                        const containerWidth = image.parentElement.clientWidth;
                        const adjustedWidth = containerWidth - 2 * 4;

                        const scaleRatio = Math.min(
                          adjustedWidth / naturalWidth,
                          1
                        );
                        const adjustedHeight = naturalHeight * scaleRatio;

                        image.style.width = `${adjustedWidth}px`;
                        image.style.height = `27rem`;
                      }}
                      style={{
                        objectFit: "cover",
                        display: "block",
                        border: "6px solid white",
                        margin: "0 1px",
                      }}
                    />
                  </Grid>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {restaurant.restaurant.images.slice(2, 3).map((img, index) => (
                  <Grid item xs={12} key={index + 2} style={{ padding: "6px" }}>
                    <img
                      className="gallery-image"
                      src={img}
                      alt={`Restaurant Image ${index + 3}`}
                      onLoad={(event) => {
                        const image = event.target;
                        const naturalWidth = image.naturalWidth;
                        const naturalHeight = image.naturalHeight;
                        const containerWidth = image.parentElement.clientWidth;
                        const adjustedWidth = containerWidth - 2 * 4;

                        const scaleRatio = Math.min(
                          adjustedWidth / naturalWidth,
                          1
                        );
                        const adjustedHeight = naturalHeight * scaleRatio;

                        image.style.width = `${adjustedWidth}px`;
                        image.style.height = `27rem`;
                      }}
                      style={{
                        objectFit: "cover",
                        display: "block",
                        border: "6px solid white",
                        margin: "0 1px",
                      }}
                    />
                  </Grid>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {restaurant.restaurant.images.slice(3, 5).map((img, index) => (
                  <Grid
                    item
                    xs={6}
                    key={index + 3}
                    style={{ padding: "6px", width: "50%" }}
                  >
                    <img
                      className="gallery-image"
                      src={img}
                      alt={`Restaurant Image ${index + 4}`}
                      onLoad={(event) => {
                        const image = event.target;
                        const naturalWidth = image.naturalWidth;
                        const naturalHeight = image.naturalHeight;
                        const containerWidth = image.parentElement.clientWidth;
                        const adjustedWidth = containerWidth - 2 * 4;

                        const scaleRatio = Math.min(
                          adjustedWidth / naturalWidth,
                          1
                        );
                        const adjustedHeight = naturalHeight * scaleRatio;

                        image.style.width = `${adjustedWidth}px`;
                        image.style.height = `27rem`;
                      }}
                      style={{
                        objectFit: "cover",
                        display: "block",
                        border: "6px solid white",
                        margin: "0 1px",
                      }}
                    />
                  </Grid>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">
            {restaurant?.restaurant?.name}
          </h1>
          <p className="text-gray-500 mt-1">
            {restaurant?.restaurant?.description}
          </p>
          <div className="space-y-3  mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOn />
              <span> {restaurant?.restaurant?.address.streetAddress}, {restaurant?.restaurant?.address.city} ,{restaurant?.restaurant?.address.state}, {restaurant?.restaurant?.address.pincode}, {restaurant?.restaurant?.address.country},  </span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarToday />
              <span>Mon-Sun: 9:00 AM - 9:00 PM(Today)</span>
            </p>
          </div>
          <p className="text-gray-500 flex items-center gap-3">
            <LocationOn />
            <span>Mumbai Maharastra</span>
          </p>
          <p className="text-gray-500 flex items-center gap-3">
            <CalendarToday />
            <span>{restaurant?.restaurant?.openingHours}</span>
          </p>
        </div>
      </section>
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
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup onChange={handleFilterCategory} name="food_type">
                  {restaurant?.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
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

export default RestaurantDetails;
