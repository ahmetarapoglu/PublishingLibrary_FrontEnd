import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../../../service/fetchData';
import { updateTable } from '../../../store/slice/tableStateSlice';

interface DataType {
    deleteUrl: string;
    id: number,
}

const AntdPopconfirm = ({ deleteUrl, id }: DataType) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { tableUpdateNumber } = useSelector((state: any) => state.tableState);
    const dispatch = useDispatch();
    const confirm = async (e: any) => {
        setConfirmLoading(true);
        await deleteData(id, deleteUrl).then((e) => {
            e ?
                setTimeout(() => {
                    setConfirmLoading(false);
                    message.success('item Successfuly Deleted!', 1, () => {
                        setOpen(false);
                        dispatch(updateTable(tableUpdateNumber + 1));
                    })
                }, 1500)
                :
                setTimeout(() => {
                    setConfirmLoading(false);
                    message.error('The operation failed', 1, () => {
                        setOpen(false);
                    })
                }, 1500)
        })
    };

    const cancel = (e: any) => {
        setOpen(false);
    };
    const showPopconfirm = () => {
        setOpen(true);
    };

    return (
        <Popconfirm
            placement="topRight"
            title="Delete Item"
            description="Are you sure to delete this item?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            open={open}
            onConfirm={confirm}
            onCancel={cancel}
            okButtonProps={{ loading: confirmLoading }}
        >
            <span onClick={showPopconfirm}>Delete</span>
        </Popconfirm>
    );
};

export default AntdPopconfirm;