import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./BestSellingSlider.css";

const BestSellingSlider = () => {
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
    <section className="bestSellingSliderSection">
      <div className="bestSellingSliderWrapper container">
        <div className="bestSellingSliderTop">
          <h3 className="bestSellingSliderTopHeading">Best selling books</h3>
          <div className="bestSellingSliderTopBlock"></div>
        </div>
        <div className="bestSellingSliderDetails">
          <Slider {...settings}>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="bestSellingSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlebestSellingSliderContent">
                <h5 className="bestSellingSliderName">book name</h5>
                <p className="bestSellingSliderPrice">BDT 120.00</p>
                <span className="bestSellingSliderReviews">
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
    </section>
  );
};

export default BestSellingSlider;
