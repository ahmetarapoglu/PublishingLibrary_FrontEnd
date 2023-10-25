import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react';

const AntdPopconfirm = () => {
    return (
        <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
        >
            <Button danger>Delete</Button>
        </Popconfirm>
    );
};

export default AntdPopconfirm;