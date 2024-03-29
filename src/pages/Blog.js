import React, { useState, useEffect,useRef } from "react";
import {
  Table,
  Button,
  Modal,
  Row,
  Col,
  Switch,
  Form,
  Input,
  Upload,
  TimePicker,
  Select,
  DatePicker,
} from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  UserListData,
  EditProductUserData,
  AddProductData,
  CreateUserData,
  EditUserData,
  AdminUserLists,
  GetstaffListById,
  AddEmployeesById,
  EditEmployeesById,
  DeleteEmployeesById,
} from "../reducer/thunks";
import moment from "moment";
import constant from "../constant/constant";
import { UploadOutlined } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";
import Loader from "../components/Loader";

const { Option } = Select;

const { Dragger } = Upload;

const { confirm } = Modal;

const Blog = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const [searchInput, setSearchInput] = useState("");
    const [filteredBrands, setFilteredBrands] = useState([]);

  const [nameFilter, setNameFilter] = useState("");
  const EditModal = ({ visible, data, onClose, onSave }) => {
    const [fileList, setFileList] = useState([]);
    
    const [showStoreTiming, setShowStoreTiming] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
      data.joiningDate ? moment(data.joiningDate) : moment()
    );
    const [form] = Form.useForm();

    const handleDateChange = (date, dateString) => {
      setSelectedDate(dateString);

      // Set the value in the form field
      form.setFieldsValue({ joiningDate: dateString });
    };
    const handleSave = () => {
      form
        .validateFields()
        .then((values) => {
          onSave(values);
          form.resetFields();
          onClose();
        })
        .catch((errorInfo) => {
          console.log("Validation Failed:", errorInfo);
        });
    };

    const handleFileChange = (info) => {
      setFileList(info.fileList.slice(-1)); // Allow only one file
    };

    const handleUserTypeChange = (userType) => {
      setShowStoreTiming(userType === "2"); // Show store timing only for user type 2 (admin)
    };

    return (
      <Modal
        title="Add Blog"
        visible={visible}
        onCancel={onClose}
        width={1000}
        footer={[
          <Button key="cancel" onClick={onClose}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} initialValues={data} className="col-md-12 row">
          {Object.entries(data).map(
            ([key, value]) =>
              key !== "__v" &&
              key !== "_id" && key !== "createdBy" && key !== "createdAt" && (
                <Form.Item
                  key={key}
                  labelCol={{ span: 24 }}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  name={key}
                  className="col-md-6"
                >
                  {key === "isActive" ? (
                    <Switch
                      size="small"
                      checked={value}
                      onChange={(checked) => {
                        form.setFieldsValue({ [key]: checked });
                      }}
                    />
                  ) : key === "jobRoles" ? (
                    <Select
                      onChange={handleUserTypeChange}
                      placeholder="Select User Type"
                    >
                      <Option value="4">Store Manager</Option>
                      <Option value="5">Sales Associate</Option>
                      <Option value="6">Cashier</Option>
                      <Option value="7">Visual Merchandiser</Option>
                      <Option value="8">Security Guard</Option>
                      <Option value="9">Cleaning Staff</Option>
                      <Option value="10">
                        Customer Service Representative
                      </Option>
                      <Option value="11">Maintenance Technician</Option>
                      <Option value="12">Food Court Staff</Option>
                      <Option value="13">Marketing Coordinator</Option>
                      <Option value="14">Janitorial Staff</Option>
                      <Option value="15">Assistant Manager</Option>
                      <Option value="16">Delivery Personnel</Option>
                      <Option value="17">IT Support</Option>
                      <Option value="18">Event Coordinator</Option>
                      {/* Add more job roles as needed */}
                    </Select>
                  ) : key === "imageUrl" ? (
                    <CustomImageUpload value={value} form={form} />
                  ) : key === "lang" ? (
                    <Select
                      onChange={handleUserTypeChange}
                      placeholder="Select User Type"
                    >
                      <Option value="IND">India</Option>
                      <Option value="JPN">Japan</Option>
                      <Option value="KOR">Korea</Option>
                      <Option value="AUS">Australia</Option>
                    </Select>
                  ) : key === "joiningDate" ? (
                    <>
                      <DatePicker
                        onChange={handleDateChange}
                        defaultValue={moment(selectedDate, "YYYY-MM-DD")}
                        format="YYYY-MM-DD"
                        placeholder="Select Date"
                      />
                      <div style={{ marginTop: 8 }}>
                        {/* Selected Date: {selectedDate || "Not selected"} */}
                      </div>
                    </>
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              )
          )}
        </Form>
      </Modal>
    );
  };

  const CustomImageUpload = ({ value, form }) => {
    const [selectedFiles, setSelectedFiles] = useState(
      value !== "" ? [value] : []
    );

    const handleFileChange = ({ fileList }) => {
      if (fileList.length === 0) {
        form.setFieldsValue({
          imageUrl: null,
        });
      } else {
        const selectedFile = fileList[0]?.originFileObj;

        console.log("Selected File:", selectedFile);

        const imageUrl = selectedFile
          ? URL.createObjectURL(selectedFile)
          : `${constant.baseUrl}${value}`;
          console.log(imageUrl,"imageUrl");

        form.setFieldsValue({ imageUrl });
        setSelectedFiles(fileList);
      }

      // Automatically close the modal after uploading
      if (fileList.length > 0) {
        form.submit();
      }
    };

    const handleClearImage = () => {
      setSelectedFiles([]);
      form.setFieldsValue({
        imageUrl: null,
      });
    };

    useEffect(() => {
      form.setFieldsValue({
        imageUrl: selectedFiles.map((file) => file.originFileObj),
      });
    }, [selectedFiles]);

    return (
      <div>
        <Upload
          accept="image/*"
          fileList={selectedFiles}
          customRequest={({ file, onSuccess }) => {
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          }}
          onChange={({ fileList }) => {
            handleFileChange({ fileList });
          }}
        >
          <Button icon={<UploadOutlined />}>Upload Images</Button>
        </Upload>
        {selectedFiles.length > 0 && (
          <div style={{ marginTop: 16 }}>
            {selectedFiles.map((file, index) => (
              <img
                key={index}
                src={
                  file?.originFileObj
                    ? URL.createObjectURL(file.originFileObj)
                    : `${constant.baseUrl}${file}`
                }
                alt={`Preview-${index + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "150px",
                  marginRight: "5px",
                }}
              />
            ))}
            {/* <Button onClick={handleClearImage}>Clear Image</Button> */}
          </div>
        )}
      </div>
    );
  };

  document.title = "Winter Bear";
  document.getElementsByTagName("META")[2].content = "Winter Bear";
  const dispatch = useDispatch();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editData, setEditData] = useState([]);

  const { loading: getOrderUserLoading, GetStaffList: getOrderResponse } =
    useSelector((state) => state.GetStaffList);

  const { loading: EditcategoryLoading, addStaffList: EditcategoryResponse } =
    useSelector((state) => state.addStaffList);

  useEffect(() => {
    dispatch(GetstaffListById());
    if (EditcategoryResponse) {
      setEditData([]);
      setEditModalVisible(false);
    }
  }, [EditcategoryResponse]);

  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <p
          class="d-inline-block text-truncate"
          style={{
            maxWidth: "150px",
          }}
        >
          {text}
        </p>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <p
          class="d-inline-block text-truncate"
          style={{
            maxWidth: "150px",
          }}
        >
          {text}
        </p>
      ),
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => (
        <img
          src={`${constant.baseUrl}${imageUrl}`}
          alt="Product Image"
          style={{ maxWidth: "50px", maxHeight: "50px" }}
        />
      ),
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          size="small"
          //   onChange={() => handleToggleActive(record._id, !isActive)}
        />
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD-MM-YYYY"),
    },

    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <>
          <Button
            type="primary"
            size="small"
            onClick={() => handleEdit(record)}
            className="mx-1 bg-white text-dark shadow-none"
          >
            <i className="fa-regular fa-pen-to-square px-1" />
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => showDeleteConfirm(record)}
            className="mx-1 bg-white text-dark shadow-none"
          >
            {" "}
            <i className="fa-solid fa-trash-can px-1" />
          </Button>
        </>
      ),
    },
  ];

  const handleEdit = (record) => {
    setEditData(record);
    setEditModalVisible(true);
  };

  const showDeleteConfirm = (record) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <DeleteFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        dispatch(DeleteEmployeesById(record._id))
          .then(() => dispatch(UserListData(1)))
          .catch((error) => console.error("Error:", error));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleSaveEdit = async (editedData) => {
    console.log(editData);
    let bodypass = "";
    const formData = new FormData();
    formData.append("name", editedData.name);
    formData.append("description", editedData.description);
    formData.append("createdBy", localStorage.getItem("userId"));
    formData.append("lang", "IND");
    formData.append("isActive", editedData.isActive);
    formData.append("imageUrl", editedData.imageUrl[0]);
    console.log("Form Data:", formData);

    if (editData._id === undefined && editedData._id === undefined) {
      await dispatch(AddEmployeesById(formData));
      setEditData([]);
    } else {
      await dispatch(
        editedData._id !== undefined
          ? EditEmployeesById(editedData._id, formData)
          : EditEmployeesById(editData._id, formData)
      );
      setEditData([]);
    }

    // dispatch(UserListData(1));

    // Handle the edited data (e.g., dispatch an action to update the data)
    console.log("Edited Data:", bodypass);
  };

  const filteredData = getOrderResponse?.faqs.filter((employee) => {
    const lowerCaseName = employee.name.toLowerCase();
    const lowerCaseEmail = employee.description.toLowerCase();

    return (
      lowerCaseName.includes(nameFilter.toLowerCase()) ||
      lowerCaseEmail.includes(nameFilter.toLowerCase())
    );
  });

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 bg-light">
            <div className="main px-5 my-5">
              <div className="row g-0">
                <div className="col-md-12">
                  <p className="fs-3 fw-semibold my-3">Blog</p>
                  <div className="overview mt-3 px-3 py-3 bg-white">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 d-flex justify-content-between">
                      <div className="text-md-start text-center mt-2 mb-2">
                        <input
                          type="text"
                          className="form-control border-0 bg-secondary-subtle text-secondary searchbox"
                          placeholder="Search By Name"
                          aria-label="Search"
                          aria-describedby="addon-wrapping"
                          value={nameFilter}
                          onChange={(e) => setNameFilter(e.target.value)}
                        />
                      </div>

                      <div className="text-md-start text-center mt-2 mb-2">
                        <div
                          className={`add-button padding-top text-start mt-1`}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            handleEdit({
                              name: "",
                              description: "",
                              imageUrl: "",
                              isActive:""
                            })
                          }
                        >
                          <i className="fa-solid fa-plus px-2" />
                          Add Blog
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mx-1">
                <div className="table-responsive py-3 bg-white mt-3">
                  <Table
                    dataSource={filteredData}
                    columns={columns}
                    pagination={{
                      pageSize: 10, // Set the number of items per page
                    }}
                  />
                </div>
              </div>
              <EditModal
                visible={editModalVisible}
                data={editData}
                onClose={() => setEditModalVisible(false)}
                onSave={handleSaveEdit}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {!getOrderResponse && <Loader />}
    </>
  );
};

export default Blog;
