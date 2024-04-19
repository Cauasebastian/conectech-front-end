import styled from 'styled-components'

export const DivSidebar = styled.div`
    position: absolute;
    width: 300px;
    height: 100vh;
    top: 0px;
    background-color: #fff;
    left: ${props => props.sidebarOn ? '0' : '-100%'};
`

export const IconsSidebar = {
    iconMenu: {
        fontSize: 36,
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        cursor: 'pointer'
    }
}