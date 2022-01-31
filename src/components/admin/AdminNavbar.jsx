import React from "react";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const items = [
    {
      label: <i className="far fa-bell"></i>,
    },
    {
      label: <span>Name <br/>Admin Profile</span>
    },
    {
      label: <img src="/images/logo.png" alt="logo" />,
      // icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
  ];
  // const start = (
  //   <img
  //     alt="logo"
  //     src="showcase/images/logo.png"
  //     onError={(e) =>
  //       (e.target.src =
  //         "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
  //     }
  //     height="40"
  //     className="mr-2"
  //   ></img>
  // );
  const start = <InputText placeholder="Search" type="text" />;
  return (
    <div className="adminNavbarSection">
      <div className="adminNavbarWrapper">
        <div className="adminNavbarDetails">
          <Menubar model={items} start={start} />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
