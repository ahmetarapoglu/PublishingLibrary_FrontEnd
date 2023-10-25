import { DatePicker, DatePickerProps, Form } from 'antd';
interface DataType {
    label?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    rules?:
    [{ required: boolean }];
    type: string
}
const dateFormat = "DD-MM-YYYY";
const AntdDatePicker = ({ label = "", name = "", rules = [{ required: true }], placeholder = "", disabled, type }: DataType) => {

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.info("fdadfadf", date, dateString);
    };

    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <DatePicker onChange={onChange} format={dateFormat} />
        </Form.Item>
    );
};

export default AntdDatePicker;