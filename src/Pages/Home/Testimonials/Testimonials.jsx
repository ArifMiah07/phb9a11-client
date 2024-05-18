
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../Styles/Fonts/GoogleFonts.css'
import { useEffect, useState } from 'react';

const Testimonials = () => {
    
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data); 
            setReviews(data);
        
        })
        .catch(error => console.error('Error :', error));

    }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="relative bg-pink-100 flex flex-col items-center justify-center">
      <div className={`w-full flex items-center justify-center`}>
        <img className='w-full h-full' src="https://html.themewant.com/studykids/assets/images/banner/banner-bg-2.png" alt="" />
    </div>
      <div className="w-full max-w-4xl text-center p-12">
      <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center text-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span>Testimonials</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Parents Say About Us</h2>
        <p className="text-gray-600 mb-8">
          The success and happiness of our students are at the heart of everything we do. But do not just take our word.
        </p>
        <Slider {...settings}>
          {
            reviews.map((review, index) => (
                <div key={index} style={{boxShadow: '01px 2px 03px 04px rgb(0, 0, 0)'}} className="  bg-purple-600 text-white p-12 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <p className="text-sm">{review.title}</p>
                    <p className="mt-4">{review.message}</p>
                    <div className="mt-4">
                        {[...Array(review.rating)].map((star, i) => (
                            <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                        {[...Array(5 - review.rating)].map((star, i) => (
                            <span key={i} className="text-gray-400 text-lg">★</span>
                        ))}
                    </div>
                </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
