import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, Table} from "reactstrap";

export const ComponenteForm = () => {
    const [matricula, setMatricula] = useState("");
    const [nombre, setNombre] = useState("");
    const [carrera, setCarrera] = useState("Ingeniería Civil");
    const [fotoUrl, setFotoUrl] = useState("");
    const initialState={
        boton: 'guardar', titulo: 'Registo de alumnos', alumne:{}, indice:-1
    };
    const [estudiantes, setEstudiantes] = useState([]);
    const [estado, setEstado] = useState(initialState);

    const guardarE = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante]);
    };
    const borarE = (index) => {
        setEstudiantes(estudiantes.filter((_, i) => i !== index));
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

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const enviarFoto = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setFotoUrl(url);
    };
    const guardar = (event) => {
        if (estado.boton === "guardar") {
            event.preventDefault();
            guardarE({matricula, nombre, carrera, fotoUrl});
        } else if (estado.boton === "editar") {
            event.preventDefault();
            edit({matricula, nombre, carrera, fotoUrl});
        }
        setMatricula('');
        setNombre('');

    };

    return (<>
        <div className="center-container">
            <Button color="danger" onClick={toggle}>
                {estado.boton}
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <Form onSubmit={guardar} className="formulario">
                    <h1 className="titulo">{estado.titulo}</h1>
                    <FormGroup>
                        <Label>
                            Matricula:
                            <Input
                                type="text"
                                value={matricula}
                                required={true}
                                onChange={(event) => setMatricula(event.target.value)}
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Nombre:
                            <Input
                                type="text"
                                value={nombre}
                                required={true}
                                onChange={(event) => setNombre(event.target.value)}
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Carrera:
                            <Input
                                type="select"
                                required={true}
                                value={carrera}
                                onChange={(event) => setCarrera(event.target.value)}>
                                <option value="Ingeniería Civil">Ingeniería Civil</option>
                                <option value="Ingeniería Electrica">Ingeniería Electrica</option>
                                <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                                <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                                <option value="Ingeniería Química">Ingeniería Química</option>
                                <option value="IngLog">Ingeniería Química</option>
                                <option value="Ingeniería en Sistemas Computacionales">Ingeniería en Sistemas
                                    Computacionales
                                </option>
                                <option value="Licenciatura en Administración">Licenciatura en Administración</option>
                                <option value="Ingeniería en Tecnologias de la Información y Comunicaciones">Ingeniería
                                    en
                                    Tecnologias de la Información y Comunicaciones
                                </option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="foto">Foto:</Label>
                        <Input
                            type="file"
                            name="foto"
                            id="foto"
                            required={true}
                            onChange={enviarFoto}
                        />
                    </FormGroup>
                    <Button type="submit" color="primary">{estado.boton}</Button>
                </Form>
            </Modal>

        </div>
        <div>
            <h2>Lista de estudiantes:</h2>
            <Table>
                <thead>
                <tr>
                    <th>Matricula</th>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Foto</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {estudiantes.map((estudiante, index) => (
                    <tr key={index}>
                        <td>{estudiante.matricula}</td>
                        <td>{estudiante.nombre}</td>
                        <td>{estudiante.carrera}</td>
                        <td>
                            <img src={estudiante.fotoUrl} alt="Foto" className="foto2"/>
                        </td>
                        <td>
                            <Button color="primary" onClick={() => onEdit(estudiante, index)}>
                                Editar
                            </Button>
                        </td>
                        <td>
                            <Button color="danger" onClick={() => borarE(index)}>
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    </>);

};