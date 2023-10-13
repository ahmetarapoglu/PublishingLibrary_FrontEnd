"use client"
import AntdTable from "../../../../components/Antd/Table/table";
import { points } from "../../../../service/endPoints";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    id: number;
    isInvoiced: boolean;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Is Invoiced',
        dataIndex: 'isInvoiced',
        key: 'isInvoiced',
    },
    {
        title: 'Order ID',
        dataIndex: ['order', 'id'],
        key: 'orderId',
    },
    {
        title: 'Order Total',
        dataIndex: ['order', 'total'],
        key: 'orderTotal',
    },
    {
        title: 'Order ProfitTotal',
        dataIndex: ['order', 'profitTotal'],
        key: 'orderTotal',
    },
    {
        title: 'Order BranchId',
        dataIndex: ['order', 'branchId'],
        key: 'orderTotal',
    },
    {
        title: 'Order BookVersionId',
        dataIndex: ['order', 'bookVersionId'],
        key: 'orderTotal',
    },
    {
        title: 'Order BookCount',
        dataIndex: ['order', 'bookCount'],
        key: 'orderTotal',
    },
];
const page = () => {
    return (
        <div>
            <AntdTable columns={columns} endPoint={points.GetInvoices} />
        </div>
    );
};

export default page;