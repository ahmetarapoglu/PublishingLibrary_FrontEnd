import { Form, Input } from 'antd';
interface DataType {
    label?: string;
    name?: string;
    placeholder?: string;
    rules?:
    [{ required: boolean }]
}
const AntdInput = ({ label = "", name = "", rules = [{ required: true }], placeholder = "" }: DataType) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <Input placeholder={placeholder} />
        </Form.Item>
    );
};

export default AntdInput;