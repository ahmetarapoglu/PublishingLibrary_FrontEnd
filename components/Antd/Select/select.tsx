import { Form } from 'antd';
import CustomSelect from './customSelect';

interface DataType {
    label?: string;
    name?: string;
    placeholder?: string;
    rules?:
    [{ required: boolean }],
    selectOption: any,
    setValue: any,
    value?: any
}

const AntdSelect = ({ label = "", name = "", rules = [{ required: true }], placeholder = "", selectOption, setValue, value }: DataType) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <CustomSelect selectOption={selectOption} placeholder={placeholder} setValue={setValue} value={value} />
        </Form.Item>
    );
};

export default AntdSelect;