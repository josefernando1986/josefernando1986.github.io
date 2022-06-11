import './App.css';
import Icono from './componentes/Icono'

const stacks = [{ruta: 'html-icon', alt:'icono html5'},
                {ruta: 'css-icon', alt: 'icono css3'}, 
                {ruta: 'js-icon', alt:'icono javascript'}, 
                {ruta: 'react-icon', alt:'icono react'},
                {ruta: 'python-icon', alt:'icono python'}, 
                {ruta: 'git-icon', alt: 'icono git'}, 
                {ruta: 'figma-icon', alt:'icono figma'},
                {ruta: 'vscode-icon', alt: 'icono visual studio code'},
              ]

function App() {
  return (
    <div className="App">
      {stacks.map(p => 
        <Icono 
        imagen={p.ruta}
        alt={p.alt}
        />  
      )}
    </div>
  );
}

export default App;
