import AntdTable from '../../../../components/Antd/Table/table';
import { points } from '../../../../service/endPoints';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    id: number;
    title: string;
    categoryName: string;
    description: string;
    publishedDate: Date;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Category Name',
        dataIndex: 'categoryName',
        key: 'categoryName',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Published Date',
        dataIndex: 'publishedDate',
        key: 'publishedDate',
    },

];

const page = async () => {
    return (
        <div>
            <AntdTable columns={columns} tableEndPoint={points.GetBooks} />
        </div>
    );
};

export default page;