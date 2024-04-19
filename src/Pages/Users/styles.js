import styled from "styled-components"


export const Image = styled.img`
    width: 280px;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
