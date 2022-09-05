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
        </p>
      </div>
      <div className="org">
        <div className="alimentacion">
          <h3>Alimentos que hay que evitar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            atque ducimus quo. Sapiente, architecto eius! Excepturi corporis
            dicta fuga ut non minima quisquam consequuntur, earum error ab a
            voluptates quam.
          </p>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            
          </ul>
        </div>
        <div className="alimentacion">
          <h3>Consumir con precaución</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            mollitia non exercitationem commodi, suscipit, deleniti odio harum,
            sed amet quod ipsa quia dolore. Veniam hic nihil provident id ipsum
            odio?
          </p>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            
          </ul>
        </div>
        <div className="alimentacion">
          <h3>Permitidos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
            excepturi nam asperiores corporis tempora expedita in eos a, beatae
            quos quisquam obcaecati nisi minus. Commodi alias sit molestias
            quas!
          </p>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            
          </ul>

        
        </div>
      </div>
    </main>
    );
}

export default InfoPage;