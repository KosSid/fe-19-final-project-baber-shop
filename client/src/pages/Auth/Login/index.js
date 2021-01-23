import React, {useState} from 'react'
// import './styles.less'
import {Link} from "react-router-dom";
import Ajax from "../../../services/Ajax";

import {Modal, Form, Input, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';


const LoginFormInModal = ({visible, onSubmit, onCancel}) => {
    const [form] = Form.useForm();

    const onOk = () => {
        form.validateFields()
            .then((userData) => {
                form.resetFields();
                onSubmit(userData);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    }
    return (
        <Modal
            visible={visible}
            title="LogIn"
            okText="Log in"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onOk}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item
                    name="loginOrEmail"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username or Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item className='test-elements-class'>
                    <Link to="/forgot/password">Forgot password?</Link>
                </Form.Item>
                <Form.Item className='test-elements-class'>
                    Do not have an account?
                    <Link to="/register"> Register now!</Link>
                </Form.Item>

            </Form>
        </Modal>
    );
};

const Login = ({history}) => {
    const [visible, setVisible] = useState(false);
    const key = 'updatable';

    const onSubmit = (userData) => {
        console.log('Received user data of login form: ', userData);
        message.loading({content: 'Loading...', key});

        Ajax.post('/customers/login', userData)
            .then(loginResult => {
                setTimeout(() => {
                    message.success({content: 'Successful!', key, duration: 2});
                }, 500);
                localStorage.setItem('token', loginResult.token);
                history.push('/home')
            })
            .catch(err => {
                const error = err.response.data;
                setTimeout(() => {
                    message.error({content: error.loginOrEmail || error.password, key, duration: 3});
                }, 500);
            })
    };

    return (
        <div>
            <div style={{height: 80 + 'px', fontSize: 40+'px', fontWeight: 700}}
                 onClick={() => {
                     setVisible(true);
                 }}
            >
                LogIn
            </div>
            <LoginFormInModal
                visible={visible}
                onSubmit={onSubmit}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default Login