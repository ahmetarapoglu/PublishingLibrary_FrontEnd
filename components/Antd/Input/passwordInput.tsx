import { Form, Input } from 'antd';
interface DataType {
    label?: string;
    name?: string;
    placeholder?: string;
    disabled: boolean;
    rules?:
    [{ required: boolean }];
    type: string
}
const AntdPasswordInput = ({ label = "", name = "", rules = [{ required: true }], placeholder = "", disabled, type }: DataType) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <Input.Password placeholder={placeholder} type={type} disabled={disabled} />
        </Form.Item>
    );
};

export default AntdPasswordInput;