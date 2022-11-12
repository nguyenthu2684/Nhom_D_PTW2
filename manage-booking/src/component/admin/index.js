import React from 'react'
import './admin.css'
import { useState } from 'react';
import DoctorList from '../../pages/doctorList';
import { HomeOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const AdminPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="light"
                        mode="inline"
                    >
                        <Menu.Item key={1}><Link to="/admin/userManagement">User Manage</Link></Menu.Item>
                    </Menu>

                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background"
                        style={{
                            padding: 0,
                            paddingBottom: 60,

                        }}>
                        <nav className="navbar-container">
                            <Link to="/dashboard" className="navbar-icon"> <HomeOutlined /> </Link>
                            <Link to="/" className="navbar-icon"> <BellOutlined /> </Link>
                            <Link to="/" className="navbar-icon"> <UserOutlined /> </Link>



                        </nav>
                        <h1 style={{ color: 'white', paddingLeft: 20 }}>{splitted.slice(-1).toString().toUpperCase()}</h1>


                        <BreadcrumbComponent />
                    </Header>

                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >

                            <Routes>
                                <Route exact path="/admin/userManagement" element={<DoctorList />} />
                            </Routes>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default AdminPage;