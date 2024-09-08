import { NavLink } from "react-router-dom"
import { useGetAllCategoriesQuery } from "../../../../redux/catalogOperation/categoriesOperation"
import * as SC from './HomeNavigetion.styled'



export const HomeNavigation = () => {
  const {data} = useGetAllCategoriesQuery()
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <>
    <SC.Wrapper>
      <SC.Categories>
      {
        data?.map((el) => <li key={el}><NavLink to={`/${el}`}>{capitalizeFirstLetter(el)}</NavLink></li>)
      }
      </SC.Categories>
    </SC.Wrapper>
 
    
    </>
  ) 
}


