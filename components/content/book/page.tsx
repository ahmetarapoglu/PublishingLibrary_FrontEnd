"use client"
import { Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { Components } from '../../../constants/components';
import { bookFields } from '../../../constants/formFields';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getData, postData } from '../../../service/fetchData';
import { points } from '../../../service/endPoints';
import { path } from '../../../service/path';

const BookForm = (id: any) => {

    const { editData, editState } = useSelector((state: any) => state.tableState);

    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const onFinish = async (values: any) => {

        const data = {
            title: values.title,
            description: values.description,
            publishedDate: values.publishedDate,
            categoryId: values.categoryId,
            bookAuthors: {
                authorId: values.authorId,
                auhorRatio: values.auhorRatio,
            },
            bookVersions: {
                bookCount: values.bookCount,
                costPrice: values.costPrice,
                sellPrice: values.sellPrice,
                libraryRatio: values.libraryRatio,
            },
        }

        try {
            setLoading(true)
            if (editState) {
                await postData({ ...data, id: editData.id }, points.UpdateBook);
            } else {
                await postData(data, points.CreateBook);
            }
            setLoading(false)
            router.push(`app//${path.books}`)
        } catch (err) {
            throw new Error("message :" + err)
        }
    };

    const getAuthor = async () => {
        try {
            const response = await getData(`${points.GetBook}/${id.id}`);
            const data = {
                ...response.data,
                ...response.data.bookAuthors,
                ...response.data.bookVersions,
            }
            form.setFieldsValue(data);
        } catch (err) {
            throw new Error("message :" + err)
        }
    }

    useEffect(() => {
        const data = {
            ...editData,
            ...editData.bookAuthors,
            ...editData.bookVersions,
        }
        if (!editState && id.id) {
            getAuthor()
        }
        else {
            editState && form.setFieldsValue(data);
        }
    }, [editState, router.refresh])

    return (
        <div>
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 17 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                autoComplete="off">
                {bookFields?.map((field: any, index: any) =>
                    React.createElement(Components[field.component], { placeholder: field.placeholder, type: field.type, ...field.data, selectOption: field.selectOption })
                )}
                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BookForm;