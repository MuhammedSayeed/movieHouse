import './App.css'
import HomeLayout, { HomeLoader } from './pages/Home/HomeLayout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error/Error.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomeLayout />,
          errorElement: <Error />,
          loader : HomeLoader
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
