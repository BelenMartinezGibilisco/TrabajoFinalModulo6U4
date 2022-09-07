import React from "react";
import "../styles/components/pages/HomePage.css";

const HomePage = (props) => {
    return (
        <main className="holder">
        <div>
        <section className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
                Somos una fundación sin fines de lucro que se dedica a brindar mayor conocimiento sobre la enfermedad celíaca y otras alergias similares, como la intolerancia al gluten 
            en sus diferentes grados.
            Nuestros objetivos son, por un lado brindar información a quienes sienten malestares, cansancio extremo y se encuentran en la búsqueda de su diagnóstico para que puedan
            identificarlo más rápido, o si tienen una sospecha acudan a un médico y así recibir el tratamiento adecuado. Ya que la celiaquía no se cura, sino que sus síntomas disminuyen
            solamente con una correcta alimentación y tomando ciertos recaudos a la hora de preparar alimentos, servirlos y a veces también en el uso de productos de higiene o vestimenta
            que pudieran contener gluten en su proeso de elaboración o envasado.            
          </p>
        </section>
        <div className="homeimg">
        <img
          src="img/freeglutenhome.jpg"
          width="100%"
          alt="plato de fideos sin gluten"/>       
        </div>
        <div className="bienvenidos">
        <p>     Otro de nuestros objetivos es incentivar en las personas una mayor conciencia sobre su alimentación. En la actualidad existe un consumo masivo de alimentos ultraprocesados
            que son elaborados, por quienes los fabrican, para generar una mayor ganancia y no necesariamente para ofrecer los nutrientes que nuestr cuerpo necesita. Nos hemos acostumbrado
            a consumir lo que nos vendan sin analizar si está preparado con ingredientes que aporten un valor nutricional a nuestro cuerpo y favorecer nuestra salud.
                Nos encontramos trabajando en diferentes lugares de Argentina, brindando talleres gratuitos sobre alimentación conciente en zonas desfavorecidas. Y comos somos una entidad
            privada gran parte de nuestra financiación para ayudar a comunidades que lo necesitan provienen de los talleres on-line que brindamos sobre alimentación sin tacc.
            </p>
            <h3>¿Te interesa trabajar como voluntaria/o con nosotros? ¿Querés información específica sobre la enfermedad celíaca? ¿Te gustaría anotarte en alguno de nuestros talleres? ¡Contactanos, y te estaremos enviando toda la información!
            Esperamos que disfrutes nuestras recetas. ¡Saludos!</h3>
        </div>
      </div>
    </main>
    );
}

export default HomePage;