import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BurgerGif from "../../assets/burger-png.gif";
import Arrow from "../../assets/arrow3.png";

import {
  ContainerMain,
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";


const App = () => {
  const [users, setUsers] = useState([]);
  const inputOrder = useRef();
  const inpuntClient = useRef();

  const naveHistory = useHistory()

  async function newOrderList() {

    const { data: newLista } = await axios.post("http://localhost:3001/orders", {

      order: inputOrder.current.value,
      clientName: inpuntClient.current.value
    })

    setUsers([...users, newLista])

    naveHistory.push("/pedidos")

  }
  

  
  return (
    <ContainerMain>

      <Container>
        <Image alt="logo-burger-gif" src={BurgerGif} />
        <ContainerItens>
          <H1>Faça seu pedido!</H1>

          <InputLabel>Seu pedido</InputLabel>
          <Input ref={inputOrder} placeholder="pedido" />

          <InputLabel>Nome do cliente</InputLabel>
          <Input ref={inpuntClient} placeholder="Nome" />

          <Button onClick={newOrderList}>
            Novo pedido <img alt="seta" src={Arrow} />{" "}
          </Button>



        </ContainerItens>

      </Container>

    </ContainerMain>
  );
};

export default App;

