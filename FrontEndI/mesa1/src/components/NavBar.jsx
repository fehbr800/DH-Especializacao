import React from 'react'
import '../styles/NavBar.scss'
import { Navbar, Container } from 'react-bootstrap'


export default function NavBar({ children }) {
    return (

        <>
            <Navbar className="header">
                <Container className='justify-content-center'>
                    <Navbar.Brand className='' href="#home">
                        <h1 className='text-light'>
                            Shop Products
                        </h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            {children}
        </>

    )

}

