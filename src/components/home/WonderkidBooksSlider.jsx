import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./WonderkidBooksSlider.css";

const WonderkidBooksSlider = () => {
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
    <section className="wonderkidBooksSliderSection">
      <div className="wonderkidBooksSliderWrapper container">
        <div className="wonderkidBooksSliderTop">
        <div className="wonderkidBooksSliderTopBlock"></div>
          <h3 className="wonderkidBooksSliderTopHeader">Books For Wonderkids</h3>
          <div className="wonderkidBooksSliderTopBlock"></div>
        </div>
        <div className="wonderkidBooksSliderDetails">
          <Slider {...settings}>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star-fill"></i>{" "}
                  <i className="pi pi-star"></i>
                </span>
              </div>
            </div>
            <div className="wonderkidBooksSliderContent">
              <img src="/images/book_2.png" alt="" />
              <div className="singleWonderkidBooksSliderContent">
                <h5 className="wonderkidBooksSliderName">book name</h5>
                <p className="wonderkidBooksSliderPrice">BDT 120.00</p>
                <span className="wonderkidBooksSliderReviews">
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

export default WonderkidBooksSlider;
