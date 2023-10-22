"use client"
import { Layout, MenuProps } from 'antd';
import AntdDropdown from '../../Antd/Dropdown/dropdown ';
import { signOut, useSession } from 'next-auth/react';
import { PiSignOutBold } from "react-icons/pi";


const Header = () => {
    const items: MenuProps['items'] = [
        {
            label: "Log out",
            key: '0',
            icon: <PiSignOutBold style={{ fontSize: "17px" }} />,
            onClick: async () => {
                await signOut({ callbackUrl: '/auth/login' })
            }
        }
    ];

    const { Header } = Layout;
    const { data: session, status }: any = useSession()

    return (
        <Header style={{
            padding: 0, background: "#fff", display: "flex", justifyContent: "end", paddingRight: "40px"
        }} >
            <AntdDropdown userInfo={session?.user.email} items={items} />
        </Header >
    );
};

export default Header;