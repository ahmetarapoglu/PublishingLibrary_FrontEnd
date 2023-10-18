"use client"
import Action from "../../../../components/Antd/Table/action";
import AddButton from "../../../../components/Antd/Table/addButton";
import AntdTable from "../../../../components/Antd/Table/table";
import { branchFields } from "../../../../constants/formFields";
import { points } from "../../../../service/endPoints";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    id: number;
    branchName: string;
    branchAddress: string;
    phoneNumber: string;
    totalAmount: string;
    totalPayment: string;
    remainingPayment: string;
    footer?: any
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Branch Name',
        dataIndex: 'branchName',
        key: 'branchName',
    },
    {
        title: 'Branch Address',
        dataIndex: 'branchAddress',
        key: 'branchAddress',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Total Amount',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
    },
    {
        title: 'Total Payment',
        dataIndex: 'totalPayment',
        key: 'totalPayment',
    },
    {
        title: 'Remaining Payment',
        dataIndex: 'remainingPayment',
        key: 'remainingPayment',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render(value, record) {
            return (
                <Action
                    deleteUrl={points.DeleteBranch}
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
            <AntdTable columns={columns} tableEndPoint={points.GetBranches} addEndPoind={points.CreateBranch} getItemEndPoint={points.GetBranch} editEndPoint={points.UpdateBranch} formFields={branchFields} />
        </>
    );
};

export default page;