import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { MyContext } from "../../context/MyContext";
import { Button, Container, Form, Card } from 'react-bootstrap';
import '../../styles/Login.scss'

export default function Login() {

    const { changeUserEmail } = useContext(MyContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' });

    function handleFormSubmit(e) {
        e.preventDefault();
        changeUserEmail(formData.email);
        navigate('/');
    }

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className='container-login d-flex align-items-center'>
        <Container className='d-flex'>

            <Card>
                <Card.Body>
                    <Card.Text>
                        <h3 className="card-title text-center">Login</h3>
                    </Card.Text>

                    <Card.Text>
                        <p className="card-text text-center mb-4">Insira seus dados para entrar no
                            sistema</p>
                    </Card.Text>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                        
                            <Form.Control
                                type="email"
                                placeholder="E-mail"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicPassword">
                           
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="warning" type="submit">
                           Entrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
}
