import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../../components/admin/productService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidenav from "../../components/admin/AdminSidenav";
import "./AdminOrderListScreen.css";

const AdminOrderListScreen = () => {
  const [products, setProducts] = useState(null);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProducts().then((data) => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      </React.Fragment>
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`images/product/${rowData.image}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className="product-image"
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}
      >
        {rowData.inventoryStatus}
      </span>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          // onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          // onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">All Orders</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button label="Yes" icon="pi pi-check" className="p-button-text" />
    </React.Fragment>
  );

  return (
    <section className="adminOrderListSection">
      <div className="adminOrderListWrapper">
        <div className="adminOrderListDetails">
          <div className="adminOrderListContentLeft">
            <AdminSidenav />
          </div>
          <div className="adminOrderListContentRight">
            <AdminNavbar />
            <div className="datatable-crud-demo">
              <Toast ref={toast} />

              <div className="card">
                <Toolbar
                  className="mb-4"
                  right={rightToolbarTemplate}
                ></Toolbar>

                <DataTable
                  ref={dt}
                  value={products}
                  selection={selectedProducts}
                  onSelectionChange={(e) => setSelectedProducts(e.value)}
                  dataKey="id"
                  paginator
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25]}
                  paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                  globalFilter={globalFilter}
                  header={header}
                  responsiveLayout="scroll"
                >
                  <Column
                    selectionMode="multiple"
                    headerStyle={{ width: "3rem" }}
                    exportable={false}
                  ></Column>
                  <Column
                    field="code"
                    header="Code"
                    sortable
                    style={{ minWidth: "12rem" }}
                  ></Column>
                  <Column
                    field="name"
                    header="Name"
                    sortable
                    style={{ minWidth: "16rem" }}
                  ></Column>
                  <Column
                    field="image"
                    header="Image"
                    body={imageBodyTemplate}
                  ></Column>
                  <Column
                    field="price"
                    header="Price"
                    body={priceBodyTemplate}
                    sortable
                    style={{ minWidth: "8rem" }}
                  ></Column>
                  <Column
                    field="category"
                    header="Category"
                    sortable
                    style={{ minWidth: "10rem" }}
                  ></Column>
                  <Column
                    field="rating"
                    header="Reviews"
                    body={ratingBodyTemplate}
                    sortable
                    style={{ minWidth: "12rem" }}
                  ></Column>
                  <Column
                    field="inventoryStatus"
                    header="Status"
                    body={statusBodyTemplate}
                    sortable
                    style={{ minWidth: "12rem" }}
                  ></Column>
                  <Column
                    header="Actions"
                    body={actionBodyTemplate}
                    exportable={false}
                    style={{ minWidth: "8rem" }}
                  ></Column>
                </DataTable>
              </div>

              <Dialog
                visible={deleteProductDialog}
                style={{ width: "450px" }}
                header="Confirm"
                modal
                footer={deleteProductDialogFooter}
                onHide={hideDeleteProductDialog}
              >
                <div className="confirmation-content">
                  <i
                    className="pi pi-exclamation-triangle mr-3"
                    style={{ fontSize: "2rem" }}
                  />
                  {/* {product && (
                    <span>
                      Are you sure you want to delete <b>{product.name}</b>?
                    </span>
                  )} */}
                </div>
              </Dialog>

              <Dialog
                // visible={deleteProductsDialog}
                style={{ width: "450px" }}
                header="Confirm"
                modal
                // footer={deleteProductsDialogFooter}
                // onHide={hideDeleteProductsDialog}
              >
                <div className="confirmation-content">
                  <i
                    className="pi pi-exclamation-triangle mr-3"
                    style={{ fontSize: "2rem" }}
                  />
                  {/* {product && (
                    <span>
                      Are you sure you want to delete the selected products?
                    </span>
                  )} */}
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminOrderListScreen;
