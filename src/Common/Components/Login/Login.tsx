import React, { useState } from "react";
import axios from 'axios';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, ConfigProvider } from 'antd';
import '../../../Common/Common.css';

import Header from '../Header/Header.tsx';

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const [error, setError] = useState<string>("");


    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        setEmail(values.email);
        setPassword(values.password);
        authenticate(email, password);
    };

    const authenticate = async (email, password) => {
        try {
            await axios.get(`http://localhost:8000/api/user/${email}`)
                .then(
                    (response) => {
                        console.log(response.data)

                        if(response.data == null) {
                            console.log("Unable to find email!");
                            setError("Email not found");
                        }
                        else {
                            setUser(response.data);

                            if(password === user.password) {
                                console.log("Correct credentials");
                                setError("")
                            }
                            else {
                                console.log("Incorrect credetials");
                                setError("Invalid email or password")
                            }
                        }
                    }
                )
            ;
        } catch (err: any) {
            console.error("Error fetching user:", err);
            setError(err.response?.data?.message);
            setUser(null); // Clear previous user data
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
            {error && <p style={{ color: "red" }}>{error}</p>}
        </ConfigProvider>
    );

}

export default Login;
