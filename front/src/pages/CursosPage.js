import React from "react";
import "../styles/components/pages/CursosPage.css";

const CursosPage = (props) => {
    return (
        <main className="holder">
      <h2>Nuestros Cursos</h2>
      <div className="curso">
        <img src="img/cursospanaderia.jpg" alt="panaderia sin tacc" />
        <div className="info">
          <h3>Panadería sin tacc</h3>
          <p>
              El propósito del curso es que comprendas los principios y fundamentos de la panadería
              sin gluten, de ésta manera podrás realizar masas de una manera responsable y
              coherente, sin ocasionar sensibilidad al consumidor.
              Para todas las personas que quieran aprender sobre la panadería sin gluten y que quieran
              realizar sus propios productos para sí misma o para aquellos con sensibilidad al gluten o
              que padecen de celiaquía.            
          </p>
        </div>
      </div>
      <div className="curso">
        <img src="img/cursos pasteleria.jpg" alt="pasteleria sin tacc" />
        <div className="info">
          <h3>Pastelería sin tacc</h3>
          <p>
          Este curso online te dará herramientas para la elaboración de postres sin gluten. Además trabajaremos recetas libres de lactosa, huevo, gelatina de origen animal, y grasas trans. También contarás con un material teórico, donde se resume en palabras fáciles el comportamiento fisicoquímico de estos ingredientes sustitutivos, lo que permitirá entender el proceso que ocurre durante cada paso, dándote un abanico de posibilidades a la hora desarrollar tus postres y seleccionar tus ingredientes.
          </p>
        </div>
      </div>
      <div className="curso">
        <img src="img/cursopastas.jpg" alt="pastas sin tacc" />
        <div className="info">
          <h3>Pastas libres de gluten</h3>
          <p>
          Este curso online te dará herramientas para la elaboración de pastas frescas caseras sin gluten. Son tres clases paso a paso.
          Vas a aprender: Pastas al huevo e integrales / Ravioles y cintas / Salsa Fileto / Salsa Boloñesa.
          Ñoquis de Papa, batata, remolacha / Ñoquis de ricota / Malfati de espinaca /Salsa Pesto y variantes.
          Lasaña / Canelones /Rellenos de jamón y queso, Vegetales, Carne / Salsa Blanca y sus variantes.
          </p>
        </div>
      </div>
    </main>
    );
}

export default CursosPage;