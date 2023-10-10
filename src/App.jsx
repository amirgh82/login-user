// Main Page
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from '../routes'
import FormContext from './context/formContext'

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <FormContext.Provider>
        <div className="app">
          {router}
        </div>
      </FormContext.Provider>
    </>
  )
}

export default App
