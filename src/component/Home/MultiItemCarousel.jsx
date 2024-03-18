// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import { topMeal } from './topMeal';
// import { CarouselItem } from './CarouselItem';

// export const MultiItemCarousel = () => {
//     return (
//         <div>
//             <Slider>
//                 {
//                     topMeal.map((item) => <CarouselItem image={item.title} title={item.title}/>)
//                 }
//             </Slider>
//         </div>
//     );
// }
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeal } from './topMeal';
import { CarouselItem } from './CarouselItem';

export const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed : 2000
      };
    return (
        <div>
            <Slider {...settings}>
                {
                    topMeal.map((item, index) => (
                        <CarouselItem key={index} image={item.image} title={item.title} />
                    ))
                }
            </Slider>
        </div>
    );
}
