"use client"
import { BiMoneyWithdraw } from "react-icons/bi";
import Action from "../../../../components/Antd/Table/action";
import AddButton from "../../../../components/Antd/Table/addButton";
import AntdTable from "../../../../components/Antd/Table/table";
import AntdTag from "../../../../components/Antd/Tag/tag";
import { invoiceFields, orderFields } from "../../../../constants/formFields";
import { points } from "../../../../service/endPoints";
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
import { Components } from "../../../../constants/components";
import { postData } from "../../../../service/fetchData";
import { useDispatch } from "react-redux";
import { updateTable } from "../../../../store/slice/tableStateSlice";

interface DataType {
    id: number;
    isInvoiced: boolean;
    total: number;
    profitTotal: number;
    branchId: number;
    bookVersionId: number;
    bookCount: number;
}

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [orderId, setOrderId] = useState();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const columns: ColumnsType = [
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
                const Tag = value
                    ? <AntdTag color="#87d068" chidren="Invoiced" />
                    : <AntdTag color="#108ee9" chidren="Not Invoiced" />
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
            title: 'BookVersion Number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Book Name',
            dataIndex: 'bookName',
            key: 'bookName',
        },
        {
            title: 'Book Count',
            dataIndex: 'bookCount',
            key: 'bookCount',
        },
        {
            title: 'Is Invoiced',
            key: 'id',
            dataIndex: 'id',
            render(value, record: any) {
                return (
                    <span
                        className={record.isInvoiced ? `is-invoiced` : `not-invoiced`
                        }
                        style={{}}
                        onClick={() => {
                            setIsModalOpen(true);
                            setOrderId(value)
                            form.setFieldsValue(record);
                        }}>
                        <BiMoneyWithdraw />
                    </span >
                )
            },
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'id',
            render(value, record) {
                return (
                    <Action
                        deleteUrl={points.DeleteOrder}
                        id={value}
                        type={"model"}
                        data={record}
                    />
                )
            },
        }
    ];
    const onFinish = async (values: any) => {
        const data = { ...values, orderId }
        setLoading(true);
        await postData(data, points.CreateInvoice)
        setIsModalOpen(false);
        dispatch(updateTable())
        setLoading(false);
    }

    return (
        <>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={onFinish}
                cancelText="Cancel"
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="cancel" type="dashed" onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={loading}
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
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    form={form}
                    autoComplete="off"
                >
                    {invoiceFields?.map((field: any, index: any) =>
                        React.createElement(
                            Components[field.component],
                            { placeholder: field.placeholder, type: field.type, ...field.data, selectOption: field.selectOption }
                        )
                    )}
                </Form>
            </Modal>
            <AddButton />
            <AntdTable columns={columns} tableEndPoint={points.GetOrders} addEndPoind={points.CreateOrder} getItemEndPoint={points.GetOrder} editEndPoint={points.UpdateOrder} formFields={orderFields} />
        </>
    );
};

export default Page;