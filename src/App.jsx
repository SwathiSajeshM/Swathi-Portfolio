import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Project'
import Services from './components/services/Service'
import Contact from './components/contact/Contact'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/about'element={<About/>}></Route>
          <Route path='/projects'element={<Projects/>}></Route>
          <Route path='/services'element={<Services/>}></Route>
          <Route path='/contacts'element={<Contact/>}></Route>
        </Routes>
        </Router>   
  )
}

export default App;
