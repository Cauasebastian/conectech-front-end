import {   ListaInteresses, TituloPrincipal, TituloSecundario, FormPesquisar, InputPesquisar, ItemInteresse } from "./style";
import Header from "../../components/Header";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Botao from '../../components/Botao'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import data from '../../../interests.json'

const TelaInteresses = () => {
    const [meusInteresses, setMeusInteresses] = useState([])
    
    const navigate = useNavigate();
    

    const manipulaInteresse = (interesse) => {
        
        if (meusInteresses.includes(interesse)) {
            
            setMeusInteresses(prevInteresses => prevInteresses.filter(item => item !== interesse));
        } else {
           
            setMeusInteresses(prevInteresses => {
                const novoInteresses = [...prevInteresses, interesse];
                // console.log(JSON.stringify(novoInteresses));
                return novoInteresses;
            });
        }
    }
    const enviarInteresses = () =>{
        alert("Seus interesses escolhidos são: " + meusInteresses.join(", "));
        setMeusInteresses([])
        navigate('/home')
    }
    
    
    return(
        <>
            <Header bgColor='bg-[#003d71]' >
                <img className="h-14" src='images/img-ico.svg'/>
            </Header>
            <div className="bg-gradient-to-t from-[#00001d] to-[#003d71] min-h-screen flex flex-col justify-center items-center mt-20">
                <div className="flex flex-col justify-center ">
                    <TituloPrincipal>Quais são seus interesses?</TituloPrincipal>
                    <TituloSecundario>Selecione 3 ou mais</TituloSecundario>
                </div>
                <FormPesquisar>
                    <SearchOutlinedIcon sx={{color: '#A4A4A4', marginLeft: '1rem'}}/>
                    <InputPesquisar placeholder="Pesquise seus interesses" />
                </FormPesquisar>
                <ListaInteresses>
                        {data.map((item) => <ItemInteresse bgColor={meusInteresses.includes(item.nome) ? '#FFFFFF' : '#31324B'} color={meusInteresses.includes(item.nome) ? '#000' : '#ffffff'} onClick={() => {
                            manipulaInteresse(item.nome)
                        }} key={item.id}>{item.nome}</ItemInteresse>)}
                        {/* <ItemInteresse>Front-End</ItemInteresse> */}
                </ListaInteresses>
                <Botao onClick={enviarInteresses} nome='Prosseguir' padding='0.5rem 6rem'/>

            </div>
        </>
        
    )
}

export default TelaInteresses