import React from "react";

import "./index.css";

import { Layout, Menu } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from "@ant-design/icons";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const Sider = (props) => {
    return (
        <Layout.Sider style={{ minHeight: '100vh' }} trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/cabinet">Cabinet</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <Link to="/drawer">Drawer</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    <Link to="/pantry">Pantry</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UploadOutlined />}>
                    <Link to="/option">Option</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}

export default Sider
