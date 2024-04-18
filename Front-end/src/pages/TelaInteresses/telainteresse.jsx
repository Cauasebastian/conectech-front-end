import { DivTelaInteresses, DivTextos, ListaInteresses, TituloPrincipal, TituloSecundario, FormPesquisar, InputPesquisar, ItemInteresse } from "./style";
import Header from "../../components/Header";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Botao from '../../components/Botao'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import ImagemLogo from "../../components/ImagemLogo";

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
    
    
    const interesses = [
        { "id": 1, "nome": "Front-End" },
        { "id": 2, "nome": "Back-End" },
        { "id": 3, "nome": "Design Web" },
        { "id": 4, "nome": "Python" },
        { "id": 5, "nome": "Ruby" },
        { "id": 6, "nome": "Assembly" },
        { "id": 7, "nome": "Inteligência Artificial" },
        { "id": 8, "nome": "Clojure" },
        { "id": 9, "nome": "Excel" },
        { "id": 10, "nome": "Vue.js" },
        { "id": 11, "nome": "UX/UI" },
        { "id": 12, "nome": "JavaScript" },
        { "id": 13, "nome": "Java" },
        { "id": 14, "nome": "Pascal" },
        { "id": 15, "nome": "PHP" },
        { "id": 16, "nome": "Swift" },
        { "id": 17, "nome": ".Net" },
        { "id": 18, "nome": "Desenvolvimento de jogos" },
        { "id": 19, "nome": "Machine Learning" },
        { "id": 20, "nome": "CSS" },
        { "id": 21, "nome": "C#" },
        { "id": 22, "nome": "C++" },
        { "id": 23, "nome": "C" },
        { "id": 24, "nome": "HTML" },
        { "id": 25, "nome": "Node.js" },
        { "id": 26, "nome": "SQL" },
        { "id": 27, "nome": "NoSQL" },
        { "id": 28, "nome": "Kotlin" },
        { "id": 29, "nome": "QA" },
        { "id": 30, "nome": "Modelagem 3D" },
        { "id": 31, "nome": "Design Gráfico" },
        { "id": 32, "nome": "Design de jogos" },
        { "id": 33, "nome": "Elixir" },
        { "id": 34, "nome": "Business Inteligence" },
        { "id": 35, "nome": "React" },
        { "id": 36, "nome": "React Native" },
        { "id": 37, "nome": "Android" },
        { "id": 38, "nome": "Flutter" },
        { "id": 39, "nome": "Data Science" },
        { "id": 40, "nome": "GoLang" },
        { "id": 41, "nome": "Computação" },
        { "id": 42, "nome": "Design System" },
        { "id": 43, "nome": "UX Design" },
        { "id": 44, "nome": "Robótica" },
        { "id": 45, "nome": "Angular" },
        { "id": 46, "nome": "Métodos Ágeis" }
      ];

     
      
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
                    <InputPesquisar placeholder="Pesquise seus interesses"/>
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