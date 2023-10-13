import AntdTable from "../../../../components/Antd/Table/table";
import { points } from "../../../../service/endPoints";
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

];

const page = () => {

    return (
        <div>
            <AntdTable columns={columns} endPoint={points.GetBranches} />
        </div>
    );
};

export default page;