import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../Slider/Website1.jpg";
import img2 from "../Slider/Website2.jpg";
// import img3 from "../Slider/Website3.jpg";
import img4 from "../Slider/Website4.jpg";
import img5 from "../Slider/website5.jpg";

import "./WebSlider.css";


const websites = [
{ name: "Winsome Bloom", url: "https://winsome-bloom.vercel.app/", img: img1 },
{ name: "HT London", url: "https://htlondon.vercel.app/", img: img2 },
{ name: "Essence", url: "https://essence-furniture.vercel.app/", img: img5 },
{ name: "Lavonne", url: "https://lavonne.vercel.app/", img: img3 },
{ name: "Sanaargold", url: "https://sanaargold.com/?srsltid=AfmBOop2tkX0r0WwOr5B5DEjliIdRBR2vFAYGbgr-7xIoNtzmARuGZQX", img: img4 },
];

const WebSlider = () => {

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
dots: true,
},
},

{
breakpoint: 768,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
dots: true,
},
},
],
};

return (

<div className="webslider-container">
<Slider {...settings}>
{websites.map((item, i) => (
<div className="slide-item" key={i}>
<a href={item.url} target="_blank" rel="noopener noreferrer">
<img className="slide-img" src={item.img} alt={item.name} />
<h4 className="slide-title">{item.name}</h4>
</a>
</div>
))}
</Slider>
</div>

);
};

export default WebSlider;
