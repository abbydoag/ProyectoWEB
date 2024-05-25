import useNavigate from "@hooks/useNavigate"
import Nav from "@components/Nav"

import Home from "@pages/Home"
import Proyectos from "@pages/Proyectos"
import SobreMi from "@pages/SobreMi"

//rutas
const routes = {
    '/':{
        component: Home
    },
    '/SobreMi':{
        component: SobreMi
    },
    '/Proyectos':{
        component: Proyectos
    }
}

function Router(){
    const {page}= useNavigate()

    let CurrentPage = () => <h1 className="Title1">⛔ Page Not Found ⛔</h1>
    if (routes[page]){
        CurrentPage = routes[page].component
    }
    return(
        <div>
            <Nav/>
            <div className="container mt-3">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <CurrentPage/>
                </div>
            </div>
        </div>
    )
}

export default Router