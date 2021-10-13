import React from 'react';
import './style.css'
import Card from '../UI/Card';
import Layout from '../Layout';
import BlogPost from '../BlogPost';
const Post = (props) => {
  return (
    <Layout>
      <BlogPost {...props} />
    </Layout>
  )
}

export default Post;