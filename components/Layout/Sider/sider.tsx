import { Layout, Menu, Image } from 'antd';
import MenuPage from './menu';


const Sider = () => {
    const { Sider } = Layout;

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                // console.info(broken);
            }}
            onCollapse={(collapsed, type) => {
                // console.info(collapsed, type);
            }}
        >
            <Image
                width={"100%"}
                src="/images/logo2.png"
                preview={false}
                alt="no-image"
            />
            <MenuPage />
        </Sider>
    );
};

export default Sider;