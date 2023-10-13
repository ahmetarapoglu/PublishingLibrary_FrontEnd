import { Dropdown, MenuProps, Space, message } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcSettings } from 'react-icons/fc';
import { DeleteData } from '../../../service/fetchData';

interface DataType {
    editUrl: string;
    deleteUrl: string;
    id: number
}

const Action = ({ editUrl, deleteUrl, id }: DataType) => {
    const [messageApi, contextHolder] = message.useMessage();

    const deleteItem = async () => {

        messageApi
            .open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 1.5,
            })
            .then(() => DeleteData(id, deleteUrl))
            .then((e) => e ? message.success('item Successfuly Deleted!', 1.5) : message.error("The operation failed", 1.5));
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link href={{
                    pathname: `${editUrl}`,
                    query: { id: id },
                }}>
                    Edit
                </Link>
            ),
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