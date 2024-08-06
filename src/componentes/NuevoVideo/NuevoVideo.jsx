import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import CampoSelect from "../CampoSelect"
import CampoTextArea from "../CampoTextArea"
import BotonFormulario from "../BotonFormulario"
import { useState } from "react"
import { Validacion } from "./validacion"
import MensajeError from '../MensajeError/MensajeError'
import { CrearNuevoRegistro } from "../../Api/Api.js";
import { v4 as uuidv4 } from 'uuid';


const ContainerNuevoVideo = styled.section`
    background: #000000E5;
    padding: 71px 40px;
    
    h1{
        font-size: 60px;
        font-weight: 900;
        line-height: 70.31px;
        text-align: center;
    }

    h2{        
        font-size: 20px;
        font-weight: 400;
        line-height: 23.44px;
        text-align: center;
    }
`

const Titulo = styled.div`
    color: #fff;
    text-align: center;
    text-transform: uppercase;
`

const ContainerFormulario = styled.form`
    color: #fff;
    width: 100%;
    

    .titulo-formulario{
        border-top: 3px solid #262626;
        border-bottom: 3px solid #262626;
        text-align: left;
        padding: 20px 0;
        
        font-size: 36px;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
    }

    .container-flex{
        display: flex;
        flex-wrap: wrap;
        gap: 60px 20px;
        width: 100%;
        
    }

    .container-flex div{
        width: 100%;
    }

    .campos{
        background: transparent;
        border: 3px solid #262626;
        color: #A5A5A5;
        padding: 16px 12px;
        border-radius: 10px;
        width: 573px;
        height: 62px;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        outline: none;
    }

    .campos::placeholder, .campos{
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        color: #a5a5a5;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
    }

    .div-container-nombre label::before{
        content: ${props => props.$mensaje};
    }

    #nombre::placeholder{
        color: ${props => props.$invalidoNombre == "invalido" ? "red" : "#A5A5A5"};
    }

    #nombre{
        border: ${props => props.$invalidoNombre == "invalido" ? "3px solid red" : "3px solid #262626"};
    }

    #imagen::placeholder{
        color: ${props => props.$invalidoImagen == "invalido" ? "red" : "#A5A5A5"};
        
    }

    #imagen{
        border: ${props => props.$invalidoImagen == "invalido" ? "3px solid red" : "3px solid #262626"};
    }


    #categoria{
        color: ${props => props.$invalidoCategoria == "invalido" ? "red" : "#A5A5A5"};
        border: ${props => props.$invalidoCategoria == "invalido" ? "3px solid red" : "3px solid #262626"};
    }

    #categoria option{
        color: #262626;
        background: #fff;
    }

    #video::placeholder{
        color: ${props => props.$invalidoVideo == "invalido" ? "red" : "#A5A5A5"};
        
    }

    #video{
        border: ${props => props.$invalidoVideo == "invalido" ? "3px solid red" : "3px solid #262626"};
    }

    #descripcion::placeholder{
        color: ${props => props.$invalidoDescripcion == "invalido" ? "red" : "#A5A5A5"};
        
    }

    #descripcion{
        border: ${props => props.$invalidoDescripcion == "invalido" ? "3px solid red" : "3px solid #262626"};
    }

    .botones-nuevo-video{
        width: 180.13px;
        height: 54px;
        border-radius: 15px;
        border: 3px solid #fff;
        font-size: 20px;
        font-weight: 900;
        line-height: 24px;
        text-align: center;
        background: transparent;
        color: #fff;
        cursor: pointer;
    }

    .container-botones{
        display: flex;
        gap: 30px;
        margin-top: 60px;
    }

    .container-botones input:active{
        border: 3px solid #2271D1;
        color:#2271D1;
    }

    @media (max-width: 700px) {
        .campos{
            max-width: 100%;
            width: 100%;
        }   
    }

`

export const LabelInput = styled.label`
    color: #fff;
    display: block;
    
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;

    margin-bottom: 15px;
`

const NuevoVideo = () => {
    const [nombre, setNombre] = useState("")
    const [categoria, setCategoria] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [nombreValido, setNombreValido] = useState("inicial")
    const [categoriaValido, setCategoriaValido] = useState("inicial")
    const [imagenValido, setImagenValido] = useState("inicial")
    const [videoValido, setVideoValido] = useState("inicial")
    const [descripcionValido, setDescripcionValido] = useState("inicial")

    const [mensajeErrorCampoNombre, setMensajeErrorCampoNombre] = useState("")
    const [mensajeErrorCampoCategoria, setMensajeErrorCampoCategoria] = useState("")
    const [mensajeErrorCampoImagen, setMensajeErrorCampoImagen] = useState("")
    const [mensajeErrorCampoVideo, setMensajeErrorCampoVideo] = useState("")
    const [mensajeErrorCampoDescripcion, setMensajeErrorCampoDescripcion] = useState("")
    
    const [regresaAHome, setAHome] = useState(false)

    const navegar = useNavigate()

    const validarCampos = (e)=>{
        e.preventDefault();
        let validacionOk = Validacion([
            {clave: nombre, valorValido: nombreValido, campo: "nombre"},
            {clave: categoria, valorValido: categoriaValido, campo: "categoria"},
            {clave: imagen, valorValido: imagenValido, campo: "imagen"},
            {clave: video, valorValido: videoValido, campo: "video"},
            {clave: descripcion, valorValido: descripcionValido, campo: "descripcion"}
        ]);

        const respuesta = validacionOk[1]

        setAHome(respuesta)
        mensajesError(validacionOk[0])
    }

    const mensajesError = (mensajes) => {
        
        mensajes.map( (mensaje) => {

            switch (mensaje.campo) {
                case "nombre":
                    setNombreValido(mensaje.valorValido)
                    setMensajeErrorCampoNombre(mensaje.mensaje)
                    break;
                case "imagen":
                    setImagenValido(mensaje.valorValido)
                    setMensajeErrorCampoImagen(mensaje.mensaje)
                    break;
                case "categoria":
                    setCategoriaValido(mensaje.valorValido)
                    setMensajeErrorCampoCategoria(mensaje.mensaje)
                    break;
                case "video":
                    setVideoValido(mensaje.valorValido)
                    setMensajeErrorCampoVideo(mensaje.mensaje)
                    break;
                case "descripcion":
                    setDescripcionValido(mensaje.valorValido)
                    setMensajeErrorCampoDescripcion(mensaje.mensaje)
                    break;
                
                default:
                    
                    break;
            }

        })
        
    }

    const LimpiarCampos = () =>{
        setNombre("")
        setImagen("")
        setCategoria("")
        setVideo("")
        setDescripcion("")

        const LimpiarMensajes = [
            {campo: "nombre", valorValido: "inicial", mensaje: ""},
            {campo: "categoria", valorValido: "inicial", mensaje: ""},
            {campo: "imagen", valorValido: "inicial", mensaje: ""},
            {campo: "video", valorValido: "inicial", mensaje: ""},
            {campo: "descripcion", valorValido: "inicial", mensaje: ""}
        ]

        console.log("limpiar");
        console.log(LimpiarMensajes);

        mensajesError(LimpiarMensajes)
    }

    if(regresaAHome){
        const id = uuidv4()
        
        CrearNuevoRegistro(id, nombre, imagen, video, categoria, descripcion)
        setTimeout(() => {
        navegar('/')    
    }, 1000);}

    return <ContainerNuevoVideo>
        <Titulo>
            <h1>Nuevo video</h1>
            <h2>Complete el formulario para crear una nueva tarjeta de video</h2>
        </Titulo>
        <ContainerFormulario $invalidoNombre={nombreValido} $invalidoImagen={imagenValido} $invalidoCategoria={categoriaValido} $invalidoVideo={videoValido} $invalidoDescripcion={descripcionValido} >
            <h2 className="titulo-formulario">
                Crear Tarjeta
            </h2>

            <div className="container-flex">
                <div className='div-container-nombre' >
                    <LabelInput htmlFor="nombre">Título</LabelInput>
                    <CampoTexto className="campos" placeholder={"ingrese el título"} id="nombre" name="nombre" value={nombre} manejarCambio={setNombre} validoInvalido={setNombreValido} verifica={()=>{}} />
                    <MensajeError mensaje={mensajeErrorCampoNombre}/>
                </div>

                <div>
                    <LabelInput htmlFor="categoria">Categoria</LabelInput>
                    <CampoSelect name="categoria" id="categoria" value={categoria} manejarCambio={setCategoria}
                    validoInvalido={setCategoriaValido} verifica={()=>{}}/>
                    <MensajeError mensaje={mensajeErrorCampoCategoria}/>
                </div>
                
                
                <div>
                    <LabelInput htmlFor="imagen">Imagen</LabelInput>
                    <CampoTexto className="campos" placeholder={"ingrese el enlace de la imagen"} name="imagen" id="imagen" value={imagen} manejarCambio={setImagen} validoInvalido={setImagenValido} verifica={()=>{}}/>
                    <MensajeError mensaje={mensajeErrorCampoImagen}/>
                </div>                
                
                <div>
                    <LabelInput htmlFor="video">Video</LabelInput>
                    <CampoTexto className="campos" placeholder={"ingrese el enlace del video"} name="video" id="video" value={video} manejarCambio={setVideo} validoInvalido={setVideoValido} verifica={()=>{}}/>
                    <MensajeError mensaje={mensajeErrorCampoVideo}/>
                </div>
                
                
                <div>
                    <LabelInput htmlFor="descripcion">Descripción</LabelInput>
                    <CampoTextArea className="campos" placeholder={"¿De qué se trata este vídeo?"} name="descripcion" id="descripcion" value={descripcion} manejarCambio={setDescripcion} validoInvalido={setDescripcionValido} verifica={()=>{}}/>
                    <MensajeError mensaje={mensajeErrorCampoDescripcion}/>
                </div>

                
            </div>

            <div className="container-botones">
                <BotonFormulario className="botones-nuevo-video" irAValidar={(e)=>{
                    validarCampos(e)
                }} value="Guardar" />
                <BotonFormulario  irAValidar={()=>LimpiarCampos()} className="botones-nuevo-video" value="limpiar"/>
            </div>
            
        </ContainerFormulario>
    </ContainerNuevoVideo>
}

export default NuevoVideo