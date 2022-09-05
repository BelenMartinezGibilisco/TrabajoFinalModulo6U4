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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            possimus debitis temporibus a rerum ipsam ratione ab asperiores
            eaque reiciendis esse autem consectetur iusto voluptas, incidunt
            reprehenderit nesciunt dignissimos! Repellendus?
          </p>
        </div>
      </div>
      <div className="curso">
        <img src="img/cursos pasteleria.jpg" alt="pasteleria sin tacc" />
        <div className="info">
          <h3>Pastelería sin tacc</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            possimus debitis temporibus a rerum ipsam ratione ab asperiores
            eaque reiciendis esse autem consectetur iusto voluptas, incidunt
            reprehenderit nesciunt dignissimos! Repellendus?
          </p>
        </div>
      </div>
      <div className="curso">
        <img src="img/cursopastas.jpg" alt="pastas sin tacc" />
        <div className="info">
          <h3>Pastas libres de gluten</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            possimus debitis temporibus a rerum ipsam ratione ab asperiores
            eaque reiciendis esse autem consectetur iusto voluptas, incidunt
            reprehenderit nesciunt dignissimos! Repellendus?
          </p>
        </div>
      </div>
    </main>
    );
}

export default CursosPage;