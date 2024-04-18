import styled from "styled-components"
import BackgroundPage from "../../assets/background-pg2.jpg"
import BackgroundContainer from "../../assets/burger-gif3.gif"



export const ContainerMain = styled.body`
    background: url("${BackgroundPage}");
    background-size: cover;
    background-position: center center;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

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
`
export const Image = styled.img`
    width: 280px;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px -1px 3px rgb(0, 255, 255);
    margin-bottom: 50px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgb(255, 0, 65);
  color:#ffffff;
  border:none;
  border-radius: 5px;
  position:relative;
  height: 60px;
  width: 360px;
  font-size: 18px;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-top: 130px;

    &:hover {
        background:#ffffff;
        color: #22E077;
    }
    &:before, &:after {

        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #1AAB8A;
        transition:400ms ease all;
    }
    &:after {
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    &:hover:before, &:hover:after {

        width:100%;
        transition:800ms ease all;
    }

    img {
        transform: rotateY(180deg);
    }

`

export const List = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: rgb(60, 60, 60);
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
    border-radius: 15px;
    width: 380px;
    height: 100px;
    border: 1px solid #ffffff;
    outline: none;
    padding: 15px;
    margin-top: 10px;
    color: #ffffff;
    font-weight: 200;
    font-size: 16px;

    button {
    background: none;
    border: none;
    cursor: pointer;
    }
`
