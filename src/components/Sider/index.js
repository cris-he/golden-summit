import React, { useEffect, useState } from "react";

import "./index.css";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  // VideoCameraOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sider = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuItems, setItems] = useState([]);

  useEffect(() => {
    fetch('https://gs-app-config-service.herokuapp.com/api/products')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
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
            {menuItems.map(item => (
              <Menu.Item key={item._id} value={item.name}>
                <Link to={item.name}>{item.name}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key="3" icon={<PlusOutlined />}>
            <Link to="/add">Add</Link>
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
  }
};

export default Sider;
