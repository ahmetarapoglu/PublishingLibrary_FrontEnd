import AntdTable from "../../../../components/Antd/Table/table";
import { points } from "../../../../service/endPoints";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    id: number;
    userName: string;
    email: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'UserName',
        dataIndex: 'userName',
        key: 'userName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }
];

const page = () => {
    return (
        <div>
            <AntdTable columns={columns} endPoint={points.GetUsers} />
        </div>
    );
};

export default page;