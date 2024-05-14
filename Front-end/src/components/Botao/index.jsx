/* eslint-disable react/prop-types */




const Botao = ({nome, link,  onClick, display, type}) => {
    return(
        <button type={type} display={display} onClick={onClick} className="conectech-button" >
            <a  href={link}>{nome}</a>
        </button>
    )
}

export default Botao