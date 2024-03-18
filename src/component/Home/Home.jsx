// import React from "react";
// import Paneer from "../../assets/images/Paneer.png";

// export const Home = () => {
//   return (
//     <div
//       style={{
//         marginLeft: "2rem",
//         marginTop: "3rem",
//         justifyContent: "space-between",
//       }}
//     >
//       <section
//         className="banner -z-50 relative flex flex-col justify-center items-center"
//         style={{ display: "flex", justifyContent: "space-between" }}
//       >
//         <div className="text-center w-[50vw] z-10">
//           <p style={{ color: "#C2C2C2" }}>🤤 EASY WAY TO ORDER YOUR FOOD</p>
//           <h1
//             style={{
//               marginTop: "2rem",
//               fontSize: "4rem",
//               fontWeight: "bolder",
//               fontFamily: "Poppins",
//             }}
//           >
//             Order Tasty &
//           </h1>
//           <h1
//             style={{
//               marginTop: "0rem",
//               fontSize: "4rem",
//               fontWeight: "bolder",
//               fontFamily: "Poppins",
//             }}
//           >
//             Fresh Food
//           </h1>
//           <h1
//             style={{
//               marginTop: "0rem",
//               fontSize: "4rem",
//               fontWeight: "bolder",
//               fontFamily: "Poppins",
//               color: "#E0001E",
//             }}
//           >
//             anytime!
//           </h1>
//           <p style={{ color: "#C2C2C2" }}>
//             Just Confirm your order and enjoy our
//           </p>
//           <p style={{ color: "#C2C2C2" }}>delicious fastest delivery.</p>
//           <div
//             style={{
//               marginTop: "2rem",
//               display: "flex",
//               alignItems: "center",
//               width: "22vw",
//               justifyContent: "space-between",
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: "#E2293F",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: "3px",
//                 width: "8rem",
//                 padding: "12px 20px",
//                 borderRadius: "22px",
//                 boxShadow: "0px 0px 10px 0px rgba(226,41,63,0.75)",
//               }}
//             >
//               <button
//                 style={{
//                   fontFamily: "Poppins",
//                   fontWeight: "bolder",
//                   boxShadow: "0px 2px 5px 0px rgba(226,41,63,1)",
//                 }}
//               >
//                 Order Now
//               </button>
//             </div>
//             <div
//               style={{
//                 color: "#FAB804",
//                 textDecorationColor: "#FAB804",
//                 textDecoration: "underline",
//               }}
//             >
//               <p
//                 style={{
//                   marginTop: "5px",
//                   color: "#FAB804",
//                   cursor: "pointer",
//                 }}
//               >
//                 See Menu
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <img src={Paneer} alt="" style={{ width: "44rem" }} />
//         </div>
//       </section>
//     </div>
//   );
// };


import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Paneer from "../../assets/images/Paneer.png";
import { MultiItemCarousel } from "./MultiItemCarousel";

const sectionStyle = {
  padding: '2.5rem',
  '@media (min-width: 768px)': {
    padding: '2.5rem 5rem',
  }
};

const paragraphStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#9CA3AF',
  paddingTop: '0.75rem',
  paddingBottom: '2.5rem',
  fontFamily: "Poppins"
};

export const Home = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      spacing={2}
      style={{ paddingLeft: "2rem", marginTop: "3rem" }}
    >
      <Grid item xs={12} md={6} >
        <div className="text-center">
          <Typography variant="body1" style={{ color: "#C2C2C2" }}>
            🤤 EASY WAY TO ORDER YOUR FOOD
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "2rem",
              fontWeight: "bolder",
              fontFamily: "Poppins",
            }}
          >
            Order Tasty &
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "0rem",
              fontWeight: "bolder",
              fontFamily: "Poppins",
            }}
          >
            Fresh Food
          </Typography>
          <Typography
            variant="h1"
            style={{
              marginTop: "0rem",
              fontWeight: "bolder",
              fontFamily: "Poppins",
              color: "#E0001E",
            }}
          >
            anytime!
          </Typography>
          <Typography variant="body1" style={{ color: "#C2C2C2" }}>
            Just Confirm your order and enjoy our delicious fastest delivery.
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: "2rem", width: "22vw" }}
          >
            <Grid item>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#E2293F",
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: "bolder",
                  boxShadow: "0px 2px 5px 0px rgba(226,41,63,1)",
                  padding: "12px 23px",
                  borderRadius: "19px"
                }}
              >
                Order Now
              </Button>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: "#FAB804",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                See Menu
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Paneer} alt="Paneer" style={{ width: "100%" }} />
      </Grid>
      <Grid>
        {/* <section className="p-10 lg:py-10 lg:px-20">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10"></p>
          <MultiItemCarousel />
        </section> */}

        <section style={sectionStyle}>
          <p style={paragraphStyle}>Top Meals</p>
          <MultiItemCarousel />
        </section>
      </Grid>
    </Grid>
  );
};

