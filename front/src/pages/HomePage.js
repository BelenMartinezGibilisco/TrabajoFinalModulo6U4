import React from "react";
import "../styles/components/pages/HomePage.css";

const HomePage = (props) => {
    return (
        <main className="holder">
        <div>
        <section className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            odio autem nostrum, excepturi itaque qui magni deleniti voluptates
            laudantium quas. Minus reprehenderit, accusamus dolorem omnis
            perspiciatis incidunt corporis tempora recusandae. Inventore nobis
            tenetur dolores expedita qui commodi exercitationem unde minus dolor
            explicabo. Error nostrum vitae provident. Officia vitae eius sint
            reprehenderit, natus alias officiis maiores consectetur repudiandae
            fuga rem quis! Magni, modi numquam provident reprehenderit a nisi
            deleniti accusantium quasi quaerat doloremque aspernatur quas nulla
            perferendis blanditiis ipsam debitis odio porro, suscipit, aut est
            nemo. Nulla repellat quod placeat error!
          </p>
        </section>
        <div className="homeimg">
        <img
          src="img/freeglutenhome.jpg"
          width="100%"
          alt="plato de fideos sin gluten"
        />
      </div>
      </div>
    </main>
    );
}

export default HomePage;