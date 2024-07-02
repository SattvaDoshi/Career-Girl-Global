import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCard = () => {
  
    const carouselItems = [
        { id: 1, image: 'https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg', title: 'Slide 1' },
        { id: 2, image: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp', title: 'Slide 2' },
        { id: 3, image: 'https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2023/05/how-to-start-a-blog.png', title: 'Slide 3' },
      ];

  return (
    <section className="mb-8">
        <Carousel infiniteLoop autoPlay interval={3000} showThumbs={false}>
          {carouselItems.map((item) => (
            <div key={item.id} className='md:h-[70vh]'>
            <img src={`${item.image}`} alt={item.title} className="w-full h-full object-cover" />
              <p className="legend">{item.title}</p>
            </div>
          ))}
        </Carousel>
      </section>
  );
};

export default CarouselCard;