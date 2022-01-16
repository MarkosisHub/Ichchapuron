import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PanelMenu } from "primereact/panelmenu";
import { Slider } from "primereact/slider";
import { Checkbox } from "primereact/checkbox";
import "./CategoryDetails.css";

const CategoryDetails = () => {
  const [rangeValues, setRangeValues] = useState(0);
  const items = [
    {
      label: "English Medium",
      items: [
        {
          label: "New",
          items: [
            {
              label: "Bookmark",
            },
            {
              label: "Video",
            },
          ],
        },
        {
          label: "Delete",
        },
        {
          label: "Export",
        },
      ],
    },
    {
      label: "Bangla Medium",
      items: [
        {
          label: "Left",
        },
        {
          label: "Right",
        },
        {
          label: "Center",
        },
        {
          label: "Justify",
        },
      ],
    },
    {
      label: "Edexcel",
      items: [
        {
          label: "New",
        },
        {
          label: "Delete",
        },
        {
          label: "Search",
          items: [
            {
              label: "Filter",
              items: [
                {
                  label: "Print",
                },
              ],
            },
            {
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Bangla Version",
      items: [
        {
          label: "Edit",
          items: [
            {
              label: "Save",
            },
            {
              label: "Delete",
            },
          ],
        },
        {
          label: "Archieve",
          items: [
            {
              label: "Remove",
            },
          ],
        },
      ],
    },
  ];

  const [cities, setCities] = useState([]);

  const onCityChange = (e) => {
    let selectedCities = [...cities];
    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
  };

  return (
    <section className="categoryDetailsSection">
      <div className="categoryDetailsWrapper container">
        <div className="categoryDetails">
          <div className="categoryContentLeft">
            <div className="categoryHeading">
              <img src="/icons/category_icon.png" alt="" />
              <h4>Categories</h4>
            </div>
            <div className="panelMenu">
              <PanelMenu model={items} />
            </div>
            <div className="categoryPriceRange">
              <p>Price Range</p>
              <Slider
                value={rangeValues}
                onChange={(e) => setRangeValues(e.value)}
                range
              />
            </div>
            <div className="categorySortingCheckbox">
              <p>Authors</p>
              <div className="singleCategorySortingCheckbox">
                <Checkbox
                  inputId="cb1"
                  value="New York"
                  onChange={onCityChange}
                  checked={cities.includes("New York")}
                ></Checkbox>
                <label htmlFor="cb1" className="p-checkbox-label">
                  New York
                </label>
              </div>
              <div className="singleCategorySortingCheckbox">
                <Checkbox
                  inputId="cb2"
                  value="San Francisco"
                  onChange={onCityChange}
                  checked={cities.includes("San Francisco")}
                ></Checkbox>
                <label htmlFor="cb2" className="p-checkbox-label">
                  San Francisco
                </label>
              </div>
              <div className="singleCategorySortingCheckbox">
                <Checkbox
                  inputId="cb3"
                  value="Los Angeles"
                  onChange={onCityChange}
                  checked={cities.includes("Los Angeles")}
                ></Checkbox>
                <label htmlFor="cb3" className="p-checkbox-label">
                  Los Angeles
                </label>
              </div>
            </div>
          </div>
          <div className="categoryContentRight">
            <div className="educationalBooksWrapper">
              <div className="educationalBooksTop">
                <div className="educationalBooksTopHeading">
                  <h3>Educational Books</h3>
                </div>
                <div className="educationalBooksTopBlock"></div>
              </div>
              <div className="educationalBooks">
                <Link to="/">Standard I</Link>
                <Link to="/">Standard II</Link>
                <Link to="/">Standard III</Link>
                <Link to="/">Standard IV</Link>
                <Link to="/">Standard V</Link>
                <Link to="/">Standard VI</Link>
                <Link to="/">Standard VII</Link>
                <Link to="/">Standard VIII</Link>
                <Link to="/">Standard IX</Link>
                <Link to="/">O Levels</Link>
                <Link to="/">A Levels</Link>
              </div>
            </div>
            <div className="storyBooksWrapper">
              <div className="storyBooksTop">
                <div className="storyBooksTopHeading">
                  <h3>Story Books</h3>
                </div>
                <div className="storyBooksTopBlock"></div>
              </div>
              <div className="storyBooks">
                <Link to="/">Children</Link>
                <Link to="/">Fantacy</Link>
                <Link to="/">Fiction</Link>
                <Link to="/">Non Fiction</Link>
                <Link to="/">Sci Fiction</Link>
                <Link to="/">Romance</Link>
                <Link to="/">Action</Link>
                <Link to="/">Thriller</Link>
                <Link to="/">Horhor</Link>
                <Link to="/">Comedy</Link>
                <Link to="/">Crime</Link>
                <Link to="/">Teen</Link>
              </div>
            </div>
            <div className="dictionaryWrapper">
              <div className="dictionaryTop">
                <div className="dictionaryTopHeading">
                  <h3>Dictionary</h3>
                </div>
                <div className="dictionaryTopBlock"></div>
              </div>
              <div className="dictionary">
                <Link to="/">Children</Link>
                <Link to="/">Fantacy</Link>
                <Link to="/">Fiction</Link>
                <Link to="/">Non Fiction</Link>
                <Link to="/">Sci Fiction</Link>
                <Link to="/">Romance</Link>
                <Link to="/">Action</Link>
                <Link to="/">Thriller</Link>
                <Link to="/">Horhor</Link>
                <Link to="/">Comedy</Link>
                <Link to="/">Crime</Link>
                <Link to="/">Teen</Link>
              </div>
            </div>
            <div className="handwritingBooksWrapper">
              <div className="handwritingBooksTop">
                <div className="handwritingBooksTopHeading">
                  <h3>Handwriting Books</h3>
                </div>
                <div className="handwritingBooksTopBlock"></div>
              </div>
              <div className="handwritingBooks">
                <Link to="/">Children</Link>
                <Link to="/">Fantacy</Link>
                <Link to="/">Fiction</Link>
                <Link to="/">Non Fiction</Link>
                <Link to="/">Sci Fiction</Link>
                <Link to="/">Romance</Link>
                <Link to="/">Action</Link>
                <Link to="/">Thriller</Link>
                <Link to="/">Horhor</Link>
                <Link to="/">Comedy</Link>
                <Link to="/">Crime</Link>
                <Link to="/">Teen</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetails;
