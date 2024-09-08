import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderContsiner = styled.div`
padding: 10px;
overflow: hidden;
background: ${p => p.theme.colors.nav};
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
width: 100%;
z-index: 900;
`
export const Logo = styled.div`
font-weight: bold;
font-size: ${p=> p.theme.size[5]}px;
margin-left: 30px;
`
export const Nav = styled.nav`

`

export const NavList = styled.ul`
display: flex;
list-style: none;
margin: 0;
padding: 0;

`

export const NavItem = styled.li`
margin-right: 30px;
&:last-child {
        margin-right: 50px;
    }
`
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: wheat;
font-size: 18px;
display: inline-block;
transition: transform 0.2s, color 0.2s;
&:hover {
   transform: scale(1.2);
   color: lightblue;
}
`