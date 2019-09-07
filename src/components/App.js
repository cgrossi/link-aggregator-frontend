import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import NavBar from './layout/NavBar'
import PostList from './PostList'

import '../css/App.css'

const App = () => {
  return (
    <div className="App ui container">
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </div>
  )
}

export default App