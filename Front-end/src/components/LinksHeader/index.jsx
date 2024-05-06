/* eslint-disable react/prop-types */

const LinksHeader = ({children}) => {
    return(
            <div className="hidden lg:flex font-poppins text-corTexto-100 items-center justify-center gap-20 whitespace-nowrap">
                {children}
            </div>
    )
}


export default LinksHeader


