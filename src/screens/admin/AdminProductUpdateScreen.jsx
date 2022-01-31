import React, { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import { Button } from 'primereact/button';
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidenav from "../../components/admin/AdminSidenav";
import "./AdminProductUpdateScreen.css";

const AdminProductUpdateScreen = () => {
  // const [value1, setValue1] = useState("");
  const toast = useRef(null);
  const onUpload = (e) => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
    console.log(e.target.name)
  };
  return (
    <section className="adminProductUpdateSection">
      <div className="adminProductUpdateWrapper">
        <div className="adminProductUpdateDetails">
          <div className="adminProdctUpdateContentLeft">
            <AdminSidenav />
          </div>
          <div className="adminProductUpdateContentRight">
            <AdminNavbar />
            <form className="adminProductUpdateForm">
              <div className="adminProductUpdateFormLeft">
                <div className="formGroup">
                  <InputText
                    placeholder="Product Name"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Category"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Sub Category"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Type"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Price"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Author Name"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Publisher"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="ISBN Number"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Edition"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Language"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Cover"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Count In Stock"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <InputText
                    placeholder="Discount"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                  />
                </div>
              </div>
              <div className="adminProductUpdateFormRight">
                <div>
                  <FileUpload
                  style={{marginBottom: '2rem'}}
                    name="demo[]"
                    // url="https://primefaces.org/primereact/showcase/upload.php"
                    onUpload={onUpload}
                    multiple
                    accept="image/*"
                    maxFileSize={1000000}
                    emptyTemplate={
                      <p className="m-0">
                        Drag and drop files to here to upload.
                      </p>
                    }
                  />
                </div>
                <div className="formGroup">
                  <InputTextarea
                    placeholder="Prdouct Description"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                    rows={5}
                    cols={30}
                  />
                </div>
                <div className="formGroup">
                  <InputTextarea
                    placeholder="Author Description"
                    // value={value1}
                    // onChange={(e) => setValue1(e.target.value)}
                    rows={5}
                    cols={30}
                  />
                </div>
                <Button label="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProductUpdateScreen;
