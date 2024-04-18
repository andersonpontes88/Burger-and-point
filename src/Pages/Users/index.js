import React, { useState, useEffect } from "react";
import BurgerReady from "../../assets/burger-gif4-unscreen.gif";
import { useHistory } from "react-router-dom";

import {
  ContainerMain,
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  List,
} from "./styles";
import Arrow from "../../assets/arrow3.png";
import Bin from "../../assets/bin.svg";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const naveHistory = useHistory()

  useEffect(() => {

    async function allOrders() {

      const { data: showOrders } = await axios.get("http://localhost:3001/orders")

      setUsers(showOrders)
    }

    allOrders()

  }, [])

function navegation() {
    naveHistory.push("/")
}

  async function deleteOrder(userId) {
    await axios.delete(`http://localhost:3001/orders/${userId}`)

    const newOrders = users.filter((user) => user.id !== userId);

    setUsers(newOrders);
  }

  return (
    <ContainerMain>

      <Container>
        <Image alt="logo-burger-completo" src={BurgerReady} />

        <ContainerItens>
          <H1>Pedidos</H1>

          <ul>
            {users.map((user) => (

              <List key={user.id}>
                <p>{user.order}</p>
                <p>
                  <b>{user.clientName}</b>
                </p>

                <button onClick={() => deleteOrder(user.id)}>
                  <img src={Bin} alt="lixeira" />
                </button>
              </List>
            ))}
          </ul>

          <Button onClick={navegation}>
            <img alt="seta" src={Arrow} /> Voltar
          </Button>

        </ContainerItens>

      </Container>

    </ContainerMain>
  );
};

export default Users;
