import { Tag } from 'antd';

interface DataType {
    color: string;
    chidren: string;
}

const AntdTag = ({ color, chidren }: DataType) => {
    return (
        <Tag color={color}>{chidren}</Tag>
    );
};

export default AntdTag;