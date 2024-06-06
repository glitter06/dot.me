import React from 'react'
import { Home, MyProfile, ErrorPage } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
const App : React.FC = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/MyProfile' element={<MyProfile/>}/>
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
   </Router>
  )
}

export default App