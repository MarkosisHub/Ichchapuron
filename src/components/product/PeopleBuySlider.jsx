import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./PeopleBuySlider.css";

const PeopleBuySlider = () => {
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
    <section clasName="peopleBuySliderSection">
      <div className="peopleBuySliderWrapper">
        <div className="peopleBuySliderTop">
          <h3 className="peopleBuySliderTopHeading">Best selling books</h3>
          <div className="peopleBuySliderTopBlock"></div>
        </div>
        <div className="peopleBuySliderDetails">
          <Slider {...settings}>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="peopleBuySliderContent">
              <img src="/images/book_1.png" alt="" />
              <div className="singlePeopleBuySliderContent">
                <h5 className="peopleBuySliderName">book name</h5>
                <p className="peopleBuySliderPrice">BDT 120.00</p>
                <span className="peopleBuySliderReviews">
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

export default PeopleBuySlider;
