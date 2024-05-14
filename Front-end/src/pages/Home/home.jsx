import Header from '../../components/Header'
import ImagemLogo from '../../components/ImagemLogo'
import Sidebar from '../../components/Sidebar'
import IconUser from '../../components/IconUser'
import './style'
import DivHome from '../../components/DivHome'
import EventosProximos from '../../components/EventosProximos'
import MenuExplorar from '../../components/MenuExplorar'
import DestaquesForum from '../../components/DestaquesForum'
import useUserContext from '../../hooks/useUserContext'
const Home = ()=>{
    const {user} = useUserContext();
    console.log(user)
    return(
        <>
            <Header bgColor='bg-[#fff]' gapMd='md:gap-[47rem]' >
                <Sidebar/>
                <ImagemLogo caminhoImagem='images/img-logo-pree.png'/>
                <IconUser/>
                
            </Header>
            <DivHome>
                <EventosProximos/>
                
                <MenuExplorar/>
                
                <DestaquesForum/>
                
            </DivHome>
           
        </>
       
    )
}

export default Home