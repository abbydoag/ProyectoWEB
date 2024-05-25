function Proyectos(){
    return(
        <div>
        <h2 className="Title1">Proyectos</h2>
            
        <div className="Content">
            <ul className="post-card">
                <h3 className="subtitle">Historia en HTML</h3>
                <h4 className=""></h4>
                <p>
                    Este fue mi primer proyecto de HTML, en este debía contar una historia haciendo uso de diversas 
                    herramientas que ofrece esta tecnología. Decidí hacer un pequeño juego en estilo “choose your own 
                    adventure” en el que el jugador debía tomar decisiones para sobrevivir un hotel embrujado. Se hizo
                    uso de hipervínculos para navegar a través de la historia, brindando un mejor “ambiente” al utilizar 
                    imágenes y sonidos. En algún momento me gustaría mejorarlo con mis conocimientos más recientes en 
                    tecnologías web. 
                </p>
                <table className="Fotos">
                    <td>
                        <img src="/src/assets/HTML1.png" alt="HTML1" />
                        <img src="/src/assets/HTML2.png" alt="HTML2" />
                    </td>                    
                </table>
                <a className="git" href="https://github.com/abbydoag/PruebaHTML.git" target="_blank"    >
                    <img className="gitImage" src="/src/assets/github.png" alt="github" />
                </a>
            </ul>
            <ul className="post-card">
                <h3 className="subtitle">Dibujo con CSS</h3>
                <h4 className=""></h4>
                <p>
                    Este dibujo se realizando haciendo uso exclusivo de CSS, es un dibujo de un personaje 
                    llamado Owlbert de la serie "The Owl House". Se hizo uso de elementos como "::before"
                    y "::after" para añadir más detalles en la imagen. Además de que implementé transforms
                    para que la imagen tuviera animaciones interactivas. 
                </p>
                <table className="Fotos">
                    <td>
                        <img src="/src/assets/CSS1.png" alt="CSS1" />
                        <img src="/src/assets/CSS2.png" alt="CSS2" />
                    </td>                    
                </table>
                <a className="git" href="https://github.com/abbydoag/CSSONLY.git" target="_blank"    >
                    <img className="gitImage" src="/src/assets/github.png" alt="github" />
                </a>
            </ul>
            <ul className="post-card">
                <h3 className="subtitle">Blog (Backend)</h3>
                <p>
                    Este es el backend para un blog que elaboré sobre una de mis series favoritas, RWBY, en este se
                    implementaron operaciones CRUD para los posts del blog. Express fue utilizado para manejar los 
                    requests y responses, cors se utilizó para que el contenido de los posts fuera visto en el frontend
                    permitiendo que el fetch se realizara y MySQL fue utilizado para crear la base de datos para guardar los posts. 
                </p>
                <table className="Fotos">
                    <td>
                        <img src="/src/assets/BlogBackend1.png" alt="BlogBackend1"/>
                        <img src="/src/assets/BlogBackend2.png" alt="BlogBackend2"/>
                        <img src="/src/assets/BlogBackend3.png" alt="BlogBackend3"/>
                    </td>                    
                </table>
                <a className="git" href="https://github.com/abbydoag/Blog_2.0.git" target="_blank"    >
                    <img className="gitImage" src="/src/assets/github.png" alt="github" />
                </a>
            </ul>
            <ul className="post-card">
                <h3 className="subtitle">Blog (frontend)</h3>
                    <p>
                    Este es el frontend para el mismo blog, aquí se presentan los posts como si fuera un 
                    blog que encontraríamos en internet. Se hizo uso de react para construir la interfaz que 
                    en conjunto con CSS (específicamente bootstrap) hizo que tuviera un aspecto agradable. Además 
                    de que ayudaba a manejar las interacciones con el usuario, tal como el formulario para crear 
                    un post. 
                    Vite fue utilizado para que la aplicación corriera de forma optima y manejar las 
                    dependencias, con Node se manejó la programación en JavaScript que en conjunto con Express hizo 
                    la construcción de la aplicación.
                    </p>
                <table className="Fotos">
                    <td>
                        <img src="/src/assets/BlogFrontend1.png" alt="BlogFrontend1" />
                        <img src="/src/assets/BlogFrontend2.png" alt="BlogFrontend2" />
                        <img src="/src/assets/BlogFrontend3.png" alt="BlogFrontend3" />
                    </td>                    
                </table>
                <a className="git" href="https://github.com/abbydoag/ProjectoBlog.git" target="_blank"    >
                    <img className="gitImage" src="/src/assets/github.png" alt="github" />
                </a>
            </ul>
        </div>
    </div>
    )
}
export default Proyectos