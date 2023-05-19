import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Prinicpal} from "./routes/Prinicpal";
import {UsersPanel} from "./routes/UsersPanel";
import {User} from "./components/User";
import {ComponenteForm} from "./components/ComponenteForm";
import {Inicio} from "./components/Inicio";
import Informacion from "./components/Informacion";

const App = () => {


    const [matricula, setMatricula] = useState("");
    const [nombre, setNombre] = useState("");
    const [carrera, setCarrera] = useState("Ingeniería Civil");
    const [fotoUrl, setFotoUrl] = useState("");
    const initialState = {
        boton: 'guardar', titulo: 'Registo de alumnos', alumne: {}, indice: -1
    };
    const [estudiantes, setEstudiantes] = useState([{
        matricula: '201923412', nombre: 'Jose Armando Blas Arce', carrera: 'Ing. Sistemas', fotoUrl: ''
    }, {matricula: '201923413', nombre: 'Jose Arce', carrera: 'Ing. Logística', fotoUrl: ''}, {
        matricula: '201923414', nombre: 'Armando Blas', carrera: 'Ing. Administración', fotoUrl: ''
    }]);
    const [estado, setEstado] = useState(initialState);

    const guardarE = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante]);
    };
    const borarE = (matricula) => {
        console.log(estudiantes)
        setEstudiantes(estudiantes.filter((m, i) => m.matricula !== matricula));
        console.log(estudiantes)
    };

    const onEdit = (estudiante, index) => {
        setEstado({boton: 'editar', titulo: 'Editar alumnos', alumne: estudiante, indice: index})
        setMatricula(estudiante.matricula)
        setNombre(estudiante.nombre)
        setCarrera(estudiante.carrera)
        setFotoUrl(estudiante.fotoUrl)
    }
    const edit = (estudiante) => {
        const aux = [...estudiantes];
        aux[estado.indice] = estudiante;
        setEstudiantes(aux);
        setEstado(initialState);
    }


    return (
        <Router>
        <Routes>
            <Route path="/" element={<div><Prinicpal/></div>}>
                <Route path="inicio"
                       element={<div><Inicio
                       /></div>}/>
                <Route path="/users/*"
                       element={<div><UsersPanel
                           estudiantes={estudiantes}
                           onSubmit={guardarE}
                           onEdit={edit}
                           estado={estado}
                           matricula={matricula} setMatricula={setMatricula}
                           nombre={nombre} setNombre={setNombre}
                           carrera={carrera} setCarrera={setCarrera}
                           fotoUrl={fotoUrl} setFotoUrl={setFotoUrl}
                       /></div>}>
                    <Route path="alumno/:matriculaAlumno"
                           element={<div><User
                               borrar={borarE}
                               estudiantes={estudiantes}
                               onEdit={onEdit}
                           /></div>}/>
                </Route>
                <Route path="informacion"
                       element={<div><Informacion
                       /></div>}/>
            </Route>
        </Routes>
    </Router>);
};

export default App;