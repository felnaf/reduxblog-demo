import React, { useEffect } from 'react';
import { getPosts } from '../actions';
import { connect } from 'react-redux';

const PostList = (props) => {
 
  useEffect(() => {
    props.getPosts();
  }, []);
  return <div>PostList</div>;
};
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { getPosts: getPosts })(PostList);
