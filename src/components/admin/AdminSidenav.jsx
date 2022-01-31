import React from "react";
import { Link } from "react-router-dom";
import { PanelMenu } from "primereact/panelmenu";
import "./AdminSidenav.css";

const AdminSidenav = () => {
  const items = [
    {
      label: "Dashboard",
    },
    {
      label: "Products",
      items: [
        {
          label: "Product List",
        },
        {
          label: "Product Edit",
        },
        {
          label: "Product Details",
        },
        {
          label: "Product Add",
        },
      ],
    },
    {
      label: "Users",
      items: [
        {
          label: "User List",
        },
        {
          label: "User Edit",
        },
        {
          label: "User Details",
        },
        {
          label: "User Add",
        },
      ],
    },
    {
      label: "Orders",
      items: [
        {
          label: "Order List",
        },
        {
          label: "Order Details",
        },
        {
          label: "Order Invoices",
        },
      ],
    },
    {
      label: "Sales Promotion",
      items: [
        {
          label: "Cupons List",
        },
        {
          label: "Cupons Add",
        },
        {
          label: "Cupons Edit",
        },
      ],
    },
    {
      label: "Settings",
    },
  ];

  return (
    <div className="sideNavSection">
      <div className="sideNavWrapper">
        <div className="sideNavDetails">
          <Link to="/">
            <img src="/icons/logo.png" alt="" />
          </Link>
          <PanelMenu model={items} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidenav;
