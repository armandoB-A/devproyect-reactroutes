import { Outlet } from "react-router-dom";

export const Prinicpal = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/inicio">
                        <img
                            src="https://yt3.ggpht.com/a/AATXAJxGMy7gdtT-DdRy5Hprln5acoxrbDoj37LcuQ=s900-c-k-c0xffffffff-no-rj-mo"
                            alt="Logo"
                            width="50"
                            height="50"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/inicio">
                                    <h3>Inicio</h3>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/users/">
                                    <h4>control de alumnos</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/informacion">
                                    <h4>Información</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};
