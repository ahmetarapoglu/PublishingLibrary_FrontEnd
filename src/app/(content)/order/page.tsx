"use client"
import Action from "../../../../components/Antd/Table/action";
import AntdTable from "../../../../components/Antd/Table/table";
import AntdTag from "../../../../components/Antd/Tag/tag";
import { orderFields } from "../../../../constants/formFields";
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
        render: (value: boolean) => {
            const Tag = value ? <AntdTag color="#87d068" chidren="Invoiced" /> : <AntdTag color="#108ee9" chidren="Not Invoiced" />
            return Tag
        }
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Profit Total',
        dataIndex: 'profitTotal',
        key: 'profitTotal',
    },
    {
        title: 'Branch Name',
        dataIndex: 'branchName',
        key: 'branchName',
    },
    {
        title: 'BookVersion Id',
        dataIndex: 'bookVersionId',
        key: 'bookVersionId',
    },
    {
        title: 'Book Count',
        dataIndex: 'bookCount',
        key: 'bookCount',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render(value) {
            return (
                <Action
                    deleteUrl={points.DeleteOrder}
                    id={value}
                    type={"model"}
                />
            )
        },
    }
];
const page = () => {
    return (
        <div>
            <AntdTable columns={columns} tableEndPoint={points.GetOrders} addEndPoind={points.CreateOrder} getItemEndPoint={points.GetOrder} editEndPoint={points.UpdateOrder} formFields={orderFields} />
        </div>
    );
};

export default page;