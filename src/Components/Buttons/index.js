import React from "react"

import { Button } from "./styles"

function styleBtns({ children, ...props }) {


    return <Button {...props} >{ children }</Button >
}


export default styleBtns

