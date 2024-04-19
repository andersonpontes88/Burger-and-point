import React from "react"

import { Container } from "./styles"

function styleItens({children,isPage }) {

    

    return <Container isPage={isPage}>{children}</Container>

        
}

export default styleItens

