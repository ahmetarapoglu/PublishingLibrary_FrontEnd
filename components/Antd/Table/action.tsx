import { Dropdown, MenuProps, Space, message } from 'antd';
import Link from 'next/link';
import { FcSettings } from 'react-icons/fc';
import { DeleteData } from '../../../service/fetchData';
import { useDispatch, useSelector } from "react-redux";
import { changeEditState, changeModelState, getId, updateTable } from '../../../store/slice/tableStateSlice';

interface DataType {
    editUrl?: string;
    deleteUrl: string;
    id: number,
    type: string
}

const Action = ({ editUrl, deleteUrl, id, type }: DataType) => {

    const dispatch = useDispatch();
    const { tableUpdateNumber } = useSelector((state: any) => state.tableState);

    const [messageApi, contextHolder] = message.useMessage();

    const deleteItem = async () => {

        messageApi
            .open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 1.5,
            })
            .then(() => DeleteData(id, deleteUrl))
            .then((e) => e ? message.success('item Successfuly Deleted!', 1.5, () => dispatch(updateTable(tableUpdateNumber + 1))
            ) : message.error("The operation failed", 1.5));
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                type != "model" ?
                    <Link href={{
                        pathname: `${editUrl}`,
                        query: { id: id },
                    }}>
                        Edit
                    </Link>
                    : 'Edit'
            ),
            onClick: () => {
                dispatch(changeModelState(true));
                dispatch(changeEditState(true));
                dispatch(getId(id));
            }
        },
        {
            key: '2',
            danger: true,
            label: 'Delete',
            onClick: deleteItem
        },
    ];

    return (
        <div className='action'>
            {contextHolder}
            <Dropdown menu={{ items }}>
                <Space>
                    <FcSettings />
                </Space>
            </Dropdown>
        </div>
    );
};

export default Action;