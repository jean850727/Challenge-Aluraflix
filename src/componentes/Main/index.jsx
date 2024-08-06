import styled from "styled-components"
import ItemInfo from "./ItemInfo"
import Categoria from "../Categoria"
import { useEffect, useState } from "react"
import CampoTexto from "../CampoTexto"
import NuevoVideo, { LabelInput } from "../NuevoVideo/NuevoVideo"
import BotonFormulario from "../BotonFormulario"
import { ActualizarRegistro } from "../../Api/Api"
import CampoSelect from "../CampoSelect"

const SectionInfo = styled.section`
    background: url("img/fondo-info.png");
    height: 832px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 700px) {
        display: none;
        
    }
`

const SectionCategories = styled.section`
    background: #262626;
    padding: 50px 0;


    .pantalla-editar{
        background-color: #03122f67;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .container-editar{
        background-color: #03122F;
        min-width: 50%;
        text-align: left;
        box-sizing: border-box;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .container-editar .salirEditar{
        position: absolute;
        width: 30px;
        top: 20px;
        right: 20px;
    }
    
    .container-editar h1{
        font-size: 40px;
        color: #2271D1;
        font-weight: 900;
        line-height: 70.31px;
        text-align: left;
    }

    .container-formulario{
        width: 100%;
        padding: 0px 50px 20px 50px;
        box-sizing: border-box;
    }

    label{
        color: #fff;
        font-size: 17px;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
        margin: 0;
    }

    .input-editar{
        //max-width: 573px;
        width: 100%;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 2.5px solid #2271D1;
        margin-bottom: 15px;
        color: #fff;
        background-color: #03122F;
    }

    .input-editar:focus{
        outline: 2.5px solid #2271D1;
    }

    select{
        color: #A5A5A5 !important;;
    }

    .input-editar option{
        color: #fff;
        font-weight: 500;
    }


    .input-editar::placeholder{
        color: #A5A5A5;
    }


    .container-buttons-editar{
        display: flex;
        justify-content: space-around;
    }

    .container-editar .buttons-editar{
        max-width: 50%;
        width: 120px;
        height: 54px;
        border-radius: 15px;
        border: 3px solid #fff;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        background: transparent;
        color: #fff;
        cursor: pointer;
    }


    .buttons-editar:hover{
        background: #000000E5;
        border: 3px solid #2271D1;
    }

    .buttons-editar:active{
        background: #232323;
        
    }

`

