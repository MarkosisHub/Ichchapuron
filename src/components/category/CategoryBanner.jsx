import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CategoryBanner.css";

const CategoryBanner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const imageUrl = [
    { id: 1, url: "/images/book_1.png" },
    { id: 2, url: "/images/book_2.png" },
    { id: 3, url: "/images/book_3.png" },
  ];

  return (
    <section className="categoryBannerSection">
      <div className="categoryBannerWrapper container">
        <div className="categoryBannerDetails">
          <div className="categoryBannerContentLeft">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              rerum perspiciatis assumenda dolorum atque necessitatibus. Dolor
              cumque nesciunt nemo ipsa, laboriosam mollitia voluptas enim
              reprehenderit. Harum eligendi esse repudiandae accusantium.
            </p>
          </div>
          <div className="categoryBannerContentRight">
            <Slider {...settings}>
              {imageUrl.map((image) => (
                <div key={image.id}>
                  <img src={`${image.url}`} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
