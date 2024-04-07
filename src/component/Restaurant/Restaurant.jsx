import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton, Box, Rating } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Label } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

export const Restaurant = () => {
  return (
    <Card className=" w-[18rem]">
      <div className={`${true ? 'cursor-pointer': "cursor-not-allowed"} relative`}>
        <img src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg" alt="" />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error"}
          label={true?"open":"closed"}
        >

        </Chip>
      
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Indian Fast Food</p>
          <p className="text-gray-500 text-sm">
            Craving it all? Dive into our global fla...
          </p>
        </div>
        <div>
          <IconButton>
            {true?<Favorite /> : <FavoriteBorder />}
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

// import { useState } from "react";
// export const Restaurant = () => {
//   const [showHeart, setShowHeart] = useState(false);

//   const handleClick = () => {
//     setShowHeart(true);
//   };

//   return (
//     <Card className="m-7 w-[18rem] relative">
//       {showHeart && (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-heart">
//           <Favorite style={{ fontSize: 64, color: 'red' }} />
//         </div>
//       )}
//       <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={handleClick}>
//         <img src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg" alt="" />
//         <Chip
//           size="small"
//           className="absolute top-2 left-2"
//           color={true ? 'success' : 'error'}
//           label={true ? 'open' : 'closed'}
//         ></Chip>
//       </div>
//       <div className="p-4 textPart lg:flex w-full justify-between">
//         <div className="space-y-1">
//           <p className="font-semibold text-lg">Indian Fast Food</p>
//           <p className="text-gray-500 text-sm">Craving it all? Dive into our global fla...</p>
//         </div>
//         <div>
//           <IconButton onClick={handleClick}>
//             {true ? <Favorite /> : <FavoriteBorder />}
//           </IconButton>
//         </div>
//         <body>
          

//         <main></main>
//     <div className="mainDiv">
//       <svg width="150" height="150" viewBox="0 0 150 150">
//         <g transform="translate(100 100)">
//           <path
//             transform="translate(-75 -75)"
//             stroke="white"
//             stroke-width="10"
//             fill="none"
//             d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"
//           ></path>
//         </g>
//       </svg>
//     </div>
//     </body>

//       </div>
//     </Card>
//   );
// };