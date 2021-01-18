import React, {useState} from 'react';
import {Redirect, useHistory} from "react-router-dom";
import axios from "axios";

import './Register.less'

import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


const Register = () => {
    const [form] = Form.useForm();
    const newCustomer = {}
    axios.post("/customers", newCustomer)
        .then(savedCustomer => {/*Do something with customer*/})
        .catch(err => {/*Do something with error, e.g. show error to customer*/})

    const onFinish = (values) => {
        const newCustomer = {...values,isAdmin: false}
        console.log(newCustomer)
        console.log('Received values of form: ', values);
    };


    const history = useHistory();

    const toLoginPage = () => {
        history.push(`/login`);
    };


    return (

        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                phone: 380
            }}
            scrollToFirstError
        >
            <Form.Item>Registration Form</Form.Item>
            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your First Name!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="lastName"
                label="last Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Last Name!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="login"
                label="Login"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Login',
                    },
                ]}
            >
                <Input/>
            </Form.Item>


            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{
                    required: true,
                    message: 'Please input your phone number!'
                }]}
            >
                <Input
                    style={{width: '100%'}}/>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <a href="#" onClick={toLoginPage}>Already registered?(redirect to Login)</a>
            </Form.Item>
        </Form>
    );
};

export default Register