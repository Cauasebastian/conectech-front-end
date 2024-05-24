


import useUserContext from '../../hooks/useUserContext'

import Sidebar from '../../components/Sidebar'
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import EventosProximos from '../../components/EventosProximos';
import DestaquesForum from '../../components/DestaquesForum';
import MenuExplorar from '../../components/MenuExplorar';
import {useNavigate} from 'react-router-dom'


const Home = ()=>{
    const {user} = useUserContext();
    const navigate = useNavigate();
    const goToPerfilPage = () => {
        navigate('/perfil')
    }
   

    console.log(user)
    return(
        <div className='w-full min-h-screen overflow-y-hidden flex bg-[#fbfbfb] '>
            <Sidebar/>
            <HeaderHome>
                <img src="images/img-conectech.svg" className='block sm:hidden w-12 h-12 mp:ml-28 mm:ml-44' alt="" />
                <img src="images/img-logo-pree.png" className='mp:ml-24 mp:w-32 mm:ml-28 hidden sm:block sm:ml-40 md:ml-52 lg:ml-28  w-40' alt="" />
                <img className='w-8 object-cover cursor-pointer mp:mt-2  mp:-mr-8 mm:mr-0 md:-mr-8 lg:mr-14 ' src='images/user.png' onClick={goToPerfilPage}/>
            </HeaderHome>
            <div id='container-home' className='lg:grid lg:grid-cols-4 lg:grid-rows-2 '>
                <div className='col-span-3 lg:row-start-1 lg:row-end-2 '>
                    <EventosProximos/>
                </div>
                <div className='col-span-3 lg:row-start-2 lg:row-end-3  mb-8'>
                    <DestaquesForum/>
                </div>
                <div className='col-span-1 lg:row-start-1 lg:row-span-4 '>
                    <MenuExplorar/>
                </div>
            </div>
           
        </div>
       
    )
}

export default Home