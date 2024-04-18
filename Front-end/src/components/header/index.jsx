/* eslint-disable react/prop-types */
import { HeaderDiv, } from './style'

const Header = ({ position, children, justifyContent})=> {
    return(
        
             <HeaderDiv justifyContent={justifyContent}  position={position}>
                    {children}
            </HeaderDiv>
    )
}

export default Header