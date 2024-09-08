import { ProductsListItem } from "../../components/ProductsList/ProductsListItem"
import { useGetAllProductsQuery } from "../../redux/catalogOperation/catalogOperation"

import { HomeNavigation } from "./components/HomeNavigation/HomeNavigation"

export const Home = () => {

  const {data} = useGetAllProductsQuery()
  console.log(data)
  return (
    <div>
      <HomeNavigation/>
      <ul>
         {
    data?.map(({id, title, image, description, price, category}) => (
      <ProductsListItem key={id} title={title} image={image} description={description} price={price} category={category}/>
    ))
  }
    </ul>
    </div>
  )
}


