import React, { useState } from 'react'
import './doctor.css'

import {
    Button,
    Col,
    Form,
    Input,
    message,
    Modal,
    notification,
    Popconfirm,
    Row,
    Tag,
    Tabs,
    Upload,
    Table,
    Typography,
    Space,
    Dropdown,
    Menu,
    Radio,
    Select, form, DatePicker
} from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    UsergroupDeleteOutlined,
    UploadOutlined,
} from "@ant-design/icons";


function DoctorList() {
    const [listImage, setListImage] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [form] = Form.useForm();
    const { Option } = Select;
    const { confirm } = Modal;
    const fileList = [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'yyy.png',
            status: 'error',
        },
    ];
    const showDeleteConfirm = () => {
        confirm({
            title: 'DELETE DOCTOR',
            icon: <UsergroupDeleteOutlined />,
            content: 'Are you sure delete this user',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const createPost = () => {
        setIsModalOpen(true);
        form.resetFields()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
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
    const dataSource = [
        {
            key: '1',
            no: '1',
            name: 'Vi nguyen',
            email: 'vi.nguyen7285@gmail.com',
            department: 'ate to sleep'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'NO',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Action',
            render: (text, record) => {
                return <Space>
                    <Button className='action'
                    ><EditOutlined /></Button>

                    <Button className='action'
                        onClick={() => showDeleteConfirm()}><DeleteOutlined /></Button>
                </Space>
            },
        },
    ];
    return (
        <>

            <Button type="primary" onClick={() => createPost()}>
                Create User
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={() => handleCancel()}
                footer={
                    <Space>
                        <Button onClick={() => handleCancel()}>Đóng</Button>
                        <Button type='primary' htmlType='submit' form='form'>Gửi đi</Button>
                    </Space>
                }>
                <Form
                    form={form}
                    name="form"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    initialValues={{ remember: true, }}
                    autoComplete="off"
                    layout='horizontal'
                >
                    {/* ID */}
                    <Form.Item
                        label="ID"
                        name="id"
                    >
                        <Input disabled={true} />
                    </Form.Item>
                    {/* Tên */}
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please fill your name",
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
                    {/* Chọn khoa */}
                    <Form.Item
                        label="Department"
                        name="department"
                    >
                        <Select placeholder="Loại">
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
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
                </Form>
            </Modal>
            <br />
            <Table dataSource={dataSource} columns={columns} />;

        </>
    )
}

export default DoctorList