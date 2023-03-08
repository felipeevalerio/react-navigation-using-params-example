import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'
import { ProjectDetails } from './ProjectDetails'
import { Projects } from './Projects'
import { UserDetails } from './UserDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:idUser" element={<UserDetails />} />
        <Route path="/:idUser/projects" element={<Projects />} />
        <Route path="/:idUser/projects/:idProject" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
