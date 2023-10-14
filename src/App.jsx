import './App.css'
import HomeLayout, { HomeLoader } from './pages/Home/HomeLayout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error/Error.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ShowsLayout, { showsLoader } from './pages/ShowsLayout/ShowsLayout.jsx'
import GenreFilter from './components/GenreFilter/GenreFilter.jsx'
import ShowDetails, { showDetailsLoader } from './pages/ShowDetails/ShowDetails.jsx'

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
          loader: HomeLoader
        },
        {
          path: 'shows',
          element: <GenreFilter />,
          errorElement: <Error />,
          children: [
            {
              path: ':type/:genre/:page',
              index: true, element: <ShowsLayout />, 
              loader : showsLoader
            }
          ]
        },
        {
          path : 'shows/:type/:id' , element : <ShowDetails/> , loader : showDetailsLoader
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
