import { Container, Box } from '@chakra-ui/react'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'
import {  useRoutes } from 'react-router-dom'

import './App.css'
import { NavRender } from './pages/NavRender'

function App() {
  const element = useRoutes(routes)
  return (
    <>
    <Container bg="blue.200" maxW='100%' padding="0px">
      
    <NavRender/>
    </Container>
      <Container maxW='180Vh'>
        
    {element}
    <Toaster position="bottom-right" reverseOrder={false} />
    
    </Container>
   </>
  )
}

export default App
