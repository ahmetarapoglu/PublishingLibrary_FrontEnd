"use client"
import type { ColumnsType } from 'antd/es/table';
import { points } from '../../../../service/endPoints';
import AntdTable from '../../../../components/Antd/Table/table';
import Action from '../../../../components/Antd/Table/action';
import { path } from '../../../../service/path';
import { categoryFields } from '../../../../constants/formFields';

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
        render(value) {
            return (
                <Action
                    deleteUrl={points.DeleteCategory}
                    id={value}
                    type={"model"}
                />
            )
        },
    }
];


const Page = () => {
    return (
        <AntdTable columns={columns} tableEndPoint={points.GetCategoties} addEndPoind={points.CreateCategory} getItemEndPoint={points.GetCategory} editEndPoint={points.UpdateCategory} formFields={categoryFields} />
    );
};

export default Page;