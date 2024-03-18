// import React from "react";

// export const CarouselItem = (image, title) => {
//     return (
//         <div className="flex flex-col justify-center items-center">
//             <img className="w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem]
//              rounded-full object-cover object-center" src={image} alt="" />
//             <span className="py-5 font-semibold text-xl text-gray-400">{title}</span>
//         </div>
//     );
// }

import React from "react";

export const CarouselItem = ({ image, title }) => {
    return (
        // <div className="flex flex-col justify-center items-center">
        //     <img className="w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full object-cover object-center" src={image} alt="" />
        //     <span className="py-5 font-semibold text-xl text-gray-400">{title}</span>
        // </div>
        // <div className="flex flex-col justify-center items-center">
        //     <div style={{ width: '13rem', height: '13rem', maxWidth: '100%', maxHeight: '100%', overflow: 'hidden', borderRadius: '50%' }}>
        //         <img style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} src={image} alt="" />
        //     </div>
        //     {/* <span className="py-5 font-semibold text-xl text-gray-400 text-center">{title}</span> */}
        //     <span style={{ paddingTop: '5rem', fontSize: '1.6rem', color: '#ffff', textAlign: 'center' }}>{title}</span>

        // </div>
        <div className="flex flex-col justify-center items-center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>
            <div style={{ width: '13rem', height: '13rem', maxWidth: '100%', maxHeight: '100%', overflow: 'hidden', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} src={image} alt="" />
            </div>
            <span style={{ fontFamily: "Poppins", paddingTop: '1rem', fontSize: '1.6rem', color: '#ffff', textAlign: 'center' }}>{title}</span>
        </div>
    );
}
