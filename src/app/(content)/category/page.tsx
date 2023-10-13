"use client"
import type { ColumnsType } from 'antd/es/table';
import { points } from '../../../../service/endPoints';
import AntdTable from '../../../../components/Antd/Table/table';
import Action from '../../../../components/Antd/Table/action';
import { path } from '../../../../service/path';
import { Button, Form, Modal, Input, Space } from 'antd';
import { useState } from 'react';
import { postData } from '../../../../service/fetchData';

interface DataType {
    id: number;
    categoryName: string;
}
type FieldType = {
    categoryName?: string;
};

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'categoryName',
        dataIndex: 'categoryName',
        key: 'categoryName',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'id',
        render(value, record, index) {
            return (
                <Action
                    editUrl={path.edit}
                    deleteUrl={points.DeleteCategory}
                    id={value}
                />
            )
        },
    }

];


const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };
    const onFinish = async (values: any) => {
        try {
            setLoading(true)
            await postData(values, points.CreateCategory);
            setLoading(false)
            handleCancel();
        } catch (err) {
            throw new Error("message :" + err)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Button type="primary" onClick={showModal} style={{ width: "150px", marginBottom: "10px", float: "right" }}>
                Add
            </Button>
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
                    form={form}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 17 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item<FieldType>
                        label="Category Name"
                        name="categoryName"
                        rules={[{ required: true, message: 'Please input your Category Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <AntdTable columns={columns} endPoint={points.GetCategoties} />
        </div>
    );
};

export default Page;