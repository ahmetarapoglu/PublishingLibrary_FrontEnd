import { Dropdown, MenuProps, Space, message } from 'antd';
import Link from 'next/link';
import { FcSettings } from 'react-icons/fc';
import { useDispatch } from "react-redux";
import { changeEditState, changeModelState, getId, saveEditData } from '../../../store/slice/tableStateSlice';
import AntdPopconfirm from '../Popconfirm/popconfirm';
import { AiFillDelete, AiFillEdit, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

interface DataType {
    editpath?: string;
    deleteUrl: string;
    id: number,
    type: string,
    data: any
}

const Action = ({ editpath, deleteUrl, id, type, data }: DataType) => {

    const dispatch = useDispatch();
    const items: MenuProps['items'] = [
        {
            key: '1',
            icon: <AiOutlineEdit style={{ fontSize: "1.1rem" }} />,
            label: (
                type != "model" ?
                    <Link href={{
                        pathname: `${editpath}`,
                        query: { id: id },
                    }}>
                        Edit
                    </Link>
                    : 'Edit'
            ),
            onClick: () => {
                if (type == "model") {
                    dispatch(changeModelState(true));
                }
                dispatch(changeEditState(true));
                dispatch(saveEditData(data));
                dispatch(getId(id));
            }
        },
        {
            key: '2',
            icon: <AiOutlineDelete style={{ fontSize: "1.1rem" }} />,
            danger: true,
            label: <AntdPopconfirm deleteUrl={deleteUrl} id={id} />,
        },
    ];

    return (
        <div className='action'>
            <Dropdown menu={{ items }}>
                <Space>
                    <FcSettings />
                </Space>
            </Dropdown>
        </div>
    );
};

export default Action;