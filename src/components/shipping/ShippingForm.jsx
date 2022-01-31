import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./ShippingForm.css";

const ShippingForm = () => {
  return (
    <section className="shippingFormSection">
      <div className="shippingFormWrapper container">
        <form className="shippingFormDetails">
          <Accordion
            className="accordion-custom"
            activeIndex={[0, 1, 2]}
            multiple={true}
          >
            <AccordionTab
              header={
                <React.Fragment>
                  <h4>Personal Information</h4>
                </React.Fragment>
              }
            >
              <div className="singleGrid">
                <input type="text" placeholder="Name" />
              </div>
              <div className="singleGrid">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="singleGrid">
                <input type="text" placeholder="Mobile" />
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <React.Fragment>
                  <h4>Shipping</h4>
                </React.Fragment>
              }
            >
              <div className="singleGrid">
                <input type="text" placeholder="House/Apt./Local" />
              </div>
              <div className="doubleGrid">
                <input type="text" placeholder="Street" />
                <input type="text" placeholder="Block" />
              </div>
              <div className="singleGrid">
                <select name="" id="" placeholder="State">
                  <option>State</option>
                  <option value="">State1</option>
                  <option value="">State2</option>
                  <option value="">State3</option>
                  <option value="">State4</option>
                </select>
              </div>
              <div className="singleGrid">
                <select name="" id="" placeholder="Country">
                  <option>Country</option>
                  <option value="">Country1</option>
                  <option value="">Country2</option>
                  <option value="">Country3</option>
                  <option value="">Country4</option>
                </select>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <React.Fragment>
                  <h4>Payment</h4>
                </React.Fragment>
              }
            ></AccordionTab>
          </Accordion>
        </form>
      </div>
    </section>
  );
};

export default ShippingForm;
