"use client"
import { Button, Checkbox, Form, Image, message, notification } from 'antd';
import React, { useState } from 'react';
import { Components } from '../../../constants/components';
import { loginFields } from '../../../constants/formFields';
import { useRouter } from 'next/navigation';
import { path } from '../../../service/path';
import { signIn } from 'next-auth/react';
import Error from '../../service/error';
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Login = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>()
    const router = useRouter();
    const [disabled, setDisabled] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Login Authenticated',
            description:
                'Hello,You are welcome',
        });
    };

    const onFinish = async (values: any) => {
        setLoading(true)
        setDisabled(true)
        console.info("values", values)
        const res = await signIn("credentials", {
            userName: values.userName,
            password: values.password,
            redirect: false,
            // callbackUrl: '/app/books'
        });
        setLoading(false)
        setDisabled(false)
        setError(res?.status)

        if (!res?.error) {
            openNotificationWithIcon("success")
            router.push(`/${path.authors}`)
        }
    };

    console.info("error", error)
    return (
        <div className='login'>
            {contextHolder}
            <div className="logo">
                <Image
                    width={"50%"}
                    src="/images/logo.png"
                    preview={false}
                    alt="no-image"
                />
            </div>
            <h3 className='title'>Sign In</h3>
            <Error code={error} title="Erorr" description="Username or password incorrect" />
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
                    React.createElement(Components[field.component], { placeholder: field.placeholder, disabled: disabled, type: field.type, ...field.data, selectOption: field.selectOption })
                )}
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 0, span: 24 }}
                >
                    <Checkbox disabled={disabled}>Remember me</Checkbox>
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