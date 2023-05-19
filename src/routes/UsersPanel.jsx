import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {Button, Form, FormGroup, Input, Label, Modal} from "reactstrap";

export const UsersPanel = ({
                               estudiantes, onSubmit,
                               onEdit,
                               estado,
                               matricula,
                               nombre,
                               carrera,
                               fotoUrl,
                               setMatricula,
                               setNombre,
                               setCarrera,
                               setFotoUrl
                           }) => {

    const [selectedUser] = useState(null);
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
            onSubmit({matricula, nombre, carrera, fotoUrl});
        } else if (estado.boton === "editar") {
            event.preventDefault();
            onEdit({matricula, nombre, carrera, fotoUrl});
        }
        setMatricula('');
        setNombre('');

    };
    return (<>
        <div className="center-container mt-4">
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
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h2 className="mb-0">Lista de Usuarios</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                {estudiantes.map((user) => (<li
                                    key={user.matricula}
                                    className={`list-group-item list-group-item-action ${selectedUser && selectedUser.id === user.matricula ? 'active' : ''}`}
                                >
                                    <Link to={`alumno/${user.matricula}`}>
                                        {user.nombre}
                                    </Link>
                                </li>))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    </>);
};