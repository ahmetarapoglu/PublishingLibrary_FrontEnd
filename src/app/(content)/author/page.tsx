import AntdTable from '../../../../components/Antd/Table/table';
import { points } from '../../../../service/endPoints';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    id: number;
    categoryName: string;
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
    }
];

const page = async () => {

    return (
        <div>
            <AntdTable columns={columns} endPoint={points.GetAuthors} />
        </div>
    );
};

export default page;