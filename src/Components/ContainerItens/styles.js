import styled from "styled-components";
import BackgroundContainer from "../../assets/Background1.jpg"
import BackgroundContainer2 from "../../assets/burger-gif3.gif"



export const Container = styled.div`
    background-image: url("${BackgroundContainer}");
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    margin-bottom: 15px;
    border-radius: 10px;
    gap: 20px;
    padding: 10px 30px;

    ${props => props.isPage && `
    
    background-image: url("${BackgroundContainer2}");
    
    `}

`


