import React from 'react'
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
    Select,
} from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    DownOutlined,
    UserOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    PlusOutlined,
    UploadOutlined,
} from "@ant-design/icons";

function DoctorList() {
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
                    <Button className='action'><EditOutlined /></Button>

                    <Button className='action'><DeleteOutlined /></Button>
                </Space>
            },
        },
    ];
    return (
        <>
            <button>Create Post</button>
            <br />
            <Table dataSource={dataSource} columns={columns} />;

        </>
    )
}

export default DoctorList