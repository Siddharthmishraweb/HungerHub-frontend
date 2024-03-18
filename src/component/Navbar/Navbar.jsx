// // import React from "react";
// // import '@fontsource/poppins';
// // import {ShoppingBag, WorkOutline} from '@mui/icons-material';

// // export const Navbar = () => {
// //   return (
// //     <div>
// //       <div style={{fontFamily: 'Poppins', display: "flex", alignItems: "center", justifyContent: "space-between", margin:"1rem"}}>
// //         <div className="logo">
// //           <img
// //             src="https://lh3.googleusercontent.com/pw/AP1GczOFeIQfxfNuDc9K8bjQtKrwOawDcGNuEfhV5zPg2p4Fm1_MmRhTgwZL1KRFn7QtXmJaAA-o8DJx26BSZV2ioxaVcVTd7rrqBDzMncPVKVXMCyGIPVb6RCr4lN2ueP30FeP3Z7fSFzZPJgkxf4r-8C1SvbCk0eGxUNG3nQhNbmMF2-dlEnCBjIgnSgMhpLpf6nMU-bgbd4ab_jp6T2AXrr_D7yhSZAHlh75TIV610E9OpOZAlGNVAEYEVJwFdfZ76QrOkfJAh4tpIdM_mjyPiBtuoIi7SmuoGDXqcsyAehYrrxt8KP8OPolMo6YYenfVWWCUxXkwRPYozN8UpYCX1JZDznH9OoEX-5c-GguVpqMPitDT911XeorClSWnPTSsEDuv0v4SuUcVeNM_Tj-AZqu8wFP88_sOW-oF48LgagthcdsdKHLYSXP9rLM0V6CHOZLqBF4S0BBh2xPWzSFbSGjJSfO2Nmqoll23VsbATcFi_WHV0J7CVLUkKhCZg8Mzg1QX85JoSNLuk-rln-2Bn8Ee55i10MlYBQYDBWn6uykJAsg_GUPE6YC0RD7X8-tiFfrsIh_X58VcBZ2dgijzK66BKIpCpRgfbRptDo71jQhm3SrCkjE7u6geUTDUY33BcPQmaCiew0Dv_4PbcC9MsOqY6cPUWQO5hyhYAuK64AX4mXvyt16thf8ygCHCXoDGzoDW2RdBTQ5YJWoH0WIbwLzATBX9-2aRjkIG1oPZDFHwQv-C_HgRd2oX33louV4mVkCfhqxmIftqDlAeY8R2qfTOCnH-Rqp6ZaZCqhNBTsekyoG2Y7U3me3aAKoVtUyyVroy5iNquEVRQYuBGrhfghA-0wYX0-mvwdyRFAjsNah31IMpEnwB8WDEQIP4TgDAifogZ4nmlFWUdeXjh9bLiolYy6qBDx6OWrt0z3diu-867wwBoEGXfyN7DlHj7plFgu2oTu6eKnRCf2uhmlQnAGFMrLwnutQ6YJADnDjWV3PByHvTSP5JsKDldHHSDoti3APwdVu-kYVl-3vlZ7O2ntqqTQve06gNGNiZS4yTlEVk5gvomU2O_d5z1ikYKlQOKV3s1z1RrYdkkU5umvnkbmNYI4e59A=s500-no?authuser=0&quot"
// //             alt="hhh666h"
// //             style={{ width: "6rem", height: "6rem" }}
// //           />
// //         </div>
// //         <ul style={{fontFamily: 'Poppins', display: "flex", gap: "4rem"}}>
// //           <li style={{fontFamily: 'Poppins', fontWeight:"bold"}}>Find Food</li>
// //           <li style={{fontFamily: 'Poppins', fontWeight:"bold"}}>Tracking</li>
// //           <li style={{fontFamily: 'Poppins', fontWeight:"bold"}}>Find Restaurant</li>
// //           <li style={{fontFamily: 'Poppins', fontWeight:"bold"}}>Location</li>
// //         </ul>
// //         <ul style={{fontFamily: 'Poppins', display: "flex", gap: "4rem"}}>
// //           <li style={{fontFamily: 'Poppins', fontWeight:"bold"}}>
// //           <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
// //                         <WorkOutline style={{ color: 'black', padding: "4px" }} />
// //                     </div>
// //           </li>
// //           <li style={{fontFamily: 'Poppins', fontWeight:"bold"}}>Sign In</li>
// //           <li>
// //           <button style={{
// //             backgroundColor: "#41C485",
// //             padding: "6px 20px",
// //             borderRadius: "4px",
// //             fontWeight: "bold",
// //             fontSize: "14px",
// //             border: "none",
// //             boxShadow: "0px 4px 6px rgba(65, 196, 133, 0.5)",
// //             cursor: "pointer",
// //             transition: "box-shadow 0.3s ease",
// //             outline: "none",
// //             fontFamily: 'Poppins'
// //         }}>
// //             Sign Up
// //         </button>

// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { WorkOutline } from '@mui/icons-material';

// export const Navbar = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleHover = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           fontFamily: 'Poppins',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           margin: '1rem',
//         }}
//       >
//         <div className="logo">
//           <img
//             src="https://lh3.googleusercontent.com/pw/AP1GczOFeIQfxfNuDc9K8bjQtKrwOawDcGNuEfhV5zPg2p4Fm1_MmRhTgwZL1KRFn7QtXmJaAA-o8DJx26BSZV2ioxaVcVTd7rrqBDzMncPVKVXMCyGIPVb6RCr4lN2ueP30FeP3Z7fSFzZPJgkxf4r-8C1SvbCk0eGxUNG3nQhNbmMF2-dlEnCBjIgnSgMhpLpf6nMU-bgbd4ab_jp6T2AXrr_D7yhSZAHlh75TIV610E9OpOZAlGNVAEYEVJwFdfZ76QrOkfJAh4tpIdM_mjyPiBtuoIi7SmuoGDXqcsyAehYrrxt8KP8OPolMo6YYenfVWWCUxXkwRPYozN8UpYCX1JZDznH9OoEX-5c-GguVpqMPitDT911XeorClSWnPTSsEDuv0v4SuUcVeNM_Tj-AZqu8wFP88_sOW-oF48LgagthcdsdKHLYSXP9rLM0V6CHOZLqBF4S0BBh2xPWzSFbSGjJSfO2Nmqoll23VsbATcFi_WHV0J7CVLUkKhCZg8Mzg1QX85JoSNLuk-rln-2Bn8Ee55i10MlYBQYDBWn6uykJAsg_GUPE6YC0RD7X8-tiFfrsIh_X58VcBZ2dgijzK66BKIpCpRgfbRptDo71jQhm3SrCkjE7u6geUTDUY33BcPQmaCiew0Dv_4PbcC9MsOqY6cPUWQO5hyhYAuK64AX4mXvyt16thf8ygCHCXoDGzoDW2RdBTQ5YJWoH0WIbwLzATBX9-2aRjkIG1oPZDFHwQv-C_HgRd2oX33louV4mVkCfhqxmIftqDlAeY8R2qfTOCnH-Rqp6ZaZCqhNBTsekyoG2Y7U3me3aAKoVtUyyVroy5iNquEVRQYuBGrhfghA-0wYX0-mvwdyRFAjsNah31IMpEnwB8WDEQIP4TgDAifogZ4nmlFWUdeXjh9bLiolYy6qBDx6OWrt0z3diu-867wwBoEGXfyN7DlHj7plFgu2oTu6eKnRCf2uhmlQnAGFMrLwnutQ6YJADnDjWV3PByHvTSP5JsKDldHHSDoti3APwdVu-kYVl-3vlZ7O2ntqqTQve06gNGNiZS4yTlEVk5gvomU2O_d5z1ikYKlQOKV3s1z1RrYdkkU5umvnkbmNYI4e59A=s500-no?authuser=0&quot"
//             alt="hhh666h"
//             style={{ width: '6rem', height: '6rem' }}
//           />
//         </div>
//         <ul
//           style={{
//             fontFamily: 'Poppins',
//             display: 'flex',
//             gap: '4rem',
//             listStyleType: 'none',
//           }}
//         >
//           {['Find Food', 'Tracking', 'Find Restaurant', 'Location'].map(
//             (item, index) => (
//               <li
//                 key={index}
//                 style={{
//                   fontFamily: 'Poppins',
//                   fontWeight: 'bold',
//                   position: 'relative',
//                   cursor: 'pointer',
//                 }}
//                 onMouseEnter={() => handleHover(index)}
//                 onMouseLeave={handleLeave}
//               >
//                 {item}
//                 {hoveredIndex === index && (
//                   <div
//                     style={{
//                       position: 'absolute',
//                       bottom: '-5px',
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: '50%',
//                       height: '2px',
//                       backgroundColor: '#E2293F',
//                       borderRadius: '2px',
//                       animation: 'expandLine 0.3s forwards',
//                     }}
//                   ></div>
//                 )}
//               </li>
//             )
//           )}
//         </ul>
//         <ul
//           style={{
//             fontFamily: 'Poppins',
//             display: 'flex',
//             gap: '4rem',
//             listStyleType: 'none',
//           }}
//         >
//           <li style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
//             <div
//               style={{
//                 backgroundColor: 'white',
//                 padding: '5px',
//                 borderRadius: '5px',
//               }}
//             >
//               <WorkOutline style={{ color: 'black', padding: '4px' }} />
//             </div>
//           </li>
//           <li style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
//             Sign In
//           </li>
//           <li>
//             <button
//               style={{
//                 backgroundColor: '#41C485',
//                 padding: '6px 20px',
//                 borderRadius: '4px',
//                 fontWeight: 'bold',
//                 fontSize: '14px',
//                 border: 'none',
//                 boxShadow: '0px 4px 6px rgba(65, 196, 133, 0.5)',
//                 cursor: 'pointer',
//                 transition: 'box-shadow 0.3s ease',
//                 outline: 'none',
//                 fontFamily: 'Poppins',
//               }}
//             >
//               Sign Up
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// import React, { useState } from 'react';
// import { WorkOutline } from '@mui/icons-material';

