"use client"
import AntdTable from '../../../../components/Antd/Table/table';
import { points } from '../../../../service/endPoints';
import type { ColumnsType } from 'antd/es/table';
import Action from '../../../../components/Antd/Table/action';
import { path } from '../../../../service/path';
import AddButton from '../../../../components/Antd/Table/addButton';
import { localeMoment } from '../../../../service/moment';
import { HiOutlineSearch } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DataType {
    id: number;
    title: string;
    categoryName: string;
    description: string;
    publishedDate: Date;
}

const Page = () => {
    const router = useRouter()
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
            title: 'Book Version',
            key: 'id',
            dataIndex: 'id',
            render(value, record) {
                return (
                    <Link href={`/app/book/book-version?id=${value}`} >
                        <HiOutlineSearch />
                    </Link>

                )
            },
        },
        {
            title: 'Action',
            key: 'id',
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
    return (
        <>
            <AddButton type={"form"} addUrl={path.addBook} />
            <AntdTable columns={columns} tableEndPoint={points.GetBooks} />
        </>
    );
};

export default Page;