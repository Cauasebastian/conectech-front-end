
import styled from 'styled-components'

export const DivSidebar = styled.div`
    position: absolute;
    
    height: 100vh;
    top: 0px;
    background-color: #fff;
    width: ${props => props.sidebarOn ? '300px' : '120px'};
    left: ${props => props.sidebarOn ? '0' : '-10px'};
`

export const IconsSidebar = {
    iconMenu: {
        fontSize: 36,
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        cursor: 'pointer',
        color: '#4A91A5'
    },

    iconsItens:{
        fontSize: 26,
        cursor: 'pointer',
        color: '#4A91A5'
        
    }
}

export const DivIcons = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 2rem;
    top: 8rem;
    gap: 2.5rem;
`

export const ItemSidebar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
   

`

export const TextItemSidebar = styled.span`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    display: ${props => props.sidebarOn ? 'block' : 'none'};
    color: #074261;
`

export const DivSettings = styled.div`
     display: flex;
    position: fixed;
    left: 2rem;
    top: 32rem;
    border-top: 1px solid #CECECE;
    padding-top: 1rem;
    gap: 0.8rem;
`