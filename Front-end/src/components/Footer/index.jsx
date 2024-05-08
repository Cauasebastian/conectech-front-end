
const Footer = () => {
    return(
            <div className="flex h-80 flex-col justify-center items-center text-center w-screen  bg-gradient-to-t from-[#015879] to-[#00132A]">
               <div className="flex w-full justify-evenly items-center mb-12  ml-8">
                    <p className='font-poppins break-words w-40 text-start text-[#f3f3f3] font-normal text-xl max-[520px]:text-base max-[520px]:w-32'>Informações sobre</p>
                    <p className='font-poppins break-words w-40 text-start text-[#f3f3f3] font-normal text-xl max-[520px]:text-base max-[520px]:w-32 '>Informações sobre</p>
                    <p className='font-poppins break-words w-40 text-start text-[#f3f3f3] font-normal text-xl max-[520px]:text-base max-[520px]:w-32 '>Informações sobre</p>
               </div>
               
                <img className="sm:w-56 w-40" src="images/img-logo.png"/> 
            </div>
            
        
    )
}

export default Footer