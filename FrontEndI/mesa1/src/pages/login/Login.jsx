import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { MyContext } from "../../context/MyContext";
import { Container } from 'react-bootstrap';

export default function Login () {

    const { changeUserEmail } = useContext(MyContext);

    const navigate = useNavigate();



  const [formData, setFormData] = useState({ email: "", password: "" });

  function logar() {
    /*  alert(JSON.stringify(formData)); */
    changeUserEmail(formData.email);
    navigate("/");
  }

  return (
    
    <Container fluid className='d-flex'>

    <input
      onChange={(event) =>
        setFormData({ ...formData, email: event.target.value })
      }
      value={formData.email}
      style={{ height: 30, width: 300 }}
      type="email"
      placeholder="Digite seu email"
    />
    <br />

    <input
      onChange={(event) =>
        setFormData({ ...formData, password: event.target.value })
      }
      value={formData.password}
      style={{ height: 30, width: 300, marginTop: 20 }}
      type="text"
      placeholder="Digite sua senha"
    />
    <br />
    <button onClick={logar}> Entrar</button>
    </Container>
  
       
  );
   }
