import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home/Home"
import { Basket } from "./pages/Basket/Basket"
import { AboutsUs } from "./pages/AboutUs/AboutsUs"
import { Payment } from "./pages/Payment/Payment"
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage"
import { Categorie } from "./pages/Categorie/Categorie"


export const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/:categorie" element={<Categorie />} />
          <Route path="basket" element={<Basket />} />
          <Route path="about" element={<AboutsUs />} />
          <Route path="payment" element={<Payment />} />

        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}


