"use client"
import { Select } from 'antd';
import { postData } from '../../../service/fetchData';
import { useState } from 'react';
import { request } from '../../../service/global';

interface DataType {
    placeholder: string;
    selectOption: any;
    setValue: any;
    value: any;
}

const CustomSelect = ({ selectOption, placeholder, value, setValue }: DataType) => {

    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
        setValue(value)
    };

    const onFocus = async () => {
        setLoading(true)
        const { data } = await postData(request, selectOption.endPointData);
        setOptions(data.data);
        setLoading(false)
    }

    // const onSearch = (value: string) => {
    //     console.log('search:', value);
    // };

    // Filter `option.label` match the user type `input`
    // const filterOption = (input: string, option?: { label: string; value: string }) =>
    //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    // const onScroll = () => {
    //     console.info("lgsdf")
    // }

    return (
        <Select
            showSearch
            placeholder={placeholder}
            optionFilterProp="children"
            onFocus={onFocus}
            onChange={onChange}
            loading={loading}
            fieldNames={{ label: selectOption.label, value: selectOption.value ?? "id" }}
            options={options}
            value={value}
        // onSearch={onSearch}
        // onPopupScroll={onScroll}
        />
    )
}

export default CustomSelect;