// export const Navbar = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleHover = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <div>
//       <style>
//         {`
//           @keyframes expandLine {
//             0% {
//               width: 0%;
//               left: 50%;
//             }
//             100% {
//               width: 100%;
//               left: 0;
//             }
//           }
//         `}
//       </style>
//       <div
//         style={{
//           fontFamily: 'Poppins',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           margin: '1rem',
//         }}
//       >
//         <div className="logo">
//           <img
//             src="https://lh3.googleusercontent.com/pw/AP1GczOFeIQfxfNuDc9K8bjQtKrwOawDcGNuEfhV5zPg2p4Fm1_MmRhTgwZL1KRFn7QtXmJaAA-o8DJx26BSZV2ioxaVcVTd7rrqBDzMncPVKVXMCyGIPVb6RCr4lN2ueP30FeP3Z7fSFzZPJgkxf4r-8C1SvbCk0eGxUNG3nQhNbmMF2-dlEnCBjIgnSgMhpLpf6nMU-bgbd4ab_jp6T2AXrr_D7yhSZAHlh75TIV610E9OpOZAlGNVAEYEVJwFdfZ76QrOkfJAh4tpIdM_mjyPiBtuoIi7SmuoGDXqcsyAehYrrxt8KP8OPolMo6YYenfVWWCUxXkwRPYozN8UpYCX1JZDznH9OoEX-5c-GguVpqMPitDT911XeorClSWnPTSsEDuv0v4SuUcVeNM_Tj-AZqu8wFP88_sOW-oF48LgagthcdsdKHLYSXP9rLM0V6CHOZLqBF4S0BBh2xPWzSFbSGjJSfO2Nmqoll23VsbATcFi_WHV0J7CVLUkKhCZg8Mzg1QX85JoSNLuk-rln-2Bn8Ee55i10MlYBQYDBWn6uykJAsg_GUPE6YC0RD7X8-tiFfrsIh_X58VcBZ2dgijzK66BKIpCpRgfbRptDo71jQhm3SrCkjE7u6geUTDUY33BcPQmaCiew0Dv_4PbcC9MsOqY6cPUWQO5hyhYAuK64AX4mXvyt16thf8ygCHCXoDGzoDW2RdBTQ5YJWoH0WIbwLzATBX9-2aRjkIG1oPZDFHwQv-C_HgRd2oX33louV4mVkCfhqxmIftqDlAeY8R2qfTOCnH-Rqp6ZaZCqhNBTsekyoG2Y7U3me3aAKoVtUyyVroy5iNquEVRQYuBGrhfghA-0wYX0-mvwdyRFAjsNah31IMpEnwB8WDEQIP4TgDAifogZ4nmlFWUdeXjh9bLiolYy6qBDx6OWrt0z3diu-867wwBoEGXfyN7DlHj7plFgu2oTu6eKnRCf2uhmlQnAGFMrLwnutQ6YJADnDjWV3PByHvTSP5JsKDldHHSDoti3APwdVu-kYVl-3vlZ7O2ntqqTQve06gNGNiZS4yTlEVk5gvomU2O_d5z1ikYKlQOKV3s1z1RrYdkkU5umvnkbmNYI4e59A=s500-no?authuser=0&quot"
//             alt="hhh666h"
//             style={{ width: '6rem', height: '6rem' }}
//           />
//         </div>
//         <ul
//           style={{
//             fontFamily: 'Poppins',
//             display: 'flex',
//             gap: '4rem',
//             listStyleType: 'none',
//           }}
//         >
//           {['Find Food', 'Tracking', 'Find Restaurant', 'Location'].map(
//             (item, index) => (
//               <li
//                 key={index}
//                 style={{
//                   fontFamily: 'Poppins',
//                   fontWeight: 'bold',
//                   position: 'relative',
//                   cursor: 'pointer',
//                   overflow: 'hidden',
//                 }}
//                 onMouseEnter={() => handleHover(index)}
//                 onMouseLeave={handleLeave}
//               >
//                 {item}
//                 {hoveredIndex === index && (
//                   <div
//                     className="line"
//                     style={{
//                       position: 'absolute',
//                       bottom: '-1px',
//                       left: '50%',
//                       width: '0%',
//                       height: '2px',
//                       backgroundColor: '#E2293F',
//                       borderRadius: '2px',
//                       animation: 'expandLine 0.5s forwards',
//                       transform: 'translateX(-50%)',
//                     }}
//                   ></div>
//                 )}
//               </li>
//             )
//           )}
//         </ul>
//         <ul
//           style={{
//             fontFamily: 'Poppins',
//             display: 'flex',
//             gap: '4rem',
//             listStyleType: 'none',
//           }}
//         >
//           <li style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
//             <div
//               style={{
//                 backgroundColor: 'white',
//                 padding: '5px',
//                 borderRadius: '5px',
//               }}
//             >
//               <WorkOutline style={{ color: 'black', padding: '4px' }} />
//             </div>
//           </li>
//           <li style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
//             Sign In
//           </li>
//           <li>
//             <button
//               style={{
//                 backgroundColor: '#41C485',
//                 padding: '6px 20px',
//                 borderRadius: '4px',
//                 fontWeight: 'bold',
//                 fontSize: '14px',
//                 border: 'none',
//                 boxShadow: '0px 4px 6px rgba(65, 196, 133, 0.5)',
//                 cursor: 'pointer',
//                 transition: 'box-shadow 0.3s ease',
//                 outline: 'none',
//                 fontFamily: 'Poppins',
//               }}
//             >
//               Sign Up
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { WorkOutline, ShoppingCart, Search, AccountCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <style>
        {`
          @keyframes expandLine {
            0% {
              width: 0%;
              left: 50%;
            }
            50% {
              left: 0;
            }
            100% {
              width: 200%;
              left: 0;
            }
          }
          .cart-icon {
            position: relative;
          }
          .cart-circle {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: red;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 14px;
            font-weight: bold;
          }
        `}
      </style>
      <div
        style={{
          fontFamily: "Poppins",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        <div className="logo">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczOFeIQfxfNuDc9K8bjQtKrwOawDcGNuEfhV5zPg2p4Fm1_MmRhTgwZL1KRFn7QtXmJaAA-o8DJx26BSZV2ioxaVcVTd7rrqBDzMncPVKVXMCyGIPVb6RCr4lN2ueP30FeP3Z7fSFzZPJgkxf4r-8C1SvbCk0eGxUNG3nQhNbmMF2-dlEnCBjIgnSgMhpLpf6nMU-bgbd4ab_jp6T2AXrr_D7yhSZAHlh75TIV610E9OpOZAlGNVAEYEVJwFdfZ76QrOkfJAh4tpIdM_mjyPiBtuoIi7SmuoGDXqcsyAehYrrxt8KP8OPolMo6YYenfVWWCUxXkwRPYozN8UpYCX1JZDznH9OoEX-5c-GguVpqMPitDT911XeorClSWnPTSsEDuv0v4SuUcVeNM_Tj-AZqu8wFP88_sOW-oF48LgagthcdsdKHLYSXP9rLM0V6CHOZLqBF4S0BBh2xPWzSFbSGjJSfO2Nmqoll23VsbATcFi_WHV0J7CVLUkKhCZg8Mzg1QX85JoSNLuk-rln-2Bn8Ee55i10MlYBQYDBWn6uykJAsg_GUPE6YC0RD7X8-tiFfrsIh_X58VcBZ2dgijzK66BKIpCpRgfbRptDo71jQhm3SrCkjE7u6geUTDUY33BcPQmaCiew0Dv_4PbcC9MsOqY6cPUWQO5hyhYAuK64AX4mXvyt16thf8ygCHCXoDGzoDW2RdBTQ5YJWoH0WIbwLzATBX9-2aRjkIG1oPZDFHwQv-C_HgRd2oX33louV4mVkCfhqxmIftqDlAeY8R2qfTOCnH-Rqp6ZaZCqhNBTsekyoG2Y7U3me3aAKoVtUyyVroy5iNquEVRQYuBGrhfghA-0wYX0-mvwdyRFAjsNah31IMpEnwB8WDEQIP4TgDAifogZ4nmlFWUdeXjh9bLiolYy6qBDx6OWrt0z3diu-867wwBoEGXfyN7DlHj7plFgu2oTu6eKnRCf2uhmlQnAGFMrLwnutQ6YJADnDjWV3PByHvTSP5JsKDldHHSDoti3APwdVu-kYVl-3vlZ7O2ntqqTQve06gNGNiZS4yTlEVk5gvomU2O_d5z1ikYKlQOKV3s1z1RrYdkkU5umvnkbmNYI4e59A=s500-no?authuser=0&quot"
            alt="hhh666h"
            style={{ width: "6rem", height: "6rem" }}
          />
        </div>
        <ul
          style={{
            fontFamily: "Poppins",
            display: "flex",
            gap: "4rem",
            listStyleType: "none",
          }}
        >
          {["Find Food", "Tracking", "Find Restaurant", "Location"].map(
            (item, index) => (
              <li
                key={index}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  position: "relative",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                {item}
                {hoveredIndex === index && (
                  <div
                    className="line"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      width: "0%",
                      height: "4px",
                      marginTop: "6px",
                      backgroundColor: "#E2293F",
                      borderRadius: "2px",
                      animation: "expandLine 0.8s forwards",
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                )}
              </li>
            )
          )}
        </ul>
        <div>
            <Search />
        </div>
        <ul
          style={{
            fontFamily: "Poppins",
            display: "flex",
            gap: "4rem",
            listStyleType: "none",
          }}
        >
          <li style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
            {/* <div
              style={{
                backgroundColor: 'white',
                padding: '5px',
                borderRadius: '5px',
              }}
            >
              <WorkOutline style={{ color: 'black', padding: '4px' }} />
            </div> */}
            <div
              className="cart-icon"
              style={{
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <div className="cart-circle">{2}</div>
              <ShoppingCart style={{ color: "black" }} />
            </div>
          </li>
          <li>
            <AccountCircle />
          </li>
          <li style={{ fontFamily: "Poppins", fontWeight: "bold" }}>Sign In</li>
          <li>
            <button
              style={{
                backgroundColor: "#41C485",
                padding: "6px 20px",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "14px",
                border: "none",
                boxShadow: "0px 4px 6px rgba(65, 196, 133, 0.5)",
                cursor: "pointer",
                transition: "box-shadow 0.3s ease",
                outline: "none",
                fontFamily: "Poppins",
              }}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
