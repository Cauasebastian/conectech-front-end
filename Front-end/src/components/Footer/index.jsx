
const Footer = () => {
    return(
            <div className="flex h-32 flex-col justify-center items-center text-center w-full pt-5 xl:h-40 2xl:h-48 bg-gradient-to-t from-[#015879] to-[#00132A]">
               <div className="flex w-full justify-center gap-10 items-center mb-7 ">
                    <p className='font-poppins w-2/12 text-[#f3f3f3] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Informações sobre</p>
                    <p className='font-poppins  w-2/12 text-[#f3f3f3] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>Informações sobre</p>
                    <p className='font-poppins  w-2/12 text-[#f3f3f3] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>Informações sobre</p>
               </div>
               
                <img className="w-20 sm:w-28 lg:w-36" src="images/img-logo.png"/> 
            </div>
            
        
    )
}

export default Footer