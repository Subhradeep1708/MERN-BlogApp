import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/Homepage.jsx'
import Navbar from './components/Navbar.jsx'
const router = createBrowserRouter([
  { path: "/", Component: Homepage },
  // { path: "/", Component: Root },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Navbar />
      <App />
    </RouterProvider>
  </StrictMode>,
)
