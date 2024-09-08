import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/footer"
import * as SC from './Layout.styled'


export const Layout = () => {
  return (
  <>
  <Header/>
  
<SC.WrapperLayout>
  <Outlet/>
</SC.WrapperLayout>
  <Footer/>
  </>
  )
}


