import React from "react";
import "../styles/components/pages/NosotrosPage.css";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
      <div className="historia">
        <h2>Nuestra Historia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          autem ratione, molestiae nisi nostrum ipsam sunt ipsum alias aliquid
          impedit velit pariatur obcaecati cupiditate voluptate eum ducimus
          laboriosam dolor praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          libero quam, laborum ab, excepturi ipsa officia repellendus fugiat,
          debitis nobis labore. Cupiditate ratione tempore fuga unde perferendis
          delectus dignissimos odio?
        </p>
      </div>
      <div className="equipo">
        <img
          src="img/grupo de cocineros.jpg"
          alt="nuestro grupo de cocineros y cocineras"
        />
      </div>
    </main>
    );
}

export default NosotrosPage;