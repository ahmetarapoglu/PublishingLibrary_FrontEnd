import AntdTable from "../../../../components/Antd/Table/table";
import { points } from "../../../../service/endPoints";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    id: number;
    isInvoiced: boolean;
    total: number;
    profitTotal: number;
    branchId: number;
    bookVersionId: number;
    bookCount: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'IsInvoiced',
        dataIndex: 'isInvoiced',
        key: 'isInvoiced',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'ProfitTotal',
        dataIndex: 'profitTotal',
        key: 'profitTotal',
    },
    {
        title: 'BranchId',
        dataIndex: 'branchId',
        key: 'branchId',
    },
    {
        title: 'BookVersionId',
        dataIndex: 'bookVersionId',
        key: 'bookVersionId',
    },
    {
        title: 'BookCount',
        dataIndex: 'bookCount',
        key: 'bookCount',
    }
];
const page = () => {
    return (
        <div>
            <AntdTable columns={columns} endPoint={points.GetOrders} />
        </div>
    );
};

export default page;