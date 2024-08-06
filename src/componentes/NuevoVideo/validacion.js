export const Validacion = (valores) =>{
    let avanzar = true;
    const valoresValidos = valores.map( (valor) => {
        valor.mensaje = ""
        if(valor.clave.length  < 5) {
            if((valor.campo == "categoria" && valor.clave.length == 0) || valor.campo != "categoria"){
                avanzar = false;
                valor.valorValido = "invalido"
                switch (valor.campo) {
                    case "nombre":
                        valor.mensaje = "Se requieren 5 caracteres mínimo."
                        break;
                    case "categoria":
                        valor.mensaje = "Elige un valor"
                        break;
                    case "imagen":
                        valor.mensaje = "No encontré tu imagen."
                        break;
                    case "video":
                        valor.mensaje = "Vídeo inválido."
                        break;
                    case "descripcion":
                        valor.mensaje = "Se requieren 5 caracteres mínimo."
                        break;
                
                    default:
                        valor.valorValido = "valido"
                        break;
                }       
            }
            return valor
        }else{
            valor.valorValido = "valido"
            return valor
        }
    })

    return [valoresValidos, avanzar]
}