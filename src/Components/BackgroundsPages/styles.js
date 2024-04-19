import styled from "styled-components"

import BackgroundPage from "../../assets/background-page.jpg"
import BackgroundPage2 from "../../assets/background-pg2.jpg"

export const ContainerMain = styled.body`
    background: url("${BackgroundPage}");
    background-size: cover;
    background-position: center center;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;


    ${props => props.isBottom && `
    
    background: url("${BackgroundPage2}");
    
    `}

`



