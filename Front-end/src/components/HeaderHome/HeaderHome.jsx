/* eslint-disable react/prop-types */


const HeaderHome = ({children}) => {
    return(
        <div className="w-full h-20 fixed flex flex-row justify-around mm:justify-around lg:justify-between items-center border-b z-10 bg-[#fff]  ">
            {children}
        </div>
    )

}

export default HeaderHome