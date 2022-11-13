import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './register.css'
import {

    Form,
    Input,
    Button,
    Radio,
    Row,
    Col,
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
    const [listImage, setListImage] = useState([])
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    const uploadImage = (event) => {
        setListImage([...listImage, event.target.files[0]])
    }
    const deleteImage = (i) => {
        setListImage([
            ...listImage.slice(0, i),
            ...listImage.slice(i + 1)
        ])
    }
    return (
        <>

            <h1 style={{ textAlign: 'center', color: 'orangered', marginTop: "4%" }}>Register</h1>
            <Form style={{ marginTop: "2%" }}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}

            >
                {/* user name */}
                <Form.Item label="User name:">
                    <Input />
                </Form.Item>

                {/* full name */}
                <Form.Item label="Fullname:">
                    <Input />
                </Form.Item>

                {/* email */}
                <Form.Item label="Email:">
                    <Input />
                </Form.Item>

                {/* Password */}
                <Form.Item label="Password:">
                    <Input.Password />
                </Form.Item>

                {/* Phone */}
                <Form.Item label="Phone:">
                    <Input />
                </Form.Item>

                {/* birthday */}
                <Form.Item label="Birthday:">
                    <DatePicker
                        format={dateFormatList}
                        style={{ width: '100%' }} />
                </Form.Item>

                {/* Gender */}
                <Form.Item label="Gender:">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                    </Radio.Group>
                </Form.Item>

                {/* address */}
                <Form.Item label="Address:">
                    <Input />
                </Form.Item>

                {/* Upload hình ảnh */}
                <Form.Item
                    label="Upload"
                    name="upload">
                    <div className="upload-btn-wrapper">
                        <button className="btn"><UploadOutlined /></button>
                        <input type="file" name="myfile" onChange={uploadImage} />
                    </div>
                    <br />
                    <Row gutter={24}>
                        {
                            listImage && listImage.map((item, index) =>
                                <Col xs={24} md={12} key={index}>
                                    <div className="container">
                                        <img src={URL.createObjectURL(item)} alt="Avatar" className="image" />
                                        <div className="middle">
                                            <div className="text" onClick={() => deleteImage(index)}>Xoa</div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                </Form.Item>
                <Button className='submit'>Submit</Button>
            </Form>

        </>
    )
}

export default Register