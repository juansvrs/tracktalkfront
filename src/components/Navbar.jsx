import React from 'react'
import {NavLink} from 'react-router-dom';
import { useUser } from "../context/UserContext";

export const Navbar = () => {
    const { user, exit } = useUser();
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
            <div class="container-fluid">

                <NavLink to="/" class="navbar-brand" style={{ textDecoration: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-airpods" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 4a4 4 0 0 1 4 3.8l0 .2v10.5a1.5 1.5 0 0 1 -3 0v-6.5h-1a4 4 0 0 1 -4 -3.8l0 -.2a4 4 0 0 1 4 -4z"></path>
                    <path d="M18 4a4 4 0 0 0 -4 3.8l0 .2v10.5a1.5 1.5 0 0 0 3 0v-6.5h1a4 4 0 0 0 4 -3.8l0 -.2a4 4 0 0 0 -4 -4z"></path>
                    </svg>    TrackTalk</NavLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto">

                        <li><NavLink to="/" style={{ textDecoration: 'none' }}><a class="nav-link text-decoration-none">Home</a></NavLink></li>

                        <li class="nav-item">
                            <li><NavLink to="/Music" style={{ textDecoration: 'none' }}><a class="nav-link">Music</a></NavLink></li>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Lists</a>
                        </li>
                        <li class="nav-item">
                            <li><NavLink to="/About" style={{ textDecoration: 'none' }}><a class="nav-link">About</a></NavLink></li>
                        </li>
                        {user.login? (

                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                <i className="fas fa-user"> WELCUUUUM {user.name}</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" onClick={() => exit()}>
                                <i className="fas fa-user-times"> Salir</i>
                                </NavLink>
                            </li>
                            </ul>
                            </div>

                            

                        ):(
                            <li class="nav-item dropdown position-absolute end-0 me-5">
                            <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                </svg>
                            </button>

                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><NavLink to="/Login" style={{ textDecoration: 'none' }}><p class="dropdown-item text-decoration-none">Log in</p></NavLink></li>
                                <li><NavLink to="/SignUp" style={{ textDecoration: 'none' }}><p class="dropdown-item text-decoration-none">Sign up</p></NavLink></li>
                            </ul>
                            </li> 

                        )

                            }
                        
                            

                    </ul>
                
                </div>
            </div>
        </nav>
  </div>
  )
}
