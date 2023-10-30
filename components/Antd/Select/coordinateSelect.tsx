import { Form, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { postData } from "../../../service/fetchData";
import { points } from "../../../service/endPoints";
interface DataType {
    label?: string;
    name?: any;
    placeholder?: string;
    rules?:
    [{ required: boolean }],
    selectOption: any,
}
const CoordinateSelect = ({ label = "", name = "", rules = [{ required: true }], placeholder = "", selectOption }: DataType) => {
    const [firstOption, setFirstOption] = useState<any>([]);
    const [secondOption, setSecondOption] = useState([]);
    const [loading, setLoading] = useState(false);
    const request = {
        current: 1,
        pageSize: 100,
        search: "",
    }

    const onChangeFirstSelection = (value: any, option: any) => {
        const selectedVersion = firstOption.find((version: any) => version.id === value).bookVersions;
        setSecondOption(selectedVersion)
    };

    const onFocus = async () => {
        setLoading(true)
        const { data } = await postData(request, points.GetBooks);
        setFirstOption(data.data)
        setLoading(false)
    }

    useEffect(() => {
        onFocus();
    }, [])

    useEffect(() => {
        console.info("secondOption", secondOption)
    }, [])

    return (
        <>
            <Form.Item label={"Book"}
            >
                <Select
                    loading={loading}
                    onChange={onChangeFirstSelection}
                    onFocus={onFocus}
                    fieldNames={{ label: "title", value: "id" }}
                    options={firstOption}
                    placeholder={"Select Book"}
                />
            </Form.Item>
            <Form.Item
                label={label}
                name={name}
                rules={rules}
            >
                <Select
                    loading={loading}
                    fieldNames={{ label: selectOption.label, value: selectOption.value ?? "id" }}
                    options={secondOption}
                    placeholder={placeholder}
                />
            </Form.Item>
        </>
    );
};

export default CoordinateSelect;