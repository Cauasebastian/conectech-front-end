import Header from '../../components/Header'
import ImagemLogo from '../../components/ImagemLogo'
import Sidebar from '../../components/Sidebar'
import IconUser from '../../components/IconUser'
import './style'
const Home = ()=>{
    return(
        <>
            <Header bgColor='f3f3f3' justifyContent='space-between' position='fixed'>
                <Sidebar/>
                <ImagemLogo position='relative'  caminhoImagem='images/img-logo-pree.png'/>
                <IconUser/>
            </Header>
           
        </>
       
    )
}

export default Home