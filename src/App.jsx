import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import './App.css'
import { Homepage } from './components/Users/HomePage/homepage'
import { Nav } from './components/Users/Navbar/nav'
import { ProductListingPage, SingleProductPage } from './components/Users/ProductPage/product'
import Footer from './components/Users/HomePage/footer/footer'
import { Location } from './components/Users/HomePage/Locations/location'
import { HomePage } from './components/Admin/HomePage/homepage'
import Add_Product from './components/Admin/Product/addProduct'

const Home = () => {
  const navigate = useLocation()
  return (
    <>
      <Nav />
      {
        navigate.pathname == "/" ? (<Homepage/> ):(<Outlet/>)
      }
      <Footer/>
    </>
  )
}

const Contact = ()=>{
  return(
    <>
      <div>
        <Location/>
      </div>
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
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]
  },
  {
    path:"/admin",
    element:<HomePage/>,
    children:[{
      path:"/admin/add-product",
      element:<Add_Product/>
    }]
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
