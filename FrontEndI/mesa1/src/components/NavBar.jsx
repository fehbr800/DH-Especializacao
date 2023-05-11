import React from 'react'
import '../styles/NavBar.scss'
import { Navbar } from 'react-bootstrap'


export default function NavBar() {
    return (

        <>
            <Navbar>
                <div className="header justify-content-center d-flex align-items-center min-vw-100 ">
                    <h1 className="title ">Shop Products</h1>
                </div>
            </Navbar>
        </>
    )

}

