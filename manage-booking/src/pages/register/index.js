import React from 'react'
import { CheckOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './register.css'
import userService from '../../api/register';
import {
    Form,
    Input,
    Button,
    Radio,
    Row,
    Col,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
    notification,
} from 'antd';

function Register() {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [form] = Form.useForm()

    const onSubmit = (values) => {
        const params = { ...values, gender: true, image: "https://znews-photo.zingcdn.me/w210/Uploaded/bzivolby/2022_03_27/phang.jpg" }
        userService.addUser(params).then(res => {
            if (res) {
                notification.open({
                    icon: <CheckOutlined style={{ color: "green" }} />,
                    message: 'REGISTER',
                    description: 'register success'
                });

            }
        })
        form.resetFields()
    }
    return (
        <>
            <div className='container'>
                <Row>
                    <Col span={14}>
                        <div className='left'>
                            <img src='arrow-down-2828.png' />
                            <h1 style={{ color: 'white', fontSize: 40 }}>Join Us</h1>
                            <p style={{ fontSize: 17 }}>Welcome to our hospital <br />
                                Thank you for your interest in our services</p>
                            <Button className='btn-SM'>About Us</Button>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='right'>
                            <h1>Register</h1>
                            <div className='register-Form'>
                                <Form
                                    form={form}
                                    name="form"
                                    labelCol={{ span: 5 }}
                                    wrapperCol={{ span: 19 }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onSubmit}
                                    autoComplete="off"
                                    layout='horizontal'
                                >

                                    {/* Tên */}
                                    <Form.Item
                                        label="User Name"
                                        name="userName"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please fill your User name",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Full Name"
                                        name="fullName"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please fill full name",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    {/* Email */}
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please fill your email",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    {/* Password */}
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please fill your email",
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    {/* Điện thoại */}
                                    <Form.Item
                                        label="Phone"
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please fill your phone",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>


                                    {/* Chọn ngày sinh */}
                                    <Form.Item
                                        label="BirthDay"
                                        name="birthday"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please choose your day of birth",
                                            },
                                        ]}
                                    >

                                        <DatePicker
                                            format={dateFormatList}
                                            style={{ width: '100%' }} />


                                    </Form.Item>
                                    {/* Chọn giới tính */}
                                    <Form.Item
                                        label="Gender"
                                        name="gender"
                                    >
                                        <Radio.Group name="radiogroup" initialValues={1}>
                                            <Radio value={1}>Male</Radio>
                                            <Radio value={2}>Female</Radio>
                                        </Radio.Group>
                                    </Form.Item>

                                    {/* Địa chỉ */}
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please fill your address",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Button className='submit' htmlType='submit' form='form'>Submit</Button>

                                </Form>
                            </div>
                        </div></Col>
                </Row>

            </div>

        </>
    )
}

export default Register