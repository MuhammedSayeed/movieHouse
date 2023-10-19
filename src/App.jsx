import './App.css'
import HomeLayout, { HomeLoader } from './pages/Home/HomeLayout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error/Error.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import GenreFilter from './components/GenreFilter/GenreFilter.jsx'
import ShowDetails, { showDetailsLoader } from './pages/ShowDetails/ShowDetails.jsx'
import ShowsLayout, { showsLoader } from './pages/Shows/ShowsLayout.jsx'
import RecommenditonsLayout from './pages/Recommenditons/RecommenditonsLayout.jsx'
import MediaTypes from './components/MediaTypes/MediaTypes.jsx'
import Genres, { genresLoader } from './components/Genres/Genres.jsx'
import Results, { resultsLoader } from './components/Results/Results.jsx'
import Register from './pages/Register/Register.jsx'

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
        },
        {
          path : 'recommenditons',
          element : <RecommenditonsLayout/>,
          children : [
            {index : true , element : <MediaTypes/>},
            {path : ':media' , element : <Genres/> , loader : genresLoader },
            {path : ":media/:genre/results" , element : <Results/> , loader : resultsLoader}
          ]
        }
      ]
    },
    {
      path : '/login',
    },
    {
      path : '/auth',
      element : <Register/>
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
