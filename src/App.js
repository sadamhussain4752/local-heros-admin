import React, { useEffect } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Customer from "./pages/Customers";
import AdminUsers from "./pages/AdminUsers";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Category from "./pages/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import Brand from "./pages/Brand";
import Pages from "./pages/Pages";
import AddBrand from "./pages/AddBrand";
import OurStore from "./pages/OurStore";
import Account from "./pages/Account";
import Ourstaff from "./pages/Ourstaff";
import { AuthProvider } from "./auth/auth";
import { RequireAuth } from "./auth/RequireAuth";
import Blog from "./pages/Blog";
import { getToken, onMessage } from "@firebase/messaging";
import { messaging } from "./auth/firebase";

import {
  MessageOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { notification } from "antd";

const App = () => {

  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BNeMD-jppPi2FOrZIB8PlatL7K7UQuwGLWwFJ5WSs8ipte3ZUd_tQ9cKddH_48t4pH2T5oIUif-LjnhOB_a0o_M",
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(messaging, (payload) => {
    console.log("incoming msg", payload.notification);
    notificationSound(payload.notification);
  });

  const notificationSound = (id) => {
    notification.open({
      message: id.title,
      description: id.body,
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
    const audio = new Audio(require("../src/constant/songs/notificationsound.wav"));
    audio.load();
    audio
      .play()
      .then(() => {
        console.log("Notification sound played successfully.");
      })
      .catch((error) => {
        console.error("Error playing notification sound:", error);
      });
  };
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/products"
              element={
                <RequireAuth>
                  <Products />
                </RequireAuth>
              }
            />
            <Route
              path="/add-product"
              element={
                <RequireAuth>
                  <AddProduct />
                </RequireAuth>
              }
            />

            <Route
              path="/customer"
              element={
                <RequireAuth>
                  <Customer />
                </RequireAuth>
              }
            />
            <Route
              path="/orders"
              element={
                <RequireAuth>
                  <Orders />
                </RequireAuth>
              }
            />
            <Route
              path="/pages"
              element={
                <RequireAuth>
                  <Pages />
                </RequireAuth>
              }
            />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <AdminUsers />
                </RequireAuth>
              }
            />
            <Route
              path="/category"
              element={
                <RequireAuth>
                  <Category />
                </RequireAuth>
              }
            />
            <Route
              path="/add-category"
              element={
                <RequireAuth>
                  <AddCategory />
                </RequireAuth>
              }
            />
            <Route
              path="/brand"
              element={
                <RequireAuth>
                  <Brand />
                </RequireAuth>
              }
            />
            <Route
              path="/add-brand"
              element={
                <RequireAuth>
                  <AddBrand />
                </RequireAuth>
              }
            />
            <Route
              path="/our-store"
              element={
                <RequireAuth>
                  <OurStore />
                </RequireAuth>
              }
            />
            <Route
              path="/staff"
              element={
                <RequireAuth>
                  <Ourstaff />
                </RequireAuth>
              }
            />
            <Route
              path="/blog"
              element={
                <RequireAuth>
                  <Blog />
                </RequireAuth>
              }
            />
            <Route
              path="/staff"
              element={
                <RequireAuth>
                  <Ourstaff />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <Account />
                </RequireAuth>
              }
            />
            <Route
              path="/pages"
              element={
                <RequireAuth>
                  <Pages />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
