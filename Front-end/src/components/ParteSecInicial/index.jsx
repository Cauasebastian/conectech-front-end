import './style.css'

const ParteSecundaria = () => {
    return(
        <div className="mt-20 flex flex-col items-center justify-center">
            <img className='-mb-10 ' src="/images/text-telainicial.svg" alt="" />
        <div className="circulo"></div>
        <div className='absolute flex gap-8 mt-40'> 
             <div className='card-list'>
                <img src="images/img-groups.png" alt="" />
                <h3 className='titulo-card'>Grupos</h3>
                <p>Crie vínculos</p>
            </div>
            <div className='card-list'>
                <img src="images/img-foruns.png" alt="" />
                <h3 className='titulo-card'>Fóruns</h3>
                <p>Discuta sobre temas</p>
            </div>
            <div className='card-list'>
                <img src="images/img-events.png" alt="" />
                <h3 className='titulo-card'>Eventos</h3>
                <p>Participe de eventos</p>
            </div>
        </div>
            
        </div>
    )
}

export default ParteSecundaria