import { DivTelaInteresses, DivTextos, ListaInteresses, TituloPrincipal, TituloSecundario, FormPesquisar, InputPesquisar, ItemInteresse } from "./style";
import Header from "../../components/Header";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Botao from '../../components/Botao'
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import ImagemLogo from "../../components/ImagemLogo";

const TelaInteresses = () => {
    const [meusInteresses, setMeusInteresses] = useState([])
    const [interesses, setInteresses] = useState([])
    const [busca, setBusca] = useState('')
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
    
    useEffect(() => {
        fetch('http://localhost:3000/interesses')
            .then(resposta => resposta.json())
            .then(dados => {
                setInteresses(dados)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/interesses?nome=' + busca)
            .then(resposta => resposta.json())
            .then(dados => {
                setInteresses(dados)
            })
    }, [busca])
    return(
        <>
            <Header position='fixed'  justifyContent='center' >
                <ImagemLogo widthLogo='3.3rem' caminhoImagem='images/img-ico.svg'/>
            </Header>
            <DivTelaInteresses>
                <DivTextos>
                    <TituloPrincipal>Quais são seus interesses?</TituloPrincipal>
                    <TituloSecundario>Selecione 3 ou mais</TituloSecundario>
                </DivTextos>
                <FormPesquisar>
                    <SearchOutlinedIcon sx={{color: '#A4A4A4', marginLeft: '1rem'}}/>
                    <InputPesquisar placeholder="Pesquise seus interesses" onChange={evento => setBusca(evento.target.value)}/>
                </FormPesquisar>
                <ListaInteresses>
                        {interesses.map((item) => <ItemInteresse bgColor={meusInteresses.includes(item.nome) ? '#FFFFFF' : '#31324B'} color={meusInteresses.includes(item.nome) ? '#000' : '#ffffff'} onClick={() => {
                            manipulaInteresse(item.nome)
                        }} key={item.id}>{item.nome}</ItemInteresse>)}
                        {/* <ItemInteresse>Front-End</ItemInteresse> */}
                </ListaInteresses>
                <Botao onClick={enviarInteresses} nome='Prosseguir' padding='0.5rem 6rem'/>

            </DivTelaInteresses>
        </>
        
    )
}

export default TelaInteresses