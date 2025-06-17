import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Card } from "../HeroPage/Card"
import Auth from "./Auth/login"
import AdminSidebar from "./Navbar/nav"
import { Nav_Horizontal } from "./Navbar/Nav2"

export const HomePage = () => {
  const navigate = useLocation()

  const Home = () => {

    return (
      <>
        <AdminSidebar />
        <Nav_Horizontal />
        {
          navigate.pathname == "/admin" ?
            (
              <div className="flex relative mt-5 w-[80%] ml-6 px-4 py-3 left-[15%] border flex-wrap gap-6 " >
                <Card />
              </div>
            ) : <Outlet />
        }
      </>
    )
  }

  return (
    <>

      <Home />

    </>
  )
}