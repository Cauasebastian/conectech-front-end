

const ParteSecundaria = () => {
    return(
        <div className="mt-20 flex flex-col items-center justify-center enormes:mt-36 ">
            <img className='-mb-72 enormes:w-3/5 enormes:-mb-80 notebook:-mb-64' src="/images/text-telainicial.svg" alt="" />
        
        <img className='w-[110vw]' src="/images/img-globo2.png" alt="" />
        <div className='absolute flex gap-8 mt-40 enormes:gap-28 grandes:gap-24 normais:gap-20 '> 
             <div className='card-telainicial'>
                <img className='w-[13.7rem] enormes:w-[17rem] grandes:w-[14rem]' src="images/img-groups.png" alt="" />
                <h3 className='font-medium m-4 enormes:font-semibold enormes:text-2xl grandes:font-semibold grandes:text-xl'>Grupos</h3>
                <p className='mt-4 font-light enormes:text-lg enormes:font-normal grandes:text-lg grandes:font-normal'>Crie vínculos</p>
            </div>
            <div className='card-telainicial'>
                <img className='w-[13.7rem] enormes:w-[17rem] grandes:w-[14rem]' src="images/img-foruns.png" alt="" />
                <h3 className='font-medium m-4 enormes:font-semibold enormes:text-2xl grandes:font-semibold grandes:text-xl'>Fóruns</h3>
                <p className='mt-4 font-light enormes:text-lg enormes:font-normal grandes:text-lg grandes:font-normal'>Discuta sobre temas</p>
            </div>
            <div className='card-telainicial'>
                <img className='w-[13.7rem] enormes:w-[17rem] grandes:w-[14rem]'src="images/img-events.png" alt="" />
                <h3 className='font-medium m-4 enormes:font-semibold enormes:text-2xl grandes:font-semibold grandes:text-xl'>Eventos</h3>
                <p className='mt-4 font-light enormes:text-lg enormes:font-normal grandes:text-lg grandes:font-normal'>Participe de eventos</p>
            </div>
        </div>
            
        </div>
    )
}

export default ParteSecundaria