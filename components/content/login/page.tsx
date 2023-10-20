"use client"
import { Button, Checkbox, Form, Image } from 'antd';
import React, { useState } from 'react';
import { Components } from '../../../constants/components';
import { loginFields } from '../../../constants/formFields';
import { postData } from '../../../service/fetchData';
import { points } from '../../../service/endPoints';
import { useRouter } from 'next/navigation';
import { path } from '../../../service/path';
import { signIn } from 'next-auth/react';
import { FallingLines } from 'react-loader-spinner';

const Login = () => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const onFinish = async (values: any) => {
        const res = await signIn("credentials", {
            userName: values.userName,
            password: values.password,
            redirect: false,
            callbackUrl: '/'
        });
        // const result = await res.json();
        console.info("resultresultresultresultresultresult", res)

        // try {
        //     setLoading(true)
        //     await postData(values, points.login);
        //     router.push(`/${path.books}`)
        //     setLoading(false)
        // } catch (err) {
        //     throw new Error("message :" + err)
        // }
    };

    return (
        <div className='login'>
            <div className="logo">
                <Image
                    width={"50%"}
                    src="/images/logo.png"
                    preview={false}
                    alt="no-image"
                />
            </div>
            <h3 className='title'>Sign In</h3>
            <Form
                name="basic"
                layout="vertical"
                form={form}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 800 }}
                onFinish={onFinish}
                autoComplete="off">
                {loginFields?.map((field: any, index: any) =>
                    React.createElement(Components[field.component], { placeholder: field.placeholder, type: field.type, ...field.data, selectOption: field.selectOption })
                )}
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 0, span: 24 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <Button type="primary" htmlType="submit" loading={loading} style={{ width: "100%" }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default Login;