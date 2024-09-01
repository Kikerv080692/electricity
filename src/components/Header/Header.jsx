import { NavLink } from 'react-router-dom'
import { mainNavigation } from '../../data/mainNavigation'

export const Header = () => {
    return (
        <div>
            LOGO

            <nav>
                <ul>
                    {mainNavigation.map(({ src, name, id }) => (
                        <li key={id}>
                            <NavLink to={src}>{name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}


