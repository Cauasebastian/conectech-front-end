/* eslint-disable react/prop-types */

const LinksHeader = ({children}) => {
    return(
            <div className="hidden lg:flex font-poppins text-base text-corTexto-100 items-center justify-center gap-20 whitespace-nowrap normais:text-lg grandes:text-xl enormes:text-2xl">
                {children}
            </div>
    )
}


export default LinksHeader


