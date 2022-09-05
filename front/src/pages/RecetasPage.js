import "../styles/components/pages/RecetasPage.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";

const RecetasPage = (props) => {

      const [loading, setLoading] =useState(false);
      const [novedades, setNovedades] = useState ([]);

      useEffect (() => {
          const cargarNovedades = async  () => {
          setLoading(true);
          const response = await axios.get("http://localhost3000/api/novedades");
          setNovedades(response.data);
          setLoading(false);
      };
      
     cargarNovedades();

}, []);

return (
      <section className="holder">
        <h2>Recetas</h2>
        {loading ? (
          <p>Cargando ...</p>
        ) : (
            novedades.map(item => <NovedadItem key={item.id}
              title={item.titulo} subtitle={item.ingredientes} body={item.preparacion}
              />)
        )}
      </section>
      );
    }

export default RecetasPage;