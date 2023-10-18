"use client"
import Action from '../../../../components/Antd/Table/action';
import AddButton from '../../../../components/Antd/Table/addButton';
import AntdTable from '../../../../components/Antd/Table/table';
import { points } from '../../../../service/endPoints';
import type { ColumnsType } from 'antd/es/table';
import { path } from '../../../../service/path';

interface DataType {
    id: number;
    nameSurname: string;
    footer?: any
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name Surname',
        dataIndex: 'nameSurname',
        key: 'nameSurname',
    },
    {
        title: 'Country',
        dataIndex: ['authorAddress', 'country'],
        key: 'country',
    },
    {
        title: 'City',
        dataIndex: ['authorAddress', 'city'],
        key: 'city',
    },
    {
        title: 'PostCode',
        dataIndex: ['authorAddress', 'postCode'],
        key: 'postCode',
    },
    {
        title: 'Email',
        dataIndex: ['authorBiography', 'email'],
        key: 'email',
    },
    {
        title: 'PhoneNumber',
        dataIndex: ['authorBiography', 'phoneNumber'],
        key: 'phoneNumber',
    },
    {
        title: 'NativeLanguage',
        dataIndex: ['authorBiography', 'nativeLanguage'],
        key: 'nativeLanguage',
    },
    {
        title: 'Education',
        dataIndex: ['authorBiography', 'education'],
        key: 'education',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render(value, record) {
            return (
                <Action
                    deleteUrl={points.DeleteAuthor}
                    editpath={path.editAuthor}
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
            <AddButton type={"form"} addUrl={path.addAuthor} />
            <AntdTable columns={columns} tableEndPoint={points.GetAuthors} />
        </>
    );
};

export default page;