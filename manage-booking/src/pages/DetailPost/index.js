
import React from 'react';
import { createStructuredSelector } from "reselect";
import { selectPosts } from '../PostManager/store/selector';
import { getAllPostAction } from '../PostManager/store/action';
import { connect } from "react-redux";
import { compose } from 'recompose';
import PostItemComponent from '../../component/postItem';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function DetailPost(props) {
    let { id } = useParams();
    const { getAllPostDispatch } = props
    const { listPost } = props;
    let data = [];
    useEffect(() => {
        getAllPostDispatch();
    }, [])
    data = listPost;
    console.log(data)
    const arrType = data.filter(item => item.id === id)
    console.log(arrType)
    return (
        <div>
            {arrType.map(item => (

                <PostItemComponent
                    title={item.title}
                    description={item.description}
                    src={item.image}
                    content={item.content}
                />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    listPost: selectPosts,
})

const mapDispatchToProps = (dispatch) => ({
    getAllPostDispatch: (payload) => dispatch(getAllPostAction(payload)),

})
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(DetailPost);
