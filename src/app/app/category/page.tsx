"use client"
import type { ColumnsType } from 'antd/es/table';
import { points } from '../../../../service/endPoints';
import AntdTable from '../../../../components/Antd/Table/table';
import Action from '../../../../components/Antd/Table/action';
import { path } from '../../../../service/path';
import { categoryFields } from '../../../../constants/formFields';
import AddButton from '../../../../components/Antd/Table/addButton';

interface DataType {
    id: number;
    categoryName: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'categoryName',
        dataIndex: 'categoryName',
        key: 'categoryName',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render(value, record) {
            return (
                <Action
                    deleteUrl={points.DeleteCategory}
                    id={value}
                    type={"model"}
                    data={record}
                />
            )
        },
    }
];


const Page = () => {
    return (
        <>
            <AddButton />
            <AntdTable columns={columns} tableEndPoint={points.GetCategoties} addEndPoind={points.CreateCategory} getItemEndPoint={points.GetCategory} editEndPoint={points.UpdateCategory} formFields={categoryFields} />
        </>
    );
};

export default Page;