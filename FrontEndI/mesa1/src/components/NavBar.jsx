import React, { useContext, useEffect, useState} from 'react'
import '../styles/NavBar.scss'
import { Navbar, Container} from 'react-bootstrap';
import { Outlet, useNavigate, Link } from "react-router-dom";
import { MyContext } from '../context/MyContext';


export default function NavBar() {

    const { userEmail, logout } = useContext(MyContext)

    const navigate = useNavigate();
  
    let isLogged = !!userEmail;
  
    function handleLogoutClick() {
      logout();
      navigate("/login");
    }
  
   
    return (

        <div>
            <Navbar className="header flex-wrap">
                <Container className='justify-content-evenly'>
                    <Navbar.Brand className='d-flex flex-wrap' href="#home">
                        <h1 className='text-light'>
                            Shop Products    
                        </h1>
                    </Navbar.Brand>
                    <div className="d-flex align-items-center flex-wrap">
            {userEmail ? (
              <>
                <p className="mx-lg-5 mx-md-auto text-light">{userEmail}</p>
                <button className="btn btn-warning text-light" onClick={handleLogoutClick}>
                  sair
                </button>
              </>
            ) : (
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            )}
          </div>
                </Container>
            </Navbar>
            <Outlet/>
        </div>

    )

}

