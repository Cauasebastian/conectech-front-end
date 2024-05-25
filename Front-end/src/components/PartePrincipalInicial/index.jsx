
import {useNavigate} from 'react-router-dom'


const PartePrincipal = () => {
    const navigate = useNavigate()
    const goToTelaCadastro = () => {
        navigate('/cadastro')
     }
     const goToHome = () => {
        navigate('/home')
     }
    return(
        <div className="w-full flex flex-col items-center mt-32 3xl:mt-44">
            <img className='w-28 sm:w-32 xl:w-44 3xl:w-52 ' src="images/img-telainicial.png"/>
            <button onClick={goToTelaCadastro} className='conectech-button px-20 py-1 mt-20 xl:py-3 xl:px-28 3xl:py-4 3xl:text-xl 3xl:px-32 '>Conecte-se</button>
            <button onClick={goToHome}  className='conectech-button  sm:block 3xl:text-2xl '>Teste</button>
            <img className="absolute top-1/4 left-2/3 h-28 sm:h-44 md:h-56 lg:h-72 lg:top-1/3 " src="images/img-foguete.png"/>
        </div>

    )
}

export default PartePrincipal