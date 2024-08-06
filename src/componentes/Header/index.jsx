import styled from "styled-components"
import LogoAluraFLix from "../Logo"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export const ContainerEstilizado = styled.div `
    display: flex;
    background: #090f16;
    color: #2271D1B2;
    padding: 42px 51px;
    justify-content: ${ props=> props.$tipo=="Header" ? "space-between" : "center"};
    align-items: center;

    .container-botones{
            ${props => props.$tipo == "footer" && "display: none;"}
    }

    ${props => props.$tipo == "Header" ? "border-bottom: 4px solid #2271D1;" : "border-top: 4px solid #2271D1;"}

    

    .logo-aluraflix{
        height: 40px;
    }

    .botones-header-flex{
        display: flex;
        gap: 25px;
    }


    @media (max-width: 700px) {
        ${props => props.$tipo == "Header" && "display: none;"}
        
        .logo-aluraflix{
            ${props => props.$tipo == "footer" && "display: none;"}
        }

        .container-botones{
            ${props => props.$tipo == "footer" && "display: flex;"}
            justify-content: center;
            align-items: center;
            gap: 31px;
        }

        .container-botones a{
            text-decoration: none;
            color: #2271D1;
        }

        ${props => props.$home && `.container-botones .link-home div{
            display: flex;
            align-items: center;
            justify-content: center;
            background:#2271D13D;
            padding: 6px 15px;
            border-radius: 50px;
            border: 2px solid #2271D1;
            gap: 9px;
        }
        .container-botones .link-home span{
            display: inline;
            text-decoration: none;
            font-size: 20px;
            font-weight: 900;
            line-height: 24px;
            text-align: center;
        }

        .container-botones .link-home svg{
            width: 27px;
            height: 31px;
        }
        .container-botones .link-home path{
            fill: #2271D1!important;
        }
            `
        }

        ${props => !props.$home && `.container-botones .link-home span{
            display: none;
        }
        
        .container-botones .link-home svg{
            width: 46px;
            height: 46px;
        }
        .container-botones .link-home path{
            fill: #fff!important;
        }
        ` }

        ${props => props.$nuevoVideo && `.container-botones .link-nuevo-video div{
            display: flex;
            align-items: center;
            justify-content: center;
            background:#2271D13D;
            padding: 6px 15px;
            border-radius: 50px;
            border: 2px solid #2271D1;
            gap: 9px;
        }
        .container-botones .link-nuevo-video span{
            display: inline;
            text-decoration: none;
            font-size: 20px;
            font-weight: 900;
            line-height: 24px;
            text-align: center;
        }

        .container-botones .link-nuevo-video svg{
            width: 27px;
            height: 31px;
        }
        .container-botones .link-nuevo-video path{
            fill: #2271D1!important;
        }
            `
        }

        ${props => !props.$nuevoVideo && `.container-botones .link-nuevo-video span{
            display: none;
        }
        
        .container-botones .link-nuevo-video svg{
            width: 46px;
            height: 46px;
        }
        .container-botones .link-nuevo-video path{
            fill: #fff!important;
        }
        ` }
        
    }
`

const BotonEstilizado = styled.button`
    background: #000000E5;
    color: ${props => props.$activo ? "#2271D1" : "#fff"};
    font-family: sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    width: 180.13px;
    height: 54px;
    gap: 0px;
    border-radius: 10px;
    border: 2px solid ${ props=> props.$activo ? "#2271D1" : "#fff"};

    box-shadow: ${props=> props.$activo ? "0px 0px 12px 4px #2271D1 inset" : "none"};

    text-transform: uppercase;
`

const Header = ({estadoBotonHome}) => {

    const location = useLocation();
    const [botonActivo, setBotonActivo] = useState([{path: "/", boton: "home", activo: false}, {path: "/NuevoVideo", boton: "Nuevo Video", activo: false}])

    if(location.pathname == "/NuevoVideo"){
        botonActivo.map( (boton) => {
            if(boton.path == "/NuevoVideo" && location.pathname == "/NuevoVideo"){
                console.log(location.pathname);
                boton.activo = true
            }else{
                boton.activo = false
            }
        })
    }
    if(location.pathname == "/"){
        botonActivo.map( (boton) => {
            if(boton.path == "/" && location.pathname == "/"){
                console.log("location.pathname");
                console.log(location.pathname);
                boton.activo = true
            }else{
                boton.activo = false
            }
        })
    }


    const actualizarBoton = (btn) => {
        const nuevoBtnActivo = botonActivo.map(
            btnActual => {
                if(btnActual.boton == btn) btnActual.activo = true
                else btnActual.activo = false
                    return btnActual
            }
        )

        setBotonActivo(nuevoBtnActivo)
        
    }

    const enviarAlApp = () =>{
        estadoBotonHome(true)
    }

    useEffect(() => {
        

        enviarAlApp()
    }, [setBotonActivo])


    return <ContainerEstilizado $tipo="Header" estadoBotonHome={enviarAlApp}>
        <LogoAluraFLix/>

        <div className="botones-header-flex">
            {botonActivo.map( boton => {
                return <Link to={boton.path} key={boton.path}>
                <BotonEstilizado  $activo={boton.activo} onClick={() =>actualizarBoton(boton.boton)}>
                        {boton.boton}
                </BotonEstilizado> 
            </Link>
            })
            }
        </div>
    </ContainerEstilizado>
}

export default Header