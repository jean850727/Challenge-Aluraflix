import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"
import { BorrarCard } from "../../Api/Api"

const ContainerCategoria = styled.section`
    margin: 0px 20px 0px 20px;
    padding: 50px 0;
    
    .container-card{
        display: flex;
        gap: 30px;
        overflow: auto;
        flex-direction: row;
        padding: 15px;
        scroll-snap-type: x mandatory;
    }
`
const Card = styled.div`
    background: #fff;
    width: 430px;
    height: 324px;
    border: 5px solid #6BD1FF;
    box-shadow: 0px 0px 17px 8px #6BD1FF inset;
    border-radius: 15px;
    scroll-snap-align: center;
    
    .card-celulares img, .card-tablets{
        width: 430px;
        height: 260px;
        border-radius: 15px;
        
    }

    .container-buttons{
        position: relative;
        top: -5px;
        background-color: #000;
        height: calc(100% - 260px);
        display: flex;
        border-radius: 0 0 15px 15px;
        justify-content: center;
        gap: 70px;
        align-items: center;
        align-self: center;
    }

    button{
        display: flex;
        align-items: center;
        gap: 5px;
        background: transparent;
        color: #fff;
        border-radius: 15px;
        border: 3px solid transparent;
        cursor: pointer;
        box-sizing: border-box;
        
    }

    button:hover{
        border: 3px solid #2271D1;
        color:#2271D1;
    }

    button img{
        width: 25px;
        height: 28px;
    }


    .card-celulares{
        display: none;
    }

    @media (max-width: 700px) {
        width: 270px;
        height: 174px;
        
        .card-celulares img{
            width: 270px;
            height: 139px;
        }

        .container-buttons{
            margin-top: 2px;
            height: calc(100% - 140px);
        }

        .card-celulares{
            display: inline;
        }

        .card-tablets{
            display: none;
        }

        button img{
        width: 20px;
        height: 23px;
    }
        
    }
`



const Categoria = ({categoria, cards, editar, irAEditar, valoresEditar, cardAVer}) => {



    return <>
    {
        cards.length > 0 && <>
        <ContainerCategoria cards={cards}>
            <TituloCategoria categoria={categoria} className={categoria}/>
            <div className="container-card">
            {
                cards.map( card => {
                    return <Card key={card.id}>
                        <a className="card-celulares" href={card.video} target="_blank">
                            <img src={card.imagen} alt="imagen de referencia" onClick={() => cardAVer(card)} />
                        </a>
                        <img className="card-tablets" src={card.imagen} alt="imagen de referencia" onClick={() => {cardAVer(card); scrollTo({top: 100, behavior: "smooth"})}} />
                        <div className="container-buttons">
                            <button onClick={()=>BorrarCard(card.id)}> <img src="img/crash.png" alt="boton eliminar" />Eliminar</button>
                            <button onClick={() => { irAEditar(!editar); valoresEditar(card) }}><img src="img/editar.png" alt="boton editar" />Editar</button>
                        </div>
                        </Card>
                })
            }
            </div>
        </ContainerCategoria>
        </>
    }
    </>
}

export default Categoria