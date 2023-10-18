"use client"
import Action from "../../../../components/Antd/Table/action";
import AddButton from "../../../../components/Antd/Table/addButton";
import AntdTable from "../../../../components/Antd/Table/table";
import { userFields } from "../../../../constants/formFields";
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
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render(value, record) {
            return (
                <Action
                    deleteUrl={points.DeleteUser}
                    id={value}
                    type={"model"}
                    data={record}
                />
            )
        },
    }
];

const page = () => {
    return (
        <>
            <AddButton />
            <AntdTable columns={columns} tableEndPoint={points.GetUsers} addEndPoind={points.AddUser} getItemEndPoint={points.GetUser} editEndPoint={points.UpdateUser} formFields={userFields} />
        </>
    );
};

export default page;