import React from "react";
import { MegaMenu } from "primereact/megamenu";
import "./Navbar.css";

const Navbar = () => {
  const items = [
    {
      label: "Categories",
      items: [
        [
          {
            label: "English Medium",
            items: [
              { label: "School Books" },
              { label: "Edexcel" },
              { label: "Cambridge" },
              { label: "Past Papers" },
              { label: "History Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Bangla Medium",
            items: [
              { label: "School Books" },
              { label: "SSC" },
              { label: "HSC" },
              { label: "Model Papers" },
              { label: "Story Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Stationaries",
            items: [
              { label: "Pens & Pencils" },
              { label: "Notebooks" },
              { label: "Color Boxes" },
              { label: "Arts & Crafts" },
              { label: "Blades Books" },
            ],
          },
          
        ],
        [
          {
            label: "Office Supplies",
            items: [
              { label: "Note Books" },
              { label: "Pens & Pencils" },
              { label: "Desk Organizer" },
            ],
          },
        ],
        [
          {
            label: "Printing Materials",
            items: [
              { label: "Papers" },
              { label: "Printeng Inks" },
              { label: "Paper Clips" },
              { label: "Files & Folders" },
            ],
          },
        ],
      ],
    },
    {
      label: "Age Group",
      items: [
        [
          {
            label: "English Medium",
            items: [
              { label: "School Books" },
              { label: "Edexcel" },
              { label: "Cambridge" },
              { label: "Past Papers" },
              { label: "History Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Bangla Medium",
            items: [
              { label: "School Books" },
              { label: "SSC" },
              { label: "HSC" },
              { label: "Model Papers" },
              { label: "Story Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Stationaries",
            items: [
              { label: "Pens & Pencils" },
              { label: "Notebooks" },
              { label: "Color Boxes" },
              { label: "Arts & Crafts" },
              { label: "Blades Books" },
            ],
          },
          
        ],
        [
          {
            label: "Office Supplies",
            items: [
              { label: "Note Books" },
              { label: "Pens & Pencils" },
              { label: "Desk Organizer" },
            ],
          },
        ],
        [
          {
            label: "Printing Materials",
            items: [
              { label: "Papers" },
              { label: "Printeng Inks" },
              { label: "Paper Clips" },
              { label: "Files & Folders" },
            ],
          },
        ],
      ],
    },
    {
      label: "Popular Authors",
      items: [
        [
          {
            label: "English Medium",
            items: [
              { label: "School Books" },
              { label: "Edexcel" },
              { label: "Cambridge" },
              { label: "Past Papers" },
              { label: "History Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Bangla Medium",
            items: [
              { label: "School Books" },
              { label: "SSC" },
              { label: "HSC" },
              { label: "Model Papers" },
              { label: "Story Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Stationaries",
            items: [
              { label: "Pens & Pencils" },
              { label: "Notebooks" },
              { label: "Color Boxes" },
              { label: "Arts & Crafts" },
              { label: "Blades Books" },
            ],
          },
          
        ],
        [
          {
            label: "Office Supplies",
            items: [
              { label: "Note Books" },
              { label: "Pens & Pencils" },
              { label: "Desk Organizer" },
            ],
          },
        ],
        [
          {
            label: "Printing Materials",
            items: [
              { label: "Papers" },
              { label: "Printeng Inks" },
              { label: "Paper Clips" },
              { label: "Files & Folders" },
            ],
          },
        ],
      ],
    },
    {
      label: "Popular Collection",
      items: [
        [
          {
            label: "English Medium",
            items: [
              { label: "School Books" },
              { label: "Edexcel" },
              { label: "Cambridge" },
              { label: "Past Papers" },
              { label: "History Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Bangla Medium",
            items: [
              { label: "School Books" },
              { label: "SSC" },
              { label: "HSC" },
              { label: "Model Papers" },
              { label: "Story Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Stationaries",
            items: [
              { label: "Pens & Pencils" },
              { label: "Notebooks" },
              { label: "Color Boxes" },
              { label: "Arts & Crafts" },
              { label: "Blades Books" },
            ],
          },
          
        ],
        [
          {
            label: "Office Supplies",
            items: [
              { label: "Note Books" },
              { label: "Pens & Pencils" },
              { label: "Desk Organizer" },
            ],
          },
        ],
        [
          {
            label: "Printing Materials",
            items: [
              { label: "Papers" },
              { label: "Printeng Inks" },
              { label: "Paper Clips" },
              { label: "Files & Folders" },
            ],
          },
        ],
      ],
    },
    {
      label: "Stationaries",
      items: [
        [
          {
            label: "English Medium",
            items: [
              { label: "School Books" },
              { label: "Edexcel" },
              { label: "Cambridge" },
              { label: "Past Papers" },
              { label: "History Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Bangla Medium",
            items: [
              { label: "School Books" },
              { label: "SSC" },
              { label: "HSC" },
              { label: "Model Papers" },
              { label: "Story Books" },
              { label: "Children Books" },
            ],
          },
        ],
        [
          {
            label: "Stationaries",
            items: [
              { label: "Pens & Pencils" },
              { label: "Notebooks" },
              { label: "Color Boxes" },
              { label: "Arts & Crafts" },
              { label: "Blades Books" },
            ],
          },
          
        ],
        [
          {
            label: "Office Supplies",
            items: [
              { label: "Note Books" },
              { label: "Pens & Pencils" },
              { label: "Desk Organizer" },
            ],
          },
        ],
        [
          {
            label: "Printing Materials",
            items: [
              { label: "Papers" },
              { label: "Printeng Inks" },
              { label: "Paper Clips" },
              { label: "Files & Folders" },
            ],
          },
        ],
      ],
    },
    {
      label: "Blog",
    },
  ];

  return (
      <MegaMenu className="megamenuDetails" model={items} />
  );
};

export default Navbar;
