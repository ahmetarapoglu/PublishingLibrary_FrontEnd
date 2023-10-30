"use client"
import AddButton from '../../../../../components/Antd/Table/addButton';
import AntdTable from '../../../../../components/Antd/Table/table';
import { ColumnsType } from 'antd/es/table';
import { DataType } from '../../../../../store/slice/tableStateSlice';
import { points } from '../../../../../service/endPoints';
import Action from '../../../../../components/Antd/Table/action';
import { versionBookFields } from '../../../../../constants/formFields';
const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Book Count',
        dataIndex: 'bookCount',
        key: 'bookCount',
    },
    {
        title: 'Cost Price',
        dataIndex: 'costPrice',
        key: 'costPrice',
    },
    {
        title: 'Total Cost Price',
        dataIndex: 'totalCostPrice',
        key: 'totalCostPrice',
    },
    {
        title: 'Sell Price',
        dataIndex: 'sellPrice',
        key: 'sellPrice',
    },
    {
        title: 'Total Sell Price',
        dataIndex: 'totalSellPrice',
        key: 'totalSellPrice',
    },
    {
        title: 'Library Ratio',
        dataIndex: 'libraryRatio',
        key: 'libraryRatio',
    },
    {
        title: 'Action',
        key: 'id',
        dataIndex: 'id',
        render(value, record) {
            return (
                <Action
                    deleteUrl={points.DeleteVersion}
                    id={value}
                    type={"model"}
                    data={record}
                />
            )
        },
    }

];
const page = ({ searchParams }: any) => {
    return (
        <>
            <AddButton />
            <AntdTable columns={columns} tableEndPoint={points.GetVersions} searchParams={searchParams.id} addEndPoind={points.CreateVersion} getItemEndPoint={points.GetVersion} editEndPoint={points.UpdateVersion} formFields={versionBookFields} />
        </>
    );
};

export default page;