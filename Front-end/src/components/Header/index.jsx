/* eslint-disable react/prop-types */


const Header = ({children, bgColor})=> {
    return(
        
             <div className={`w-screen ${bgColor}  fixed z-40 flex items-center p-5 md:justify-around justify-around gap-20 md:gap-0`}>
                    {children}
            </div>
    )
}

export default Header