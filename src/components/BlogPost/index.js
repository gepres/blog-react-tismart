import React, { useEffect, useState } from 'react';
import './style.css'
import Card from '../UI/Card';
import Layout from '../Layout';
import blogData from '../../assets/data/blog2.json'


const BlogPost = (props) => {

  const [post, setpost] = useState({
    publishedAt:'',
    title:'',
    author: '',
    postedOn:'',
    urlToImage: '',
    content:''
  })

  useEffect(() => {
    const publishedAt = props.match.params.publishedAt
    const post = blogData.articles.find(post => post.publishedAt === publishedAt)
    setpost(post)
  }, [post,props.match.params.publishedAt])

  if(post.urlToImage  === '') return null;

  return (
    <div className="recemtPost">
      <div className="blogheader">
       <span>{post.author}</span>
       <span>{post.title}</span>
       <span className="blogheader-bold"> Publicado el</span>
       <span> {post.publishedAt}</span>
      </div>
      <div className="bloghimage">
        <img src={post.urlToImage} alt="" />
      </div>
      <div className="postContent">
        <h3>{post.title}</h3>
        <span>{post.author}</span>
      </div>
    </div>
  )
}

export default BlogPost;