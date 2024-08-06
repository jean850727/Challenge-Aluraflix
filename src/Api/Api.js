export const CrearNuevoRegistro = async (id, nombre, imagen, video, categoria, descripcion) => {
    const conexion= await fetch("http://localhost:3000/cards",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        id: id,
        titulo: nombre, 
        categoria: categoria, 
        imagen: imagen, 
        descripcion: descripcion,
        video: video
    }),
    });

}

export const BorrarCard = async (id) =>{
    const conexion = await fetch("http://localhost:3000/cards/"+id,{
    method: "DELETE",
    })
}


export const ActualizarRegistro = async (id, nombre, imagen, video, categoria, descripcion) => {
    const conexion = await fetch("http://localhost:3000/cards/"+id,{
    method:"PUT",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        titulo: nombre, 
        categoria: categoria, 
        imagen: imagen, 
        descripcion: descripcion,
        video: video
    }),
    });

}