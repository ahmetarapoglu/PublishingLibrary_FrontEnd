import { Layout } from 'antd';

const Content = ({ children }: any) => {
    const { Content } = Layout;

    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360, background: "#e7e7e7" }}>{children}</div>
        </Content>
    );
};

export default Content;