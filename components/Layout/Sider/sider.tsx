import { Layout, Menu, Image } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MenuPage from './menu';


const Sider = () => {
    const { Sider } = Layout;

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Image
                width={"100%"}
                height={65}
                src="/images/logo1.avif"
                preview={false}
            />
            <MenuPage />
        </Sider>
    );
};

export default Sider;