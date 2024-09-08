import styled from "styled-components";

export const FooterContainer = styled.div`
width: 100%;
height: 70px;
background: black;
display: flex;
justify-content: center;
align-items: center;

`
export const Text = styled.p`
color: white;
font-size: ${p=> p.theme.size[5]}px;
`