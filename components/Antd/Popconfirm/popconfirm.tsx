import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react';

const AntdPopconfirm = () => {

    // const confirm = (e: React.MouseEvent<HTMLElement>) => {
    //     console.log(e);
    // };

    // const cancel = (e: React.MouseEvent<HTMLElement>) => {
    //     console.log(e);
    // };

    return (
        <Popconfirm
            title="Delete Item"
            description="Are you sure to delete this item?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        // onConfirm={confirm}
        // onCancel={cancel}
        >
            <Button danger>Delete</Button>
        </Popconfirm>
    );
};

export default AntdPopconfirm;