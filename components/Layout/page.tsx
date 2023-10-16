"use client"
import { Layout } from 'antd';
import Sider from './Sider/sider';
import Header from './Header/header';
import Footer from './Footer/Footer';
import Content from './Content/content';

const LayoutPage = ({ children }: any) => {

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider />
            <Layout style={{ background: "#f5f8ff" }}>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </Layout>
        </Layout >
    );
};

export default LayoutPage;

