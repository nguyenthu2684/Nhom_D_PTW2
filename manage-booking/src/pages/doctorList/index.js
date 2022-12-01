import './userManager.css';
import { Space, Table, Modal, Button, Form, Input, InputNumber, Select, Switch, notification, DatePicker, Radio, Row, Col } from "antd"
import { useEffect, useState } from 'react';
import userService from './../../api/manage-user';

import { UploadOutlined, UsergroupDeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
const Users = () => {
    const { confirm } = Modal;
    const [form] = Form.useForm()
    const [studentList, setUserList] = useState([])
    const [listImage, setListImage] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, seIsLoading] = useState(false);
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [isEdit, setIsEdit] = useState(true);

    useEffect(() => {
        loadListUser()
    }, [])

    const loadListUser = () => {
        seIsLoading(true)
        userService.listUser().then((res) => {
            if (res) {
                setUserList(res)
                seIsLoading(false)
            }
        })
    }
    const onDelete = async (id) => {
        confirm({
            title: 'DELETE DOCTOR',
            icon: <UsergroupDeleteOutlined />,
            content: 'Are you sure delete this user',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                userService.deleteUser(id).then(res => {
                    if (res) {
                        loadListUser()
                        notification.open({
                            icon: <CheckOutlined style={{ color: "green" }} />,
                            message: 'DELETE',
                            description: 'Delete success'
                        });
                    }
                })
            },
            onCancel() {
                notification.open({
                    icon: <CloseOutlined style={{ color: "red" }} />,
                    message: 'DELETE',
                    description: 'Delete fail'
                });
            },
        });

    }
    const onEdit = (id) => {
        userService.detailUser(id).then(res => {
            if (res) {
                form.setFieldsValue({
                    id: res.id,
                    userName: res.userName,
                    fullName: res.fullName,
                    email: res.email,
                    phone: res.phone,
                    gender: res.gender,
                    address: res.address,
                    image: res.image,
                })
            }
        })
        setIsModalOpen(true);
        setIsEdit(true)
    }
    const columns = [
        {
            title: 'NO',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'UserName',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
        },

        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Img',
            dataIndex: 'image',
            key: 'image',
            render: (value) => <img src={value} width={100} height={100} alt="" />
        },
        {
            title: 'Action',
            render: (text, record) => {
                return <Space>
                    <button onClick={() => onEdit(record.id)}>Edit</button>

                    <button onClick={() => onDelete(record.id)}>Delete</button>
                </Space>
            },
        },
    ];
    const createUser = () => {
        setIsModalOpen(true);
        setIsEdit(false)
        form.resetFields()
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit = (values) => {
        if (isEdit) {
            // sua 
            userService.editUser(values.id, values).then(res => {
                console.log(res)
                if (res) {
                    loadListUser()
                }
            })
        } else {
            // tạo mới
            const params = { ...values, password: '123', image: "https://petshopsaigon.vn/wp-content/uploads/2020/11/cach-phoi-giong-cho-husky-2.jpg" }
            userService.addUser(params).then(res => {
                if (res) {
                    loadListUser()
                }
            })
        }

        form.resetFields()
        handleCancel()
    }

    const uploadImage = (event) => {
        setListImage([...listImage, event.target.files[0]])
    }

    const deleteImage = (i) => {
        setListImage([
            ...listImage.slice(0, i),
            ...listImage.slice(i + 1)
        ])
    }
    return (<div className='color'>
        <button onClick={() => createUser()}>Create User</button>
        <Table loading={isLoading} dataSource={studentList} columns={columns} rowKey="id" />
        <Modal
            title={isEdit ? "EDIT ACCOUNT" : "CREATE ACCOUNT"}
            visible={isModalOpen} onCancel={() => handleCancel()}
            footer={
                <Space>
                    <Button onClick={() => handleCancel()}>Cancel</Button>
                    <Button type='primary' htmlType='submit' form='form'>Submit</Button>
                </Space>
            }>
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

                {/* ID */}
                <Form.Item
                    label="ID"
                    name="id"
                >
                    <Input disabled={true} />
                </Form.Item>
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

                {/* Upload hình ảnh */}
                <Form.Item
                    label="Upload"
                    name="img">
                    {/* <Input /> */}

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
    </div>)
}

export default Users;