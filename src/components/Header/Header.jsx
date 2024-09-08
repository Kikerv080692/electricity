import { FaShoppingBasket } from "react-icons/fa";
import { mainNavigation } from '../../data/mainNavigation'
import * as SC from './Header.styled'


export const Header = () => {
    return (
        <SC.HeaderContsiner>
           <SC.Logo>LOGO</SC.Logo> 
            <SC.Nav>
                <SC.NavList>
                    {mainNavigation.map(({ src, name, id }) => (
                        <SC.NavItem key={id}>
                            <SC.StyledNavLink to={src}>{name}</SC.StyledNavLink>
                        </SC.NavItem>
                        

                    ))}
                    <SC.NavItem >
                            <SC.StyledNavLink to={'/basket'}><FaShoppingBasket /></SC.StyledNavLink>
                        </SC.NavItem>
                </SC.NavList>
            </SC.Nav>
        </SC.HeaderContsiner>
    )
}


