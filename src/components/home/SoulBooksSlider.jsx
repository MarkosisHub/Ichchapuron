import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./SoulBooksSlider.css";

const SoulBooksSlider = () => {
  const settings = {
    className: "center",
    arrows: true,
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    rows: 2,
    slidesPerRow: 2,
    autoplaySpeed: 2000,
  };

  return (
    <div className="soulBooksSliderSection">
      <div className="soulBooksSliderWrapper container">
        <div className="soulBooksSliderTop">
        <div className="soulBooksSliderTopBlock"></div>
          <h3 className="soulBooksSliderTopHeader">Books For Your Soul</h3>
          <div className="soulBooksSliderTopBlock"></div>
        </div>
        <div className="soulBooksSliderDetails">
          <Slider {...settings}>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="soulBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleSoulBooksSliderContent">
                <h5 className="soulBooksSliderName">book name</h5>
                <p className="soulBooksSliderPrice">BDT 120.00</p>
                <span className="soulBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SoulBooksSlider;
