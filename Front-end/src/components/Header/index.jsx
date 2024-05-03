/* eslint-disable react/prop-types */


const Header = ({children})=> {
    return(
        
             <div className="w-screen flex items-center p-5 md:justify-around justify-center gap-20 md:gap-0">
                    {children}
            </div>
    )
}

export default Header