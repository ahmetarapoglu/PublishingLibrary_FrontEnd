"use client"
import 'moment/locale/tr'
import moment from 'moment';
import AntdTable from '../../../../components/Antd/Table/table';
import { points } from '../../../../service/endPoints';
import type { ColumnsType } from 'antd/es/table';
import Action from '../../../../components/Antd/Table/action';
import { path } from '../../../../service/path';
import AddButton from '../../../../components/Antd/Table/addButton';
import { localeMoment } from '../../../../service/moment';

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
        render: (value: any) => {
            return <>{localeMoment(value)}</>
        }
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render(value, record) {
            return (
                <Action
                    deleteUrl={points.DeleteBook}
                    editpath={path.editBook}
                    id={value}
                    type={"form"}
                    data={record}
                />
            )
        },
    }

];

const page = async () => {
    return (
        <>
            <AddButton type={"form"} addUrl={path.addBook} />
            <AntdTable columns={columns} tableEndPoint={points.GetBooks} />
        </>
    );
};

export default page;