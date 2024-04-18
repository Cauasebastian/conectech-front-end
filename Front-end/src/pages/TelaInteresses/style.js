import styled from 'styled-components'

export const DivTelaInteresses = styled.div`
    background-image: linear-gradient(#003363  ,#010727);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: 3rem;
`
export const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin-top: 3rem;
`
export const TituloPrincipal = styled.h2`
     font-family: "Montserrat", sans-serif;
     color: #F1F1F1;
     font-weight: 400;
     font-size: 1.5rem;
`
export const TituloSecundario = styled.p`
    color: #B5B5B5;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    margin-top: -0.2rem;
`
export const FormPesquisar = styled.form`
    border: 1px solid #D3D3D3;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 30px;
    margin-top: 2.5rem;
    height: 2rem;
    background-color: #F1F1F1;
    padding: 0.5rem;
`
export const InputPesquisar = styled.input`
    background-color: transparent;
    border: none;
    padding-left: 1rem;
    outline: none;
    color: #000;
    font-size: 1rem;

    &::placeholder{
        color: #A4A4A4;
        font-family: "Montserrat", sans-serif;
    }
    
    @media (max-width: 512px){
        &::placeholder{
            color: transparent;
        }
    }
    

`

export const ListaInteresses = styled.ul`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 5rem;
    gap: 1rem;
    margin-bottom: 4rem;
`

export const ItemInteresse = styled.li`
    color: ${props => props.color};
    font-family: "Montserrat", sans-serif;
    font-size: 0.8rem;
    border-radius: 19px;
    border: 1px solid #D8D8D8;
    padding: 0.5rem 1rem;
    background-color: ${props => props.bgColor } ;
    cursor: pointer;

    &:active {
        background-color: #555;
    }
`