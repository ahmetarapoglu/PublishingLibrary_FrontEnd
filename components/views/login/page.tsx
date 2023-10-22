"use client"
import { Button, Checkbox, Form, Image, message } from 'antd';
import React, { useState } from 'react';
import { Components } from '../../../constants/components';
import { loginFields } from '../../../constants/formFields';
import { useRouter } from 'next/navigation';
import { path } from '../../../service/path';
import { signIn, useSession } from 'next-auth/react';

const Login = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const { data: session, status }: any = useSession()
    const onFinish = async (values: any) => {
        setLoading(true)
        const res = await signIn("credentials", {
            userName: values.userName,
            password: values.password,
            redirect: false,
            // callbackUrl: '/app/books'
        });
        setLoading(false)

        if (res?.status === 401) {
            message.error('Username or password is incorrect - please try again', 1.5)
        }
        if (!res?.error) {
            message.success('Login Authenticated', 1.5)
            router.push(`/${path.authors}`)
        }
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
                autoComplete="true">
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