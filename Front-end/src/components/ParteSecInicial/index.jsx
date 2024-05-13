

const ParteSecundaria = () => {
    return(
        <div id="como-funciona" className=" mt-32 flex flex-col items-center justify-center w-screen ">
            <img className='-mb-16 w-10/12 sm:-mb-28 md:-mb-36 xl:-mb-56 3xl:w-8/12 3xl:-mb-72 2xl:w-7/12' src="/images/text-telainicial.svg" alt="" />
            
            <img className='w-[100vw]' src="/images/img-globo2.png" alt="" />
            <div className='absolute flex gap-3 w-full justify-center  h-1/4 mm:h-1/3 mm:mt-44 mg:mt-40 sm:h-2/5  mt-28 lg:mb-9 lg:gap-8 lg:h-3/5 lg:mt-72 3xl:h-4/5 3xl:mt-96'> 
                <div className='flex flex-col sm:justify-between  items-center text-center border-solid border border-[#fff] rounded-lg bg-[#7c7c7c59] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2] mp:h-2/4 mg:h-3/4 p-1  sm:h-5/6 '>
                    <img className=' h-1/2 w-full sm:h-3/4' src="images/img-groups.png" alt="" />
                    <h3 className='mp:text-xs  sm:text-sm 2xl:text-xl 3xl:text-2xl'>Grupos</h3>
                    <p className=' font-light hidden sm:block sm:text-xs md:text-sm 2xl:text-lg 3xl:text-xl'>Crie vínculos reais</p>
                </div>
                <div className='flex flex-col sm:justify-between items-center text-center border-solid border border-[#fff] rounded-lg bg-[#7c7c7c59] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2]  mp:h-2/4 mg:h-3/4 p-1 sm:h-5/6'>
                    <img className='h-1/2 w-full sm:h-3/4' src="images/img-foruns.png" alt="" />
                    <h3 className='mp:text-xs  sm:text-sm 2xl:text-xl 3xl:text-2xl'>Fóruns</h3>
                    <p className=' font-light hidden sm:block sm:text-xs md:text-sm 2xl:text-lg 3xl:text-xl'>Discuta sobre temas</p>
                </div>
                <div className='flex flex-col sm:justify-between items-center text-center border-solid border border-[#fff] rounded-lg bg-[#7c7c7c59] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2]  mp:h-2/4 mg:h-3/4 p-1 sm:h-5/6'>
                    <img className='h-1/2 w-full sm:h-3/4'src="images/img-events.png" alt="" />
                    <h3 className='mp:text-xs sm:text-sm 2xl:text-xl 3xl:text-2xl'>Eventos</h3>
                    <p className=' font-light hidden  sm:block sm:text-xs md:text-sm 2xl:text-lg 3xl:text-xl'>Participe de eventos</p>
                </div>
            </div>
            
        </div>
    )
}

export default ParteSecundaria