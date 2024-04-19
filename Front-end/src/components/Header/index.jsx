/* eslint-disable react/prop-types */
import { HeaderDiv, } from './style'

const Header = ({ position, children, justifyContent, bgColor})=> {
    return(
        
             <HeaderDiv justifyContent={justifyContent} bgColor={bgColor}  position={position}>
                    {children}
            </HeaderDiv>
    )
}

export default Header