import { BiSolidBookAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { Menu } from 'antd';

const MenuPage = () => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    icon: <BsFillPersonFill />,
                    label: 'Author',
                },
                {
                    key: '2',
                    icon: <BiSolidBookAlt />,
                    label: 'Books',
                },
                {
                    key: '3',
                    icon: <BiSolidBookAlt />,
                    label: 'Category',
                },
                {
                    key: '4',
                    icon: <BiSolidBookAlt />,
                    label: 'Branch',
                },
                {
                    key: '5',
                    icon: <BiSolidBookAlt />,
                    label: 'Order',
                },
                {
                    key: '6',
                    icon: <BiSolidBookAlt />,
                    label: 'Invoice',
                },
            ]}
        />
    );
};

export default MenuPage;