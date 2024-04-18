/* eslint-disable react/prop-types */
import { ListaItensHeader } from "./style"
//import { useState } from "react";


const DivLinksHeader = ({children}) => {
    // const [itensHeader, setItensHeader] = useState([])
   
    return(
        <>
            <ListaItensHeader>
                {children}
            </ListaItensHeader>
        </>
    )
}

export default DivLinksHeader