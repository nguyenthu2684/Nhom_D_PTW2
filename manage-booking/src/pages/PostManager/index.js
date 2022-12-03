import { Space, Table, Modal, Button, Form, Input, InputNumber, Select, Switch, notification } from "antd"
import { useEffect, useState } from 'react';
import { createStructuredSelector } from "reselect"
import { selectdetailPost, selectNewPost, selectPosts } from './store/selector';
import { asyncCreatePostAction, asyncDeletePostAction, asyncDetailPostAction, asyncEditPostAction, createPostAction, getAllPostAction } from './store/action'
import { connect } from "react-redux";
import { compose } from 'recompose';
import { UploadOutlined, UsergroupDeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

const PostManager = (props) => {
    const { confirm } = Modal;
    const { Option } = Select;
    const { TextArea } = Input;
    const [form] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, seIsLoading] = useState(false);
    const { getAllPostDispatch, createPostDispatch, editPostDispatch, deletePostDispatch, getDetailPostDispatch } = props
    const { listPost, newPost } = props;
    

    //Hiển thị danh sách
    useEffect(() => {
        getAllPostDispatch()
    }, [])

    //Xóa bài đăng
    const onDelete = async (id) => {
        const response = await deletePostDispatch(id)
        confirm({
            title: 'DELETE DOCTOR',
            icon: <UsergroupDeleteOutlined />,
            content: 'Are you sure delete this post',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                if (response.status === 200) {
                    getAllPostDispatch()
                    notification.open({
                        icon: <CheckOutlined style={{ color: "green" }} />,
                        message: 'Xóa bài viết',
                        description: 'Xóa bài viết thành công'
                    });
                }
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

    //Tạo mới
    const createPost = () => {
        setIsModalVisible(true);
        form.resetFields()
    };

    //Cancel chức năng
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //
    const onEdit = async (id) => {
        const res = await getDetailPostDispatch(id)
        if (res) {
            console.log(res.title)
            form.setFieldsValue({
                id: res.id,
                title: res.title,
                description: res.description,
                content: res.content,
                image: res.image,
                type: res.type
            })
            console.log(id);
            setIsModalVisible(true);

        }

    }

    //Submit
    const onSubmit = async (values) => {
        //sửa bài post
        if (values.id) {
            const response = await editPostDispatch(values)

            if (response.status === 200) {
                getAllPostDispatch()
                notification.open({
                    message: 'Chỉnh sửa',
                    description: 'Cập nhật thông tin thành công'
                });
            }

        } else {
            //Thêm bài post
            const response = await createPostDispatch(values)

            if (response === 201) {
                getAllPostDispatch()
                notification.open({
                    message: 'Thêm mới',
                    description: 'Tạo mới thành công'
                });
            }

        }
        form.resetFields()
        handleCancel()
    }

    const onChange = async (value, id) => {
        const res = await editPostDispatch({ id, isShow: value })
        console.log('res =>', res.isShow, 'values =>', value)
        getAllPostDispatch()
    };


    //Table
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Content',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Img',
            dataIndex: 'image',
            key: 'image',
            render: (value) => <img src={value} width={100} alt="" />
        },
        {
            title: 'Show/Hide',
            dataIndex: 'isShow',
            key: 'isShow',
            // render: (value) => <Switch defaultChecked onChange={onChange} />
            render: (_, record) =>
                <Switch checked={record.isShow} onChange={(values) => onChange(values, record.id)} />
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

    return (<div className='color'>
        {/* button create post */}
        <button onClick={() => createPost()}>Create Post</button>
        <br />

        {/* Hiển thị bảng quản lý bài post */}
        <Table loading={isLoading} dataSource={listPost} columns={columns} rowKey="id" />

        {/* Modal */}
        <Modal title="Basic Modal" visible={isModalVisible} onCancel={() => handleCancel()}
            footer={
                <Space>
                    <Button onClick={() => handleCancel()}>Đóng</Button>
                    <Button type='primary' htmlType='submit' form='form'>Gửi đi</Button>
                </Space>
            }>
            <Form
                form={form}
                name="form"
                wrapperCol={{ span: 24, }}
                initialValues={{ remember: true, }}
                onFinish={onSubmit}
                autoComplete="off"
                layout='vertical'
            >
                {/* ID */}
                <Form.Item
                    label="ID"
                    name="id"
                >
                    <Input disabled={true} />
                </Form.Item>
                {/* Tiêu đề */}
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng không bỏ trống",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* Mô tả */}
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng không bỏ trống",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* Hình ảnh */}
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* Bài viết */}
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng không bỏ trống",
                        },
                    ]}
                >
                    <TextArea />
                </Form.Item>

                {/* Chọn loại bài viết */}
                <Form.Item
                    label="Type"
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng không bỏ trống",
                        },
                    ]}
                >
                    <Select placeholder="Loại">
                        <Option value={1}>Loại 1</Option>
                        <Option value={2}>Loại 2</Option>
                        <Option value={3}>Loại 3</Option>
                        <Option value={4}>Loại 4</Option>
                        <Option value={5}>Loại 5</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Show"
                    name="isShow"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng không bỏ trống",
                        },
                    ]}
                >
                    <Select placeholder="Ẩn/Hiện">
                        <Option value={true}>Hiển thị</Option>
                        <Option value={false}>Ẩn</Option>

                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    </div>)
}

const mapStateToProps = createStructuredSelector({
    listPost: selectPosts,
    newPost: selectNewPost,
    detailPost: selectdetailPost,
})

const mapDispatchToProps = (dispatch) => ({
    getAllPostDispatch: (payload) => dispatch(getAllPostAction(payload)),
    createPostDispatch: (payload) => asyncCreatePostAction(dispatch)(payload),
    getDetailPostDispatch: (payload) => asyncDetailPostAction(dispatch)(payload),
    editPostDispatch: (payload) => asyncEditPostAction(dispatch)(payload),
    deletePostDispatch: (payload) => asyncDeletePostAction(dispatch)(payload)

})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(PostManager);