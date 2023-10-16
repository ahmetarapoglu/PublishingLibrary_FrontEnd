import { Form, Select } from 'antd';
import { useEffect, useState } from 'react';
import { postData } from '../../../service/fetchData';
import { request } from '../../../service/global';

interface DataType {
    label?: string;
    name?: string;
    placeholder?: string;
    rules?:
    [{ required: boolean }],
    selectOption: any
}

const AntdSelect = ({ label = "", name = "", rules = [{ required: true }], placeholder = "", selectOption }: DataType) => {
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    // const onSearch = (value: string) => {
    //     console.log('search:', value);
    // };

    // Filter `option.label` match the user type `input`
    // const filterOption = (input: string, option?: { label: string; value: string }) =>
    //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const onFocus = async () => {
        setLoading(true)
        const { data } = await postData(request, selectOption.endPointData);
        setOptions(data.data);
        setLoading(false)

        console.info("response", data.data)
    }
    // const onScroll = () => {
    //     console.info("lgsdf")
    // }


    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
            <Select
                showSearch
                placeholder={placeholder}
                optionFilterProp="children"
                onFocus={onFocus}
                onChange={onChange}
                // onSearch={onSearch}
                loading={loading}
                fieldNames={{ label: selectOption.label, value: selectOption.value ?? "id" }}
                options={options}
            // onPopupScroll={onScroll}
            />
        </Form.Item>
    );
};

export default AntdSelect;