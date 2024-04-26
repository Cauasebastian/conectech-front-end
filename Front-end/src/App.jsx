import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TelaInicial from './pages/TelaInicial/telainicial'
import Home from './pages/Home/home'
import TelaLogin from './pages/TelaLogin/telalogin'
import TelaCadastro from './pages/TelaCadastro/index'
import TelaInteresses from './pages/TelaInteresses/telainteresse'
import Eventos from './pages/Eventos/Eventos'
import Favoritos from './pages/Favoritos/Favoritos'
import Forum from './pages/Forum/Forum'
import Chat from './pages/TelaChat/Chat'
import TelaEvento from './pages/TelaEvento/TelaEvento'

function App() {
  

  return (
    
        <BrowserRouter>
          <Routes>
            <Route path='' element={<TelaInicial/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<TelaLogin/>}/>
            <Route path='/cadastro' element={<TelaCadastro/>}/>
            <Route path='/interesses' element={<TelaInteresses/>}/>
            <Route path='/eventos' element={<Eventos/>}/>
            <Route path='/favoritos' element={<Favoritos/>}/>
            <Route path='/forum' element={<Forum/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/evento' element={<TelaEvento/>}/>
          </Routes>
        </BrowserRouter>
    
   
  )
}

export default App
