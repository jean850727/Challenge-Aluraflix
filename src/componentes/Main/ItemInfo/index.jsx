import styled from "styled-components"

const ContainerInfo = styled.div`
    background: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    box-sizing: border-box;
    padding: 50px 30px;

    .imagen-item{
        border-radius: 20px;
    }
    
`
const CardInfo = styled.div`
    
    font-family: "Roboto", sans-serif;
    max-width: 50%;
    color: #fff;
    box-sizing: border-box;
    padding: 50px 30px;


    .titulo-descripcion{
        
        font-size: 46px;
        font-weight: 400;
        line-height: 53.91px;
        text-align: left;
    }


    .descripcion-item{
        font-size: 18px;
        font-weight: 300;
        line-height: 21.09px;
        text-align: left;
        
    }

    .Front{
        background: #6BD1FF!important;
        padding: 0 10px;
        max-width: 100%;
    }

    .Back{
        background: #00C86F;
        padding: 0 10px;
        max-width:100%;
    }

    .Innovación{
        background: #FFBA05;
        padding: 0 10px;
        max-width:100%;
    }

`

const TemaItem = styled.div`
    display: flex;
    font-size: 48px;
    font-weight: 800;
    line-height: 56.25px;
    align-items: center;
    justify-content: center;
    min-width: 296.82px;
    max-width: 10%;
    height: 92px;
    border-radius: 15px;
    user-select: none;
    box-sizing: border-box;

    
`


const ItemInfo = ({cardSeleccionada}) => {
    const {titulo="Challenge React", video="https://www.youtube.com/@AluraLatam", imagen="img/player.png", categoria="Front end", descripcion="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."} = cardSeleccionada

    return <>
        <ContainerInfo cardSeleccionada={cardSeleccionada}>
            <CardInfo >
                <TemaItem className={categoria}>
                    
                    <span >{categoria}</span>
                </TemaItem>

                <p className="titulo-descripcion">{titulo}</p>

                <p className="descripcion-item">{descripcion}</p>
            </CardInfo>

                <a href={video} target="_blank" rel="noopener noreferrer">
                    <img src={imagen} alt="imagen item" className="imagen-item"/>
                </a>
        </ContainerInfo>
    </>
}


export default ItemInfo