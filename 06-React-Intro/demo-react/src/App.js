
import './App.css';
import Title from './components/Title';
import Alumnos from "./components/Alumnos";
import Boton from './components/Boton';
import Boton2 from './components/Boton2';
function App() {

const alumnos = [
  {name: 'Anthony', age:25 },
  {name: 'Aldana', age:21 },
  {name: 'Verdu', age:35 },
  {name: 'Nico', age:28 },
  {name: 'Miguel', age:29 },
  {name: 'Chuky', age:27 },
]



  return (
    <div>
      <Title/>
      <Alumnos alumnos= {alumnos} cohorte='FT-43A' totalAlumnos ='400'/>
      <Boton texto= 'Esto es un boton'/>
      <Boton2 texto= 'Boton con clase'/>
    </div>
  );
}

export default App;