const Main = () => {

    const [cardActual, setCardActual] = useState('')

    const [editar, setEditar] = useState(false)
    
    const [nombreActual, setNombre] = useState("")
    //const [categoriaActual, setCategoriaActual] = useState("")
    const [imagenActual, setImagen] = useState("")
    const [videoActual, setVideo] = useState("")
    const [descripcionActual, setDescripcion] = useState("")


    const [nombreAEnviar, setNombreAEnviar] = useState("")
    const [categoriaAEnviar, setCategoriaAEnviar] = useState("")
    const [imagenAEnviar, setImagenAEnviar] = useState("")
    const [videoAEnviar, setVideoAEnviar] = useState("")
    const [descripcionAEnviar, setDescripcionAEnviar] = useState("")


    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const getCategorias = async () => {
            const respuesta = await fetch("http://localhost:3000/categorias")
            const data = await respuesta.json()
            setCategorias([...data])

        }

        getCategorias()
    }, [])

    const [cards, setCards] = useState([])

    const getCards = async () => {
        const respuesta = await fetch("http://localhost:3000/cards")
        const data = await respuesta.json()
        setCards([...data])
    }

    useEffect(() => {


        getCards()
    }, [getCards])


    const inicializaValoresAEditar = (NuevosValores) =>{
        const {id, titulo, categoria, imagen, video, descripcion} = NuevosValores

        setCardActual(NuevosValores)
        setNombreAEnviar(titulo);
        setCategoriaAEnviar(categoria)
        setImagenAEnviar(imagen);
        setVideoAEnviar(video);
        setDescripcionAEnviar(descripcion);
        
        
    }
    

    const verificaCambios =  (valor) =>{
        const {id, titulo, categoria, imagen, video, descripcion} = cardActual
        
                
        if(valor[1] == "nombre"){
            
            if(valor[0] == "")setNombreAEnviar(titulo)
                else setNombreAEnviar(valor[0])
        }
        if(valor[1] == "categoria"){
            
            if(valor[0] == "")setCategoriaAEnviar(categoria)
                else setCategoriaAEnviar(valor[0])
        }
        if(valor[1] == "imagen"){
            
            if(valor[0] == "")setImagenAEnviar(imagen)
                else setImagenAEnviar(valor[0])
        }
        if(valor[1] == "video"){
            
            if(valor[0] == "")setVideoAEnviar(video)
                else setVideoAEnviar(valor[0])
        }
        if(valor[1] == "descripcion"){
            
            if(valor[0] == "")setDescripcionAEnviar(descripcion)
                else setDescripcionAEnviar(valor[0])
        }
    }

    const guardarEdicion = () =>{
        const {id} = cardActual
        

        ActualizarRegistro(id, nombreAEnviar, imagenAEnviar, videoAEnviar, categoriaAEnviar, descripcionAEnviar)
        setEditar(false)
    }


    const LimpiarCampos = () =>{

        const {id, titulo, categoria, imagen, video, descripcion} = cardActual

        setNombre("")
        setImagen("")
        setVideo("")
        setDescripcion("")

        setNombreAEnviar(titulo)
        setCategoriaAEnviar(categoria)
        setImagenAEnviar(imagen)
        setVideoAEnviar(video)
        setDescripcionAEnviar(descripcion)
    }

    return <>
        <SectionInfo>
            <ItemInfo cardSeleccionada={cardActual}/>
        </SectionInfo>
        <SectionCategories>
            {
                categorias.map((categoria, index) => {
                    return <>
                        <Categoria key={index} categoria={categoria} cards={cards.filter(card => card.categoria == categoria)} editar={editar} irAEditar={setEditar} valoresEditar={inicializaValoresAEditar} cardAVer={inicializaValoresAEditar}/>


                        {editar && <div className="pantalla-editar">
                            <div className="container-editar">
                                <img src="img/exit.svg" alt="salir de editar" className="salirEditar" onClick={() => setEditar(false)} />
                                <h1>Editar card:</h1>
                                <div className="container-formulario">
                                    <LabelInput htmlFor="nombre">Titulo</LabelInput>
                                    <CampoTexto validoInvalido={()=>{}} value={nombreActual} manejarCambio={setNombre} className="input-editar" id="nombre" placeholder={cardActual.titulo} verifica={verificaCambios} />


                                    <LabelInput htmlFor="categoria">Categoria</LabelInput>
                                    <CampoSelect validoInvalido={()=>{}} manejarCambio={setCategoriaAEnviar} className="input-editar" value={categoriaAEnviar} id="categoria" verifica={verificaCambios}/>


                                    <LabelInput htmlFor="imagen">Imagen</LabelInput>
                                    <CampoTexto validoInvalido={()=>{}} value={imagenActual} manejarCambio={setImagen} className="input-editar" id="imagen" placeholder={cardActual.imagen} verifica={verificaCambios}/>


                                    <LabelInput htmlFor="video">Video</LabelInput>
                                    <CampoTexto validoInvalido={()=>{}} value={videoActual} manejarCambio={setVideo} className="input-editar" id="video" placeholder={cardActual.video} verifica={verificaCambios}/>


                                    <LabelInput htmlFor="descripcion">Descripcion</LabelInput>
                                    <CampoTexto validoInvalido={()=>{}} value={descripcionActual} manejarCambio={setDescripcion} className="input-editar" id="descripcion" placeholder={cardActual.descripcion} verifica={verificaCambios}/>


                                    <div className="container-buttons-editar">
                                        <BotonFormulario className="buttons-editar" value="Guardar" irAValidar={() => guardarEdicion()} />


                                        <BotonFormulario className="buttons-editar" value="Limpiar" irAValidar={() => LimpiarCampos()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </>
                })
            }
        </SectionCategories>
    </>
}

export default Main