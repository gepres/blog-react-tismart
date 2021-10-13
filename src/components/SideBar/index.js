import React, { useEffect, useState } from 'react';
import './style.css'
import Card from '../UI/Card';
import blogData from '../../assets/data/blog2.json'
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const posts = blogData.articles
    setposts(posts)
  },[posts])
  const top = () => {
    console.log('hola');
    window.scrollTo(0, 0)
  }
  return (
    <div className="SideBar">
      <Card style={{marginBottom:'20px', padding:'20px'}} > 
        <div className="cardHeader">
          <span>Sobre mí</span>
        </div>
        <div className="cardProfile">
          <img src='https://media-exp1.licdn.com/dms/image/C4D03AQE4WJjdWDsMSA/profile-displayphoto-shrink_200_200/0/1592507281703?e=1639008000&v=beta&t=6sqR3srfVE9lfcRD1QhqNmNefclY2ddbJy1dB5Mgn4I' />
        </div>
        <div className="cardBody">
          <p className="cardBody-p">Mi Nombre es Genaro Pretill</p>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Publicaciones recientes</span>
        </div>
        <div className="recemtPosts">
          {
            posts.map( post => {
              return ( 
                <NavLink key={post.publishedAt} to={`/post/${post.publishedAt}`} onClick={top}>
                  <div className="recemtPost">
                    <h3>{post.title}</h3>
                    <span>{post.author}</span>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      </Card>
    </div>
  )
}

export default SideBar;