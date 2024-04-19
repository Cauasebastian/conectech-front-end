import Header from '../../components/Header'
import ImagemLogo from '../../components/ImagemLogo'
import Sidebar from '../../components/Sidebar'
import './style'
const Home = ()=>{
    return(
        <>
            <Header bgColor='f3f3f3' justifyContent='space-between' position='fixed'>
                <Sidebar/>
                <ImagemLogo caminhoImagem='images/img-logo-pree.png'/>
            </Header>
           
        </>
       
    )
}

export default Home