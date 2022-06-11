import '../estilos/Icono.css'

function Icono( props ) {
    return (
    <img className="icono" src = {require(`../iconos/${props.imagen}.svg`)} alt = {props.alt}/> 
    );
}

export default Icono;