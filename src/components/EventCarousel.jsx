import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Styles } from "./styles/EventCarousel";

const EventCarousel = ({ images }) => {
  const onChange = (index) => {
    console.log(`Carousel slide changed to index ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Clicked on item at index ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Clicked on thumbnail at index ${index}`);
  };

  const imgLinks = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600093112291-7b553e3fcb82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1682092645573-edbd43c0dff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600093112291-7b553e3fcb82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Image 1",
    },
  ];

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showThumbs={true}
      showStatus={false}
      interval={3000}
      infiniteLoop={true}
      showIndicators={false}
    >
      {images?.map((img) => (
        <div key={img.id}>
          <img
            src={`${process.env.REACT_APP_API_URL}/${img.image}`}
            alt={img.alt}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default EventCarousel;
