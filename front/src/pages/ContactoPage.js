import "../styles/components/pages/ContactoPage.css";
import React, {useState} from "react";
import axios from "axios";


const ContactoPage = (props) => {

  const initialForm= {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] =useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value //forma dinámica
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setSending(true)
    const response = await axios.post("http://localhost:3000/api/contacto", formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
        setFormData(initialForm);
    }
  }


    return (
        <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/> 
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" cols="30" rows="10" value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
          {sending ? <p>Enviando...</p>: null}
        {msg ? <p>{msg}</p>:null}
        </form>
         
      </div>
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <p>
          También puedes contactarse con nosotros enviándonos un mail o visitando nuestras redes sociales
        </p>
        <ul>
          <li>Email: maicitosfundacion@gmail.com</li>
          <li>Instagram: MaicitosFundacion</li>
          <li>Facebook: MaicitosFundacion</li>
          
        </ul>
      </div>
    </main>
    );
}

export default ContactoPage;