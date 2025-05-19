import { Container, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'
import {  useRoutes } from 'react-router-dom'

import './App.css'
import { NavRender } from './pages/NavRender'

function App() {
  
  const element = useRoutes(routes)
  return (
    <>

  
     {element}
    <Toaster position="bottom-right" reverseOrder={false} />
    
   
   </>
  )
}

export default App
