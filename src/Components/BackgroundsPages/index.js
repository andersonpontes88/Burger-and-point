import React from "react"

import { ContainerMain } from "./styles"

function fundosPages({children,isBottom}) {


    return <ContainerMain isBottom={isBottom} >{children}</ContainerMain>
}

export default fundosPages
