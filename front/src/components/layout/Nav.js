import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
    
    
    return ( 

        <nav>
      <div class="holder">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo": undefined }>Home</NavLink></li>
          <li><NavLink to="/nosotros" className={({ isActive}) => isActive ? "activo": undefined }>Nosotros</NavLink></li>
          <li><NavLink to="/info" className={({ isActive}) => isActive ? "activo": undefined }>Alimentación sin tacc</NavLink></li>
          <li><NavLink to="/recetas" className={({ isActive}) => isActive ? "activo": undefined }>Recetas</NavLink></li>
          <li><NavLink to="/cursos" className={({ isActive}) => isActive ? "activo": undefined }>Cursos</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive}) => isActive ? "activo": undefined }>Contacto</NavLink></li>
          
        </ul>
      </div>
    </nav>
    );    
        
}

export default Nav;