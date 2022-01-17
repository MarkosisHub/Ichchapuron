import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./JustForYouSlider.css";

const JustForYouSlider = () => {
  const settings = {
    className: "center",
    arrows: false,
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    rows: 1,
    slidesPerRow: 3,
    autoplaySpeed: 2000,
  };

  return (
    <section clasName="justForYouSliderSection">
      <div className="justForYouSliderWrapper">
        <div className="justForYouSliderTop">
          <h3 className="justForYouSliderTopHeading">Best selling books</h3>
          <div className="justForYouSliderTopBlock"></div>
        </div>
        <div className="justForYouSliderDetails">
          <Slider {...settings}>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="justForYouSliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singleJustForYouSliderContent">
                <h5 className="justForYouSliderName">book name</h5>
                <p className="justForYouSliderPrice">BDT 120.00</p>
                <span className="justForYouSliderReviews">
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

export default JustForYouSlider;
