import React from 'react'
function Home(){
   return(
    <div>
        <h1 className="Title1">Hola, soy Abby Donis</h1>
        <p className="paragraph">Este es mi portafolio, aquí podrán ver screenshots, videos y 
        fragmentos del código de varios de mis proyectos.</p>
        <div className='Media'>
            <img src="/src/assets/Home.png" alt="BlogFrontend1" />
        </div>
        <h2 className='subtitle2'>Datos relevantes</h2>
        <p>Estudios: Universidad del Valle de Guatemala<br />Idiomas: Español (idioma materno), Inglés (B2+) y Francés (A2)</p>
        <h2 className='subtitle2'>Contacto y Github</h2>
        <p>No. de teléfono: (+502) 3524-5391 <br/> Correo electrónico: abby.donis.a@gmail.com</p>
        <p>Github: 
            <a href="https://github.com/abbydoag"  target="_blank"> https://github.com/abbydoag</a>
        </p>
        

    </div>
   )
}
export default Home