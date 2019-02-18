//Core
import React, { Component } from "react";

//Components
import { Layout, Menu, Icon, Breadcrumb } from "antd";

//Styles
import Styles from "./styles.module.scss";

const { Header, Content, Footer } = Layout;

class Post extends Component {
    render() {
        // console.log(this.props);
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        style={{ lineHeight: "64px" }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: "0 50px" }}>
                    <div
                        style={{
                            background: "#fff",
                            padding: 24,
                            minHeight: "83vh"
                        }}
                    >
                        Content
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Test task for{" "}
                    <a
                        href={
                            "https://gist.github.com/creativ/a03f890c520cb41e94a3dca6e0a04890"
                        }
                    >
                        <Icon type="github" />
                    </a>
                </Footer>
            </Layout>
        );
    }
}

export default Post;
