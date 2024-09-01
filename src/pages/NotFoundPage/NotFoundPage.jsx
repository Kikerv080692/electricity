import { NavLink } from "react-router-dom"


export const NotFoundPage = () => {
  return (
    <div>
    <h1>  404 Not Found Page</h1>
    <button type="button"><NavLink to={'/'}>Go to Home</NavLink></button>
    </div>
  )
}


