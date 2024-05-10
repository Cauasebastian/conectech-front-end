

const ParteSecundaria = () => {
    return(
        <div className=" mt-32 flex flex-col items-center justify-center w-screen ">
            <img className='-mb-16 w-10/12' src="/images/text-telainicial.svg" alt="" />
            
            <img className='w-[100vw]' src="/images/img-globo2.png" alt="" />
            <div className='absolute flex gap-3 w-6/12 h-1/5 mt-20'> 
                <div className='flex flex-col  items-center text-center border-solid border border-[#fff] rounded-lg bg-[#7c7c7c59] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2] w-4/12 h-3/4 p-1'>
                    <img className=' h-10' src="images/img-groups.png" alt="" />
                    <h3 className='text-xs mt-2'>Grupos</h3>
                    <p className='mt-4 font-light hidden'>Crie vínculos reais</p>
                </div>
                <div className='flex flex-col  items-center text-center border-solid border border-[#fff] rounded-lg bg-[#7c7c7c59] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2]  w-4/12 h-3/4 p-1'>
                    <img className='h-10' src="images/img-foruns.png" alt="" />
                    <h3 className='text-xs mt-2'>Fóruns</h3>
                    <p className='mt-4 font-light hidden'>Discuta sobre temas</p>
                </div>
                <div className='flex flex-col  items-center text-center border-solid border border-[#fff] rounded-lg bg-[#7c7c7c59] shadow-[0_8px_32px_0_#1f26875e] backdrop-opacity-10 text-[#f3f3f3] font-poppins z-[2]  w-4/12 h-3/4 p-1'>
                    <img className='h-10'src="images/img-events.png" alt="" />
                    <h3 className='text-xs mt-2'>Eventos</h3>
                    <p className='mt-4 font-light hidden'>Participe de eventos</p>
                </div>
            </div>
            
        </div>
    )
}

export default ParteSecundaria