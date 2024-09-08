import { useState } from "react"
import { useDispatch } from "react-redux"
import { increment } from "../../redux/basket/basket"


export const ProductsListItem = ({title, image, description, price, category}) => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    const showInfo = () => {
        setShow(!show)
    }

    const addToBasket = () => {
        dispatch(increment({title, image, price}))
    }

  return (
       <li>
        <h2>{title}</h2>
        <img src={image} alt={title} width="100" />
        {show && <p>{description}</p>}
        <p>Price: ${price}</p>
        <p>Category: {category}</p>  
        <button onClick={showInfo} type='button'>{show ? 'Hide info' : 'Show more info'}</button>
        <button onClick={addToBasket} type='button'>Add to basket</button>
      </li>
    
  )
}


