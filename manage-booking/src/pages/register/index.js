import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './register.css'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function Register() {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    return (
        <>
            <Form style={{ marginTop: "4%" }}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}

            >
                <Form.Item label="Email:">
                    <Input />
                </Form.Item>
                <Form.Item label="Password:">
                    <Input.Password />
                </Form.Item>
                <Form.Item label="First Name:">
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name:">
                    <Input />
                </Form.Item>
                <Form.Item label="Address:">
                    <Input />
                </Form.Item>
                <Form.Item label="Radio">
                    <Radio.Group>
                        <Radio value="male"> Male </Radio>
                        <Radio value="female"> Female </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Phone:">
                    <Input />
                </Form.Item>
                <Form.Item label="Picture" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Button className='submit'>Submit</Button>
            </Form>
        </>
    )
}

export default Register