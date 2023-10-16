import { Layout, Image } from 'antd';
import MenuPage from './menu';


const Sider = () => {
    const { Sider } = Layout;

    return (
        <Sider
            // theme="dark"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                // console.info(broken);
            }}
            onCollapse={(collapsed, type) => {
                // console.info(collapsed, type);
            }}
        >
            <div style={{ background: "#fff", padding: "17px", borderRight: "1px solid rgb(245, 248, 255)" }}>
                <Image
                    width={"100%"}
                    src="/images/logo.png"
                    preview={false}
                    alt="no-image"
                />
            </div>

            <MenuPage />
        </Sider>
    );
};

export default Sider;