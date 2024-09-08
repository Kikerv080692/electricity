import { useGetByCategoriesQuery } from "../../redux/catalogOperation/catalogOperation" 
import { useParams } from "react-router-dom"
import { HomeNavigation } from "../Home/components/HomeNavigation/HomeNavigation"
import { ProductsListItem } from "../../components/ProductsList/ProductsListItem"


export const Categorie = () => {
    const {categorie} = useParams()
   
    const {data} = useGetByCategoriesQuery(categorie)
    
  return (
    <>
    <HomeNavigation/>
    <ul>
         {
    data?.map(({id, title, image, description, price, category}) => (
     <ProductsListItem key={id} title={title} image={image} description={description} price={price} category={category}/>
    ))
  }
    </ul>
    </>
  )
}


