import { Avatar, Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const AntdDropdown = ({ userInfo, items }: any) => {
    return (
        <Dropdown menu={{ items }} trigger={['click']} >
            <Space style={{ cursor: "pointer" }}>
                {userInfo}
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Space>

        </Dropdown>
    );
};

export default AntdDropdown