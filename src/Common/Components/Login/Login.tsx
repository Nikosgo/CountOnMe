import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, ConfigProvider, Card } from 'antd';

import '../../../Common/Common.css';
import Header from '../Header/Header.tsx';

import {checkUserPassword, fetchUserByEmail} from '../../../Api/UserApi.tsx';

const Login: React.FC = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const [error, setError] = useState<string>("");


    const onFinish = (values: any) => {
        setEmail(values.email);
        setPassword(values.password);
        authenticate(values.email, values.password);
    };

    const authenticate = (email, password) => {
        checkUserPassword(email, password).then(
            response => {
                console.log(response.data);
                if(response.data === false) {
                    console.log("Invalid Credentails");
                    setError("Invalid Credentails");
                }
                else {
                    console.log("Credentails are correct");
                }
            }
        );

        if(error === "") {
            fetchUserByEmail(email).then(
                response => {
                    console.log(response.data);
                    sessionStorage.setItem("user", JSON.stringify(response.data))
                    setUser(response.data);
                    setError("");
                    navigate('/home');
                }
            ).catch(err => {
                console.error('Error fetching user:', err);
                setError("Failed to fetch user.");
            });
        }
    }

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
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="email" />
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
            {error && <p style={{ color: "red" }}>{error}</p>}
        </ConfigProvider>
    );

}

export default Login;
