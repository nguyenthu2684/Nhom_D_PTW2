import React from 'react'
import { Col, Row, Button } from 'antd';
import { useEffect } from 'react';
import { createStructuredSelector } from "reselect"
import { selectPosts } from '../PostManager/store/selector';
import { getAllPostAction } from '../PostManager/store/action';
import { connect } from "react-redux";
import { compose } from 'recompose';
import PostItemComponent from '../../component/postItem/index';
import { Link } from 'react-router-dom';
import { RiseOutlined, CloudOutlined, UserOutlined } from '@ant-design/icons';
import './home.css'
function Homepage(props) {
  const { getAllPostDispatch } = props
  const { listPost } = props;
  let data = [];
  useEffect(() => {
    getAllPostDispatch();
  }, [])

  data = listPost;

  // console.log(listPost.length)
  const arrType1 = data.filter(function (item) {
    if (item.type === 1 && item.isShow === true) {
      return item
    }
  })
  const arrType2 = data.filter(function (item) {
    if (item.type === 2 && item.isShow === true) {
      return item
    }
  })
  const arrType3 = data.filter(function (item) {
    if (item.type === 3 && item.isShow === true) {
      return item
    }
  })
 

  return (
    <>
    <div className='tieude'>
      <Row className='thoiTiet'>
        <Col span={16}>
          <div className='nameTag'>
            <RiseOutlined />
            <Button shape="round">#Thông tin bệnh viện</Button>
            <Button shape="round">#Tin tức mới trong ngày</Button>
          </div>

        </Col>
        <Col span={8}>
          <div className='weather'>
            <p> <b>TP.Hồ Chí Minh</b> 27&#186;C/24-30&#186;C</p>
            <CloudOutlined />
          </div>

        </Col>
      </Row>
      </div>
      <div className='wrap'>
        <Row gutter={16}>

          <Col className='block1' xs={24} md={8} xl={6}>
            {arrType1.slice(0, 5).map(item =>

              <Link to={`/posts/${item.id}`}>
                <PostItemComponent
                  type={item.type}
                  src={item.image}
                  title={item.title}
                /></Link>
            )}
          </Col>
          <Col className='block2' xs={24} md={16} xl={12}>
            {arrType2.slice(-1).map(item =>
              <Link to={`/posts/${item.id}`}>
                <PostItemComponent
                  type={item.type}
                  src={item.image}
                  title={item.title}
                  description={item.description}
                /></Link>)}
          </Col>
          <Col className='block3' xs={24} md={24} xl={6}>
            {arrType3.slice(0,3).map(item =>
              <Link to={`/posts/${item.id}`}>
                <PostItemComponent
                  type={item.type}
                  src={item.image}
                  title={item.title}
                /></Link>)}
          </Col>
        </Row>
      </div>

    </>

  )
}
const mapStateToProps = createStructuredSelector({
  listPost: selectPosts,
})

const mapDispatchToProps = (dispatch) => ({
  getAllPostDispatch: (payload) => dispatch(getAllPostAction(payload)),

})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(Homepage);
