import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./SpecificationAndAuthor.css";

const SpecificationAndAuthor = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="specificationAndAuthorSection">
      <div className="specificationAndAuthorWrapper container">
        <div className="specificationAndAuthorDetails">
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          >
            <TabPanel header="Specifications">
              <table className="specificationTable">
                <tbody>
                  <tr>
                    <td className="leftItem">Author</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                  <tr>
                    <td className="leftItem">Publisher</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                  <tr>
                    <td className="leftItem">ISBN</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                  <tr>
                    <td className="leftItem">Editor</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                  <tr>
                    <td className="leftItem">Cover</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                  <tr>
                    <td className="leftItem">Language</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel header="Author">
              <div className="specificationAuthor">
                <div className="specificationAuthorContentLeft">
                  <img src="/images/author.png" alt="" />
                </div>
                <div className="specificationAuthorContentRight">
                  <h4>Mark Smith</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi ipsa fuga odit impedit, architecto modi itaque
                    nesciunt vel animi! Saepe ea asperiores nisi, adipisci non
                    distinctio velit laboriosam! Maxime numquam ab, error
                    assumenda voluptas quibusdam molestiae amet asperiores vel
                    placeat!
                  </p>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </section>
  );
};

export default SpecificationAndAuthor;
