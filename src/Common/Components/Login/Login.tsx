import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, ConfigProvider, Card } from 'antd';
import '../../../Common/Common.css';

import Header from '../Header/Header.tsx';

const Login: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const theme = {
        token: {
            fontFamily:'Arial',
            colorTextBase:'#022b3a',
        },
    };

    return (
        <ConfigProvider theme={theme}>
            <Header/>
            <Card className="login-card">
            <h2>Welcome!</h2>
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{
                    margin: '100',
                }}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Log in
                    </Button>
                    <Button block type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </ConfigProvider>
    );

}

export default Login;
