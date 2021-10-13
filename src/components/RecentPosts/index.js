import React from 'react';
import Card from '../UI/Card';
import './style.css'

const RecentPosts = (props) => {
  return (
    <>
      <div style={props.style}>
        <Card>
          <div className="RecentPosts_children">
            <span>Tecnologia</span>
            <h2>React</h2>
            <span>Publicado el 21 de julio de 2021</span>
            <p>
              React es una biblioteca de js
            </p>
          </div>
        </Card>
      </div>
    </>
  )
}

export default RecentPosts;