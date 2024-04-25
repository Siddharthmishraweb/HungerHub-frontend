import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, FormGroup, Checkbox, Button } from "@mui/material";
import { categorizeIngredients } from "../State/utils/categorizeIngredients";
import { CartItem } from "../Cart/CartItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";

const ingredients = [
    {
        category: "Nuts & Seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Bacon Strips", "Pulses"]
    },
    {
        category: "Bread",
        ingredients: ["Hamburger buns"]
    },
    {
        category: "Vegetable",
        ingredients: ["Lettuce", "Tomato slices", "Pickles", "Onion slices"]
    },
    {
        category: "Condiment",
        ingredients: ["Ketchup"]
    }
];

export const MenuCard = ({item}) => {
    // const handleCheckBoxChange = (value) => {
    //     console.log("value:: ", value)
    // }
    
    const disptach = useDispatch();
    const [selectedIngredient, setSelectedIngredient] = useState([]);

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        const reqData = {
            token: localStorage.getItem("jwt"),
            cartItem : {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredient
            }
        }
        console.log("reqData------ ", reqData);
        disptach(addItemToCart(reqData));

    }

    const handleCheckBoxChange = (itemName) => {
       if(selectedIngredient.includes(itemName)){
        setSelectedIngredient(selectedIngredient.filter(item => item !== itemName));
       }else{
        setSelectedIngredient([...selectedIngredient, itemName]);
       }
    }


    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>} aria-controls="panel1-content" id="panel1-header">
                <div className="lg:flex items-center justify-between">
                    <div className="lg:flex items-center lg:gap-5">
                        <img src={item.images[0]} alt="" className="w-[7rem] h-[7rem] object-cover" />
                    <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                        <p className="font-semibold text-xl">{item?.name}</p>
                        <p>₹ {item?.price}</p>
                        <p>{item?.description}</p>
                    </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form action="">
                    <div className="flex gap-5 flex-wrap">
                    {
                        Object.keys(categorizeIngredients(item?.ingredients)).map((item, index)=> 
                          <div key={index}>
                            <p>{item.category}</p>
                            <FormGroup>
                               {categorizeIngredients(item.ingredients)['category']
                                  .map((ingredient, index)=> 
                                    <FormControlLabel
                                      key={index}
                                      control={<Checkbox onChange={() => handleCheckBoxChange(item)}/>} 
                                      label={ingredient} 
                                    />
                                  )  
                               }
                            </FormGroup>
                          </div>
                        )
                    }
                    </div>
                    <div className="pt-55">
                        <Button variant="contained" disabled={false} type="submit" onClick={handleAddItemToCart}>
                            { true ? "Add to Cart": "Out of Stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
}














// import { FormControlLabel } from "@mui/material";
// import { ExpandMore, CheckBox } from "@mui/icons-material";
// import { Accordion, AccordionDetails, AccordionSummary, FormGroup } from "@mui/material";

// const ingredients = [
//     {
//         category: "Nuts & Seeds",
//         ingredients: ["Cashews"]
//     },
//     {
//         category: "Protein",
//         ingredients: ["Bacon Strips", "Pulses"]
//     },
//     {
//         category: "Bread",
//         ingredients: ["Hamburger buns"]
//     },
//     {
//         category: "Vegetable",
//         ingredients: ["Lettuce", "Tomato slices", "Pickles", "Onion slices"]
//     },
//     {
//         category: "Condiment",
//         ingredients: ["Ketchup"]
//     }
// ];

// export const MenuCard = () => {
//     return (
//         <Accordion>
//             <AccordionSummary expandIcon={<ExpandMore/>} aria-controls="panel1-content" id="panel1-header">
//                 <div className="lg:flex items-center justify-between">
//                     <div className="lg:flex items-center lg:gap-5">
//                         <img src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg" alt="" className="w-[7rem] h-[7rem] object-cover" />
//                     <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
//                         <p className="font-semibold text-xl">Burger</p>
//                         <p>₹ 499</p>
//                         <p>Nice Food</p>
//                     </div>
//                     </div>
//                 </div>
//             </AccordionSummary>
//             <AccordionDetails>
//                 <form action="">
//                     <div className="flex gap-5 flex-wrap">
//                     {
//                         ingredients.map((item, index)=> 
//                           <div key={index}>
//                             <p>{item.category}</p>
//                             <FormGroup>
//                                {
//                                   item.ingredients.map((ingredient, index)=> 
//                                     <FormControlLabel 
//                                       key={index}
//                                       control={<CheckBox defaultChecked />} 
//                                       label={ingredient} 
//                                     />
//                                   )  
//                                }
//                             </FormGroup>
//                           </div>
//                         )
//                     }
//                  </div>
//                 </form>
//             </AccordionDetails>
//         </Accordion>
//     );
// }
