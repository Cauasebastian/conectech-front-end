
import {useNavigate} from 'react-router-dom'


const PartePrincipal = () => {
    const navigate = useNavigate()
    const goToTelaCadastro = () => {
        navigate('/cadastro')
     }
    return(
        <div className="w-screen flex mb-44 flex-col items-center justify-center mt-52 gap-20">
            <img className='w-44' src="images/img-telainicial.png"/>
            <button onClick={goToTelaCadastro} className='conectech-button px-20 sm:px-32'>Conecte-se</button>
            <img className="absolute top-1/3 left-2/3 h-36 sm:h-44 md:h-56 lg:h-72 lg:top-2/3" src="images/img-foguete.png"/>
        </div>

    )
}

export default PartePrincipal