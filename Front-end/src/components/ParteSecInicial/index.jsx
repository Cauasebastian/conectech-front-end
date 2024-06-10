

const ParteSecundaria = () => {
    return(
        <div id="como-funciona" className=" mt-32 flex flex-col items-center justify-center   ">
            <img className='-mb-16 w-10/12 sm:-mb-28 mg:-mb-24 md:-mb-36 xl:w-7/12 xl:-mb-56 3xl:w-8/12 3xl:-mb-72 2xl:w-8/12' src="/images/text-telainicial.svg" alt="" />
            
            <img  id="profileImage" className='w-[100vw]' src="/images/img-globo2.png" alt="" />
            <div className='absolute flex gap-3 w-[80%] mx-8 justify-center  h-1/4 mm:h-1/3 mm:mt-44 mg:mt-36 sm:h-2/5  mt-28 lg:mb-9 lg:gap-8  lg:mt-72 xl:h-3/5 2xl:mt-96 3xl:h-4/5 3xl:mt-96'> 
                <div className="text-[#f3f3f3] gap-1 flex-col flex items-center">
                    <div className='flex flex-col sm:justify-between  items-center text-center border-solid border border-[#fff] rounded-lg bg-[#3c4257] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2] mp:h-2/4 mg:h-3/4 p-1  sm:h-5/6 '>
                        <img className=' h-full w-full sm:h-3/4 object-cover' src="images/img-groups.png" alt="" />
                        <h3 className='hidden sm:block mp:text-xs  sm:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>Grupos</h3>
                        <p className='  hidden sm:block sm:text-xs md:text-xs xl:text-sm 2xl:text-lg 3xl:text-xl lg:pb-1'>Crie vínculos reais</p>
                    </div>
                    <h3 className='block sm:hidden mp:text-xs sm:text-sm 2xl:text-xl 3xl:text-2xl font-poppins'>Grupos</h3>
                </div>
                
                <div className="text-[#f3f3f3] gap-1 flex-col flex items-center">
                    <div className='flex flex-col sm:justify-between items-center text-center border-solid border border-[#fff] rounded-lg bg-[#3c4257] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2]  mp:h-2/4 mg:h-3/4 p-1 sm:h-5/6'>
                        <img className='h-full  w-full sm:h-3/4 object-cover' src="images/img-foruns.png" alt="" />
                        <h3 className='hidden sm:block mp:text-xs  sm:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>Fóruns</h3>
                        <p className='  hidden sm:block sm:text-xs md:text-xs 2xl:text-lg xl:text-sm 3xl:text-xl lg:pb-1'>Discuta sobre temas</p>
                    </div>
                    <h3 className='block sm:hidden mp:text-xs sm:text-sm 2xl:text-xl 3xl:text-2xl font-poppins'>Fóruns</h3>
                </div>
                
                <div className="text-[#f3f3f3] gap-1 flex-col flex items-center">
                    <div className='flex flex-col sm:justify-between items-center text-center border-solid border border-[#fff] rounded-lg bg-[#3c4257] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2]  mp:h-2/4 mg:h-3/4 p-1 sm:h-5/6'>
                        <img className='h-full w-full sm:h-3/4 object-cover'src="images/img-events.png" alt="" />
                        <h3 className='hidden sm:block mp:text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>Eventos</h3>
                        <p className='  hidden  sm:block sm:text-xs md:text-xs xl:text-sm 2xl:text-lg 3xl:text-xl lg:pb-1'>Participe de eventos</p>
                    </div>
                    <h3 className='block sm:hidden mp:text-xs sm:text-sm 2xl:text-xl 3xl:text-2xl font-poppins'>Eventos</h3>
                </div>
                
            </div>
            
        </div>
    )
}

export default ParteSecundaria