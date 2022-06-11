import './App2.css'
import Card from "./componentes/Card";

const elementosCards = 
[
    {imagen: 'Contador-clics.png', alt: 'imagen', titulo: 'Contador de Clics', descripcion: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', stack:'HTML CSS JavaScript React', link:'github'},
    {imagen: 'Calculadora.png', alt: 'imagen', titulo: 'Calculadora', descripcion: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', stack:'HTML CSS JavaScript React', link:'github'},
    {imagen: 'imagenes-responsivas.jpg', alt: 'imagen', titulo: 'Lista de Tareas', descripcion: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', stack:'HTML CSS JavaScript', link:'github'},
]

function App2() {
    return (
        <div className="App2">

            {
                elementosCards.map(card => (
                    <Card 
                    imagen={card.imagen}
                    alt={card.alt}
                    titulo={card.titulo}
                    descripcion={card.descripcion}
                    techStack={card.stack}
                    link={card.link}
                    />
                ))

            }
        </div>
    );
}

export default App2;