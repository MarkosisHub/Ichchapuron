import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./PopularAndStock.css";

const PopularAndStock = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  const imageUrl = [
    { id: 1, url: "/images/book_1.png" },
    { id: 2, url: "/images/book_2.png" },
    { id: 3, url: "/images/book_3.png" },
    { id: 4, url: "/images/book_1.png" },
    { id: 5, url: "/images/book_2.png" },
    { id: 6, url: "/images/book_3.png" },
  ];
  return (
    <section className="popularAndStockSection">
      <div className="popularAndStockWrapper container">
        <div className="popularAndStockDetails">
          <div className="newInStockContent">
            <h3>New In Stock</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores,
            </p>
            <Slider {...settings}>
              {imageUrl.map((image) => (
                <div key={image.id}>
                  <img src={`${image.url}`} alt="" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="popularContent">
            <h3>Popular in 2022</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores,
            </p>
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

export default PopularAndStock;
