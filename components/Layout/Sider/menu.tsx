import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsFillPersonFill, BsPersonFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";

import { Menu } from 'antd';
import { useRouter } from "next/navigation";
import { getSearchValue } from "../../../store/slice/tableStateSlice";
import { useDispatch } from "react-redux";

const MenuPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onSelect={({ key, keyPath }) => {
                dispatch(getSearchValue(""))
            }}
            onClick={({ keyPath }) => router.push(`/${keyPath}`)}
            items={[
                {
                    key: 'app/dashboard',
                    icon: <AiFillHome />,
                    label: 'Dashboard',
                },
                {
                    key: 'app/author',
                    icon: <BsFillPersonFill />,
                    label: 'Author',
                },
                {
                    key: 'app/book',
                    icon: <ImBooks />,
                    label: 'Books',
                },
                {
                    key: 'app/category',
                    icon: <BiSolidCategoryAlt />,
                    label: 'Category',
                },
                {
                    key: 'app/branch',
                    icon: <BsPersonFill />,
                    label: 'Branch',
                },
                {
                    key: 'app/order',
                    icon: <FaShoppingCart />,
                    label: 'Order',
                },
                {
                    key: 'app/invoice',
                    icon: <FaFileInvoiceDollar />,
                    label: 'Invoice',
                },
                {
                    key: 'app/user',
                    icon: <HiUsers />,
                    label: 'Users',
                },
            ]}
        />
    );
};

export default MenuPage;