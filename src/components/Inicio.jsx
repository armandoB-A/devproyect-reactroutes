export const Inicio = () => {
    return (
        <div className="text-center">
            <h1>Tecnologico de Estudios Superiores de Jilotepec</h1>
            <p style={{ margin: "50px" }}>Actualmente, el Tecnológico de Estudios Superiores de Jilotepec tiene como instalaciones 10 edificios equipados con 42 aulas, 18 laboratorios que corresponden a las 9 licenciaturas, 1 taller de dibujo, 8 salas de cómputo, 2 salas como centros de idiomas, 1 biblioteca, 1 cafetería y oficinas administrativas. Como institución preocupada por el medio ambiente, cuenta con 1 planta tratadora de agua y preocupado por la formación integral de sus estudiantes tiene canchas de fútbol rápido, fútbol soccer, voleibol y básquetbol. Así mismo, 1 auditorio para 200 personas y 1 explanada para eventos.
            </p>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ maxWidth: "1300px", margin: "0 auto" }}
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="tec1.jpg"
                            className="d-block w-100"
                            alt="Slide 1"
                            style={{ maxHeight: "400px" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="tec2.jpg"
                            className="d-block w-100"
                            alt="Slide 2"
                            style={{ maxHeight: "400px" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="tec3.jpg"
                            className="d-block w-100"
                            alt="Slide 3"
                            style={{ maxHeight: "400px" }}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
