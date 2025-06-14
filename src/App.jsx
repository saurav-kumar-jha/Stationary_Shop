import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
import { Homepage } from './components/HomePage/homepage'
import { Nav } from './components/Navbar/nav'
import { ProductListingPage, SingleProductPage } from './components/ProductPage/product'

const Home = () => {
  const navigate = useLocation()
  return (
    <>
      <Nav />
      {
        navigate.pathname == "/" ? (<Homepage/> ):(<Outlet/>)
      }
      {/* <Homepage /> */}
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/> ,
    children:[{
      path:"/products",
      element:<ProductListingPage/>,
    },
    {
      path:"/products/:id",
      element:<SingleProductPage/>
    }
  ]
  }
])


function App() {

  return (
    <>
      {/* <Home /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
