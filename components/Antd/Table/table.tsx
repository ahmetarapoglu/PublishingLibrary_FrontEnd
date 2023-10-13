"use client"
import { Button, Table } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { postData } from '../../../service/fetchData';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @next/next/no-async-client-component
const AntdTable = ({ columns, endPoint }: any) => {

    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [pagination, setPagination] = useState({
        "current": 1,
        "pageSize": 10,
        "search": ""
    });
    const [total, setTotal] = useState<number>();

    const getData = async () => {
        setLoading(true)
        const response = await postData(pagination, endPoint)
        setDataSource(response?.data.data)
        setTotal(response?.data.total)
        setLoading(!response?.status)
    }

    const handleTableChange = (
        pagination: TablePaginationConfig,
    ) => {
        console.info("pagination", pagination)
    };

    useEffect(() => {
        getData()
    }, [pagination])

    return (
        <>
            <Table
                rowKey="id"
                loading={loading}
                pagination={{
                    ...pagination, total, onChange(page, pageSize) {
                        setPagination({ current: page, pageSize: pageSize, search: "" })
                    },
                    showSizeChanger: true,
                    showQuickJumper: true,
                }}
                dataSource={dataSource} columns={columns}
                scroll={{ x: 0, y: 520 }}
                onChange={handleTableChange} />
        </>
    );
};

export default AntdTable;