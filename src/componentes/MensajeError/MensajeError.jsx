import styled from "styled-components"

const MensajeErrorEstilizado = styled.p`
    &::before {
        content: ${props => `"${props.$mensaje}"`};
    }
`


const MensajeError = ({mensaje}) =>{
    return <MensajeErrorEstilizado $mensaje={mensaje}/>
}

export default MensajeError