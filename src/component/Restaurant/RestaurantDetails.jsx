import React from 'react';
import { Grid, Divider, Typography, FormControl, RadioGroup,Radio, FormControlLabel } from '@mui/material';
import { LocationOn, CalendarToday } from '@mui/icons-material';
import { MenuCard } from '../MenuCard/MenuCard';
const categories = [
    "All",
    "pizza",
    "biryani",
    "burger",
    "rice"
];
const foodTypes = [
    {label: "All", value: "all"},
    {label: "Vegetarian", value: "vegetarian"},
    {label: "Non-Vegetarian", value: "non_vegetarian"},
    {label: "Seasonal", value: "seasonal"}
]

const menu = [1,1,1,1,1,1,1];

const RestaurantDetails = () => {
    const handleFilter = () => {

    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian Fast food/3</h3>
                <div>
                    <Grid item xs={12}>
                        <img className="w-full h-[40vh] object-cover" src="https://res.cloudinary.com/dcpesbd8q/image/upload/v1707802819/cpfxroggttxg6tedfskd.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-[40vh] object-cover" src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802819/dtwyuhxuawmg3qzffv84.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-[40vh] object-cover" src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802825/ux3xq93xzfbqhtudigv2.jpg" alt="" />
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                    <p className='text-gray-500 mt-1'>
                        dfasfv zscdsifjk zkjcjfk nancevhjc ajecaerfvafn macwacnnerjvnefkv eaf ahhcknak
                    </p>
                    <div className='space-y-3  mt-3'>
                        <p className="text-gray-500 flex items-center gap-3">
                            <LocationOn />
                            <span>
                                Mumbai Maharastra
                            </span>
                        </p>
                        <p className="text-gray-500 flex items-center gap-3">
                            <CalendarToday />
                            <span>
                                Mon-Sun: 9:00 AM - 9:00 PM(Today)
                            </span>
                        </p>                        
                    </div>
                    <p className="text-gray-500 flex items-center gap-3">
                        <LocationOn />
                        <span>
                            Mumbai Maharastra
                        </span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-3">
                        <CalendarToday />
                        <span>
                            Mon-Sun: 9:00 AM - 9:00 PM(Today)
                        </span>
                    </p>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Type
                            </Typography>
                            <FormControl>
                                <RadioGroup>
                                    {
                                        foodTypes.map((item) => (
                                            <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodTypes}>
                                    {
                                        categories.map((item) => (
                                            <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
{
    menu.map((item)=> <MenuCard />)
}
                </div>
            </section>
        </div>
    );
}

export default RestaurantDetails;