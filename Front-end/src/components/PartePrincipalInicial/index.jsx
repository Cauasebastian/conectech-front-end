
import {useNavigate} from 'react-router-dom'


const PartePrincipal = () => {
    const navigate = useNavigate()
    const goToTelaCadastro = () => {
        navigate('/cadastro')
     }
    return(
        <div className="w-full flex flex-col items-center mt-32">
            <img className='w-28 ' src="images/img-telainicial.png"/>
            <button onClick={goToTelaCadastro} className='conectech-button px-20 py-1 mt-20 '>Conecte-se</button>
            <img className="absolute top-1/4 left-2/3 h-28 sm:h-44 md:h-56 lg:h-72 lg:top-2/3 " src="images/img-foguete.png"/>
        </div>

    )
}

export default PartePrincipal