import React from "react";
import "../styles/components/pages/InfoPage.css";

const InfoPage = (props) => {
    return (
      <main className="holder">
        
      <div>
        <h2>En qué consiste la alimentación libre de gluten</h2>
        <p>
          Una dieta sin gluten es un plan de alimentación que excluye los
          alimentos que contienen gluten. El gluten es una proteína que se
          encuentra en el trigo, la cebada, el centeno y el triticale (un
          cruzamiento entre el trigo y el centeno).
          Los productos sin TACC son todos aquellos productos libres de gluten, aptos para celíacos. Son productos que no tienen ni estuvieron en contacto con TACC (trigo, avena, cebada o centeno) desde el inicio del proceso hasta el final. Generalmente, a los productos sin gluten o sin TACC se los identifica con un logo.
        </p>
      </div>
      <div className="org">
      <div className="alimentacion row">
          <h3>Permitidos</h3>
          <p>
          Son aquellos que no tienen en su composición, ni estuvieron en contacto, con gluten derivado de trigo, avena, cebada o centeno.
          </p>
          <ul>
            <li>Frutas y verduras</li>
            <li>Frijoles, semillas, legumbres y frutos secos en su forma natural, sin procesar.</li>
            <li>Huevos.</li>
            <li>Carnes magras y no procesadas, pescado y carne de aves</li>
            
          </ul>        
        </div>
        <div className="alimentacion row">
          <h3>Alimentos que hay que evitar</h3>
          <p>
          Como habrás podido deducir de lo que hemos comentado hasta ahora, los alimentos que no pueden comer las personas con celiaquía son todos aquellos que contengan los cereales con gluten. Pero dentro de estos, hay algunos evidentes, y otros que no siempre lo son. Si tienes dudas, mandanos un mensajito. También hay Apps  para identificar alimentos sin gluten.
          </p>
          <ul>
            <li>Harina de trigo, centeno cebada, triticale, espelta, y avena. </li>
            <li>Panes y empanadas de harinas con gluten.</li>
            <li>Bizcochos y bollería industrial.</li>
            <li>Pastas alimenticias (spaghetti, pasta de sopa, etc.) </li>
            <li>Pan rallado.</li>
            <li>Galletas.</li>
            <li>Cereales de desayuno con granos de los cereales con gluten.</li>
            <li>Cerveza</li>
            
          </ul>
        </div>
        <div className="alimentacion row">
          <h3>Consumir con precaución</h3>
          <p>Como ves, la lista de alimentos que tienen gluten de forma natural es mucho más corta de la relación de alimentos preparados que pueden incluirlo en su elaboración. El motivo es que a menudo los alimentos procesados y elaborados contienen muchas más cosas que el alimento principal del que deberían estar hechas.Eso no significa que una persona celíaca tenga que privarse de nutrientes fundamentales para su salud. El gluten es una proteína pero tiene un bajo perfil nutricional, y casi todos los alimentos con gluten tienen hoy en día alternativas sin gluten a un precio más o menos asequible. Es posible alimentarse bien y sin grandes limitaciones siendo celíaco. ¡Visitá nuestra páginas de recetas!            
          </p>
          <ul>
            <li>Alimentos precocinados o deshidratados</li>
            <li>Preparados lácteos.</li>
            <li>Preparados de pescado y huevo</li>
            <li>Salsas y sopas comerciales</li>
            <li>Alimentos de venta a granel</li>
            <li>Bebidas</li>
            <li>Snacks y dulces</li>
            
          </ul>
        </div>        
      </div>
    </main>
    );
}

export default InfoPage;