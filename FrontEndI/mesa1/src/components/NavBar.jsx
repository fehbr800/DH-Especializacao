import React, { useContext } from 'react'
import '../styles/NavBar.scss'
import { Navbar, Container} from 'react-bootstrap';
import { Outlet, useNavigate } from "react-router-dom";
import { MyContext } from '../context/MyContext';


export default function NavBar() {

    const{userEmail, logout} = useContext(MyContext)
  
    const navigate = useNavigate();

    let isLogged = false;
  
    if (!isLogged) {
      navigate("/login");
    }
  
    function handleButtonClick(event) {
        event.stopPropagation();
        logout();
      }

    return (

        <div>
            <Navbar className="header">
                <Container className='justify-content-center'>
                    <Navbar.Brand className='' href="#home">
                        <h1 className='text-light'>
                            Shop Products    
                        </h1>
                    </Navbar.Brand>
                    <div className="nameLogin">
                        <h3>{userEmail}</h3>
                    </div>
                    <button type="button" className="btn btn-light" onClick={handleButtonClick}>Light</button>
                </Container>
            </Navbar>
            <Outlet/>
        </div>

    )

}

