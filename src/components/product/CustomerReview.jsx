// import React, { useState } from "react";
import Slider from "react-slick";
import { Dialog } from "primereact/dialog";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CustomerReview.css";
import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

const CustomerReview = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const toast = useRef(null);
  const fileUploadRef = useRef(null);
  // const [position, setPosition] = useState("center");

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const onTemplateSelect = (e) => {
    let _totalSize = totalSize;
    e.files.forEach((file) => {
      _totalSize += file.size;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e) => {
    let _totalSize = 0;
    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    // if (position) {
    //   setPosition(position);
    // }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const dialogFuncMap = {
    displayModal: setDisplayModal,
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
      </div>
    );
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="p-d-flex p-ai-center p-flex-wrap">
        <div className="p-d-flex p-ai-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="p-d-flex p-dir-col p-text-left p-ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="p-px-3 p-py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger p-ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="p-d-flex p-ai-center p-dir-col">
        <i
          className="pi pi-image p-mt-3 p-p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="p-my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 2.34,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <section className="customerReviewSection">
      <div className="customerReviewWrapper">
        <div className="customerReviewDetails">
          <h3>Customer Reviews (5)</h3>
          <Slider {...settings}>
            <div className="singleCustomerReview">
              <div className="singleCustomerProfile">
                <img src="/images/review.png" alt="" />
                <div className="singleCustomerNameAndDate">
                  <h3 className="customerReviewName">John Doe</h3>
                  <p className="customerReviewDate">22 December, 2021</p>
                  <div className="customerNumOfReviews">
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                  </div>
                </div>
              </div>
              <div className="singleCustomerPeraAndBooks">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis maiores sequi nisi, vero aut voluptate a totam
                  harum dolorem suscipit eos quod magni beatae ullam, error
                  tempore doloribus iure.
                </p>
                <div className="singleCustomerBooks">
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                </div>
              </div>
            </div>
            <div className="singleCustomerReview">
              <div className="singleCustomerProfile">
                <img src="/images/review.png" alt="" />
                <div className="singleCustomerNameAndDate">
                  <h3 className="customerReviewName">John Doe</h3>
                  <p className="customerReviewDate">22 December, 2021</p>
                  <div className="customerNumOfReviews">
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                  </div>
                </div>
              </div>
              <div className="singleCustomerPeraAndBooks">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis maiores sequi nisi, vero aut voluptate a totam
                  harum dolorem suscipit eos quod magni beatae ullam, error
                  tempore doloribus iure.
                </p>
                <div className="singleCustomerBooks">
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                </div>
              </div>
            </div>
            <div className="singleCustomerReview">
              <div className="singleCustomerProfile">
                <img src="/images/review.png" alt="" />
                <div className="singleCustomerNameAndDate">
                  <h3 className="customerReviewName">John Doe</h3>
                  <p className="customerReviewDate">22 December, 2021</p>
                  <div className="customerNumOfReviews">
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                  </div>
                </div>
              </div>
              <div className="singleCustomerPeraAndBooks">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis maiores sequi nisi, vero aut voluptate a totam
                  harum dolorem suscipit eos quod magni beatae ullam, error
                  tempore doloribus iure.
                </p>
                <div className="singleCustomerBooks">
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                </div>
              </div>
            </div>
            <div className="singleCustomerReview">
              <div className="singleCustomerProfile">
                <img src="/images/review.png" alt="" />
                <div className="singleCustomerNameAndDate">
                  <h3 className="customerReviewName">John Doe</h3>
                  <p className="customerReviewDate">22 December, 2021</p>
                  <div className="customerNumOfReviews">
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                  </div>
                </div>
              </div>
              <div className="singleCustomerPeraAndBooks">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis maiores sequi nisi, vero aut voluptate a totam
                  harum dolorem suscipit eos quod magni beatae ullam, error
                  tempore doloribus iure.
                </p>
                <div className="singleCustomerBooks">
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                </div>
              </div>
            </div>
            <div className="singleCustomerReview">
              <div className="singleCustomerProfile">
                <img src="/images/review.png" alt="" />
                <div className="singleCustomerNameAndDate">
                  <h3 className="customerReviewName">John Doe</h3>
                  <p className="customerReviewDate">22 December, 2021</p>
                  <div className="customerNumOfReviews">
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                  </div>
                </div>
              </div>
              <div className="singleCustomerPeraAndBooks">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis maiores sequi nisi, vero aut voluptate a totam
                  harum dolorem suscipit eos quod magni beatae ullam, error
                  tempore doloribus iure.
                </p>
                <div className="singleCustomerBooks">
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                </div>
              </div>
            </div>
            <div className="singleCustomerReview">
              <div className="singleCustomerProfile">
                <img src="/images/review.png" alt="" />
                <div className="singleCustomerNameAndDate">
                  <h3 className="customerReviewName">John Doe</h3>
                  <p className="customerReviewDate">22 December, 2021</p>
                  <div className="customerNumOfReviews">
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                    <span className="pi pi-star-fill"></span>
                  </div>
                </div>
              </div>
              <div className="singleCustomerPeraAndBooks">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis maiores sequi nisi, vero aut voluptate a totam
                  harum dolorem suscipit eos quod magni beatae ullam, error
                  tempore doloribus iure.
                </p>
                <div className="singleCustomerBooks">
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                  <img src="/images/review_book.png" alt="" />
                </div>
              </div>
            </div>
          </Slider>
          <div className="reviewFormWrapper">
            <button
              className="addYoursBtn"
              onClick={() => onClick("displayModal")}
            >
              Add yours
            </button>
            <Dialog
              // header="Header"
              visible={displayModal}
              modal={false}
              style={{ width: "50vw" }}
              onHide={() => onHide("displayModal")}
            >
              <form className="reviewForm">
                {/* reviewStar */}
                <div className="reviewFormStars">
                  <span className="pi pi-star-fill"></span>
                  <span className="pi pi-star-fill"></span>
                  <span className="pi pi-star-fill"></span>
                  <span className="pi pi-star-fill"></span>
                  <span className="pi pi-star-fill"></span>
                </div>
                {/* textarea */}
                <textarea></textarea>
                {/* upload image */}
                <FileUpload
                  ref={fileUploadRef}
                  name="demo[]"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  multiple
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={onTemplateUpload}
                  onSelect={onTemplateSelect}
                  onError={onTemplateClear}
                  onClear={onTemplateClear}
                  headerTemplate={headerTemplate}
                  itemTemplate={itemTemplate}
                  emptyTemplate={emptyTemplate}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                />
                {/* submit */}
                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
