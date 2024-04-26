/* eslint-disable react/prop-types */
import { ListaItensHeader } from "./style"



const DivLinksHeader = ({children}) => {
   
   
    return(
        <>
            <ListaItensHeader>
                {children}
            </ListaItensHeader>
        </>
    )
}

export default DivLinksHeader