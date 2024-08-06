import styled from "styled-components"

const TituloComponent = styled.div`
    background-color: transparent;
    max-width: 430px;
    height: 70px;
    margin: 40px 0;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100vw;
        padding: 45px 10px;
        width: 100%;
        height: 100%;
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
    }

    h1{
        margin: 0;
        border-radius: 15px;
        color: #fff;
        line-height: 37.5px;
        text-transform: uppercase;
    }

    .Front{
        background: #6BD1FF!important;
        border-radius: 15px;
    }

    .Back{
        background: #00C86F;
        border-radius: 15px;
    }

    .Innovación{
        background: #FFBA05;
        border-radius: 15px;
    }
    
`



const TituloCategoria = ({ categoria, className }) => {
    return <TituloComponent>
        <div className={className}>
            <h1 >
                {categoria}
            </h1>
        </div>
    </TituloComponent>
}

export default TituloCategoria