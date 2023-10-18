"use client"
import { Button, Table, Form, Modal, Input } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { postData } from '../../../service/fetchData';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeEditState, changeModelState, updateTable } from '../../../store/slice/tableStateSlice';
import SearchInput from './search';
import { Components } from '../../../constants/components';

// eslint-disable-next-line @next/next/no-async-client-component
const AntdTable = ({ columns, tableEndPoint, addEndPoind, getItemEndPoint, editEndPoint, formFields }: any) => {

    const dispatch = useDispatch();
    const { isModalOpen, editState, id, tableUpdateNumber, search, editData } = useSelector((state: any) => state.tableState);

    const [pagination, setPagination] = useState({
        "current": 1,
        "pageSize": 10,
        "search": search
    });
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [total, setTotal] = useState<number>();

    const [postLoading, setPostLoading] = useState(false);
    const [form] = Form.useForm();


    //-------------- Start Table ----------------//
    //-------------------------------------------//
    const getTableData = async () => {
        try {
            setLoading(true)
            const response = await postData(pagination, tableEndPoint)
            setDataSource(response?.data.data)
            setTotal(response?.data.total)
            setLoading(!response?.status)
        } catch (err) {
            throw new Error("message :" + err)
        }
    }
    const handleTableChange = (
        pagination: TablePaginationConfig,
    ) => {
        console.info("pagination", pagination)
    };

    useEffect(() => {
        getTableData()
    }, [pagination, tableUpdateNumber])

    useEffect(() => {
        setPagination({
            "current": 1,
            "pageSize": 10,
            "search": search
        })
    }, [search])

    //---------------- End Table ----------------//
    //-------------------------------------------//

    //-------------- Start Model ----------------//
    //-------------------------------------------//



    const handleCancel = () => {
        dispatch(changeModelState(false));
        dispatch(changeEditState(false));
        form.resetFields();
    };

    const onFinish = async (values: any) => {
        try {
            setPostLoading(true)
            if (editState) {
                const data = { ...values, id }
                await postData(data, editEndPoint)
            } else {
                await postData(values, addEndPoind)
            }
            dispatch(updateTable(tableUpdateNumber + 1))
            setPostLoading(false)
            handleCancel();
        } catch (err) {
            throw new Error("message :" + err)
        }
    };

    useEffect(() => {
        editState && form.setFieldsValue(editData);
    }, [editState])

    //---------------- End Model ----------------//
    //-------------------------------------------//

    return (
        <>
            <div>
                <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    cancelText="Cancel"
                    onCancel={handleCancel}
                    footer={[
                        <Button key="cancel" type="dashed" onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            loading={postLoading}
                            onClick={() => {
                                form
                                    .validateFields()
                                    .then((values) => {
                                        onFinish(values);
                                    })
                                    .catch((info) => {
                                        console.log("Validate Failed:", info);
                                    });
                            }}
                        >
                            Submit
                        </Button>
                    ]}
                >
                    <Form
                        name="basic"
                        form={form}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 17 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        autoComplete="off">
                        {formFields?.map((field: any, index: any) =>
                            React.createElement(Components[field.component], { placeholder: field.placeholder, type: field.type, ...field.data, selectOption: field.selectOption })
                        )}
                    </Form>
                </Modal>
            </div >
            <SearchInput />
            <Table
                rowKey="id"
                loading={loading}
                pagination={{
                    ...pagination, total, onChange(page, pageSize) {
                        setPagination({ current: page, pageSize: pageSize, search: search })
                    },
                    showSizeChanger: true,
                    showQuickJumper: true,
                }}
                dataSource={dataSource} columns={columns}
                //scroll={{ x: 0, y: 350 }}
                size="small"
                onChange={handleTableChange} />
        </>
    );
};

export default AntdTable;