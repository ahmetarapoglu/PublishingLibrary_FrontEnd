"use client"
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getData, postData } from "../../../service/fetchData";
import { points } from "../../../service/endPoints";
import { path } from "../../../service/path";
import { authorFields } from "../../../constants/formFields";
import { Components } from "../../../constants/components";
import { useSelector } from "react-redux";

const AuthorPage = (id: any) => {
    const { editData, editState } = useSelector((state: any) => state.tableState);

    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const onFinish = async (values: any) => {
        const data = {
            nameSurname: values.nameSurname,
            authorAddress: {
                country: values.country,
                city: values.city,
                postCode: values.postCode,
            },
            authorBiography: {
                email: values.email,
                phoneNumber: values.phoneNumber,
                nativeLanguage: values.nativeLanguage,
                education: values.education,
            },
        }
        try {
            setLoading(true)
            if (editState) {
                await postData({ ...data, id: editData.id }, points.UpdateAuthor);
            } else {
                await postData(data, points.CreateAuthor);
            }
            setLoading(false)
            router.push(`/${path.authors}`)
        } catch (err) {
            throw new Error("message :" + err)
        }
    };

    const getAuthor = async () => {
        console.info("id.id", id.id)
        try {
            const response = await getData(`${points.GetAuthor}/${id.id}`);
            const data = {
                ...response.data,
                ...response.data.authorAddress,
                ...response.data.authorBiography,
            }
            form.setFieldsValue(data);
        } catch (err) {
            throw new Error("message :" + err)
        }
    }

    useEffect(() => {
        console.info("editState", editState)
        const data = {
            ...editData,
            ...editData.authorAddress,
            ...editData.authorBiography,
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
                {authorFields?.map((field: any, index: any) =>
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

export default AuthorPage;