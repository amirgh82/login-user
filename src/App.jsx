// Main Page
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from '../routes'

function App() {

  const router = useRoutes(routes)

  return (
    <>
      
      {router}
    </>
  )
}

export default App
