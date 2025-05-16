import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PostProvider } from './components/context/PostsContext.jsx'

createRoot(document.getElementById('root')).render(
  <div className="center-content ">
    <StrictMode>
    <ChakraProvider>
      <PostProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </PostProvider>
    </ChakraProvider>
  </StrictMode>
 </div>
)
