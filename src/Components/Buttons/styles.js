import styled from "styled-components"


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
  font-size: 18px;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-top: 76px;

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
         transform: ${props => props.isBack && 'rotateY(180deg)'};
     }
`

