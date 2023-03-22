import React from "react";

import "./index.css";

/* redux */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authAction from "../../redux/actions/auth";

/* ant design */
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Sider from "../Sider";
import Router from "../Router";

const { Header, Content } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <div style={{ float: "right", paddingRight: "24px" }}>
              {typeof this.props.user.displayName === "undefined" ? (
                <Button
                  onClick={async () => {
                    this.props.authAction.signIn({
                      id: "6268ce7321f97e50e47a41bc",
                      password: "xxxx",
                    });
                  }}
                >
                  Login
                </Button>
              ) : (
                <Button
                  onClick={async () => {
                    this.props.authAction.signOut();
                  }}
                >
                  {`${this.props.user.displayName}, Logout`}
                </Button>
              )}
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Router />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("mapStateToProps: Auth", state, ownProps);
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators(authAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
