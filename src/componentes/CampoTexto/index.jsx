const CampoTexto = ({verifica, className="campos", validoInvalido, placeholder, nameProp, id, value, manejarCambio}) =>{
    return <input 
    required 
    className={className} 
    type="text" 
    placeholder={placeholder} 
    name={nameProp} 
    id={id} 
    onChange={(e) => { 
        verifica([e.target.value, e.target.id])
        manejarCambio(e.target.value)
        validoInvalido(() => {const valor = e.target.checkValidity() ? "valido" : "invalido" 
                            return valor})
    }}  
    
    onBlur={(e) => { 
        validoInvalido(() => {
            const valor = e.target.checkValidity() ? "valido" : "invalido"
            return valor})
    }} 
    value={value}
    />
}


export default CampoTexto