import React from 'react';
import Card from 'react-bootstrap/Card';

export const Inscripcion = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Inscripción al primer semestre 2022-1</Card.Title>
                    <Card.Text>
                        Para realizar el pago de inscripción al semestre 2022-2, sigue los siguientes pasos:
                        <ol>
                            <li>Ingresar a la página de Gobierno del Estado de México: <a href="https://sfpya.edomexico.gob.mx/recaudacion/">https://sfpya.edomexico.gob.mx/recaudacion/</a></li>
                            <li>Capturar los datos requeridos.</li>
                            <li>En "Tipo de pago", seleccionar "Cuotas".</li>
                            <li>En "Concepto", seleccionar "Inscripción" o "Reinscripción".</li>
                            <li>Importe: $2,402.00.</li>
                            <li>Una vez realizado el depósito, enviar tu ficha de depósito.</li>
                        </ol>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Inscripción Curso de Inglés A1</Card.Title>
                    <Card.Text>
                        El pago del curso de Inglés por nivel es de $1,350.00 y se debe depositar en la cuenta 0132491435 o la CLABE interbancaria 012540001324914358 del Banco BBVA BANCOMER.
                        <br />
                        Después de hacer el depósito, coloca en un espacio seguro (donde no se dañe la información) tu nombre completo, carrera que cursas y número de cuenta del estudiante.
                        <br />
                        Para concluir tu inscripción al curso de Inglés, deberás enviar tu ficha de depósito.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Text>
                        <strong>Nota:</strong> Recuerda guardar tus fichas de depósito, ya que se te solicitarán posteriormente por las áreas correspondientes.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};
