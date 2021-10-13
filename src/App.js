import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Post from './components/Post'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/post/:publishedAt" exact component={Post} />
        </div>
      </Router>
    </>
  );
}

export default App;