import '../estilos/Card.css'

function Card(props) {
    return(
        <div className="card">
            <img className='imagen' src = {require(`../imagenes/${props.imagen}`)} alt = {props.alt}/> 
            <div className="descripcion">
                <h2> {props.titulo} </h2>
                <p> {props.descripcion} </p>
                <p className='techStack'>Tech Stack: {props.techStack} </p>
                <a href={props.link}> View Code </a>
            </div>
        </div>
    );
}

export default Card;