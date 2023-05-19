import { useParams } from 'react-router-dom';
import React from "react";

export const User = ({ borrar, estudiantes, onEdit }) => {
    const params = useParams();
    const alumno = estudiantes.find((element) => element.matricula === params.matriculaAlumno);
    console.log(estudiantes);

    const handleDeleteUser = () => {
        borrar(alumno.matricula);
        // Redirigir a la página principal ("/")
    };

    const eliminar = () => {
        const indiceAlumno = estudiantes.findIndex((element) => element.matricula === params.matriculaAlumno);
        console.log(indiceAlumno);
        onEdit(alumno, indiceAlumno);
    };

    if (!alumno) {
        return null; // Si el alumno no se encuentra, no se muestra nada
    }

    return (
        <>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header bg-success text-white">
                        <h2 className="mb-0">{alumno.nombre}</h2>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Matricula: {alumno.matricula}</p>
                        <p className="card-text">Carrera: {alumno.carrera}</p>
                        <p className="card-text">
                            <img src={alumno.fotoUrl} alt="Foto" className="foto2" />
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger mr-2" onClick={handleDeleteUser}>
                            Borrar
                        </button>
                        <button className="btn btn-primary" onClick={eliminar}>
                            Actualizar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
