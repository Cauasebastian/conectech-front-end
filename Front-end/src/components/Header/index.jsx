/* eslint-disable react/prop-types */


const Header = ({children, bgColor, gap, gapMd})=> {
    return(
        
             <div className={`w-full ${bgColor} fixed z-40 flex items-center p-3 md:justify-around justify-evenly md:p-4 lg:p-5 xl:p-5 3xl:p-7 ${gap} ${gapMd} `}>
                    {children}
            </div>
    )
}

export default Header