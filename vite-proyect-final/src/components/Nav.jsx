import useNavigate from "@hooks/useNavigate"

const Nav = () =>{
    const {page, navigate} = useNavigate()

    return(
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="nav-toggler">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#barNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="barNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={page === "/" ? "nav-link active" : "nav-link"} onClick={() => navigate('/')} id="buttonNav">
                                <i className="fa-solid fa-house-chimney"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={page === "/SobreMi" ? "nav-link active" : "nav-link"}
                                onClick={() => navigate("/SobreMi")}
                            >
                                <i className="fa-solid fa-circle-info"></i> Sobre mi
                            </a>
                        </li>
                        <li>
                            <a
                                className={page === "/Proyectos" ? "nav-link active" : "nav-link"}
                                onClick={() => navigate("/Proyectos")}
                            >
                                <i className="fa-solid fa-briefcase"></i> Proyectos
                            </a>
                        </li>
                    </ul>                
                </div>
            </div>
        </nav>  
    )
}
export default Nav