import { Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { postData } from '../../../service/fetchData';
interface DataType {
    label?: string;
    name?: any;
    placeholder?: string;
    rules?:
    [{ required: boolean }],
    selectOption: any,
}
const AntdSelect = ({ label = "", name = "", rules = [{ required: true }], placeholder = "", selectOption }: DataType) => {
    const [options, setOptions] = useState([])
    const [loading, setLoading] = useState(false);
    const request = {
        current: 1,
        pageSize: 100,
        search: "",
    }

    const onFocus = async () => {
        setLoading(true)
        const { data } = await postData(request, selectOption.endPointData);
        setOptions(data.data);
        setLoading(false)
    }

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    // const onSearch = (value: string) => {
    //     console.log('search:', value);
    // };

    // Filter `option.label` match the user type `input`
    // const filterOption = (input: string, option?: { label: string; value: string }) =>
    //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    // const onScroll = () => {
    //     console.info("lgsdf")
    // }

    useEffect(() => {
        onFocus()
    }, [])
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
                onChange={onChange}
                onFocus={onFocus}
                loading={loading}
                fieldNames={{ label: selectOption.label, value: selectOption.value ?? "id" }}
                options={options}
            // onSearch={onSearch}
            // onPopupScroll={onScroll}
            />
        </Form.Item >

    );
};

export default AntdSelect;