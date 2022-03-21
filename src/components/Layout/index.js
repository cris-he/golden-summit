import React from "react";

import "./index.css";

import { Layout } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";

import Sider from "../Sider";
import Router from "../Router";

const { Header, Content } = Layout;

class MainLayout extends React.Component {
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout >
                <Sider collapsed={this.state.collapsed} />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(
                            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: "trigger",
                                onClick: this.toggle
                            }
                        )}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280
                        }}
                    >
                        <Router />

                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout
