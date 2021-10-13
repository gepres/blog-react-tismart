import React from 'react';
import Card from '../UI/Card';
import './style.css'
import blogData from '../../assets/data/blog2.json'
import ImageGallery from './ImageGallery';
import Layout from '../Layout';
import RecentPosts from '../RecentPosts';

const Home = (props) => {
  // console.log('blogData',blogData);
  const galleryHeight = 450;
  const galleryStyle= {
    height:`${galleryHeight}px`,
    overflow:'hidden'
  }
  const sideImageHeight = galleryHeight / 3;
  const imgArray = blogData.articles.map(post => post.urlToImage)
  return (
    <div className="Home">
     <Card>
      <ImageGallery largeWidthPrincipal="70%" smallWidth="30%" sideImageHeight={sideImageHeight} galleryStyle={galleryStyle} imgArray={imgArray} >

      </ImageGallery>
     </Card>
     <Layout>
       <RecentPosts style={{Width:'100%'}} />
     </Layout>
    </div>
  )
}

export default Home;