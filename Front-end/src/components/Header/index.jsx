/* eslint-disable react/prop-types */


const Header = ({children, bgColor, gap, gapMd})=> {
    return(
        
             <div className={`w-full ${bgColor} fixed z-40 flex items-center p-3 md:justify-around justify-around mp:p-5 md:p-4 lg:p-5 xl:p-6 3xl:p-7 ${gap} ${gapMd} `}>
                    {children}
            </div>
    )
}

export default Header