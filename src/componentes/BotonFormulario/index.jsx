const BotonFormulario = ({className, value, irAValidar}) => {
     return <input type="button" className={className} value={value} onClick={irAValidar}/>
 }
 
 export default BotonFormulario