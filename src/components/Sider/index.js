import React from "react";

import "./index.css";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sider = (props) => {
  return (
    <Layout.Sider
      style={{ minHeight: "100vh" }}
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        defaultOpenKeys={["products"]}
      >
        <Menu.Item key="0" icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.SubMenu key="products" icon={<UserOutlined />} title="Products">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/cabinet">Cabinet</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/drawer">Drawer</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/pantry">Pantry</Link>
          </Menu.Item>
          <Menu.Item key="add-product" icon={<PlusOutlined />}>
            <Link to="/add-product">Add</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          <Link to="/option">Option</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UploadOutlined />}>
          <Link to="/program-path">Program Path</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
