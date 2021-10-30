import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid container">
                <Link to='/' className="navbar-brand w-50"> <img className='logo' src="https://i.ibb.co/ckQ5x6N/travel.png" alt="" /> World Tours</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/tours' className="nav-link active" aria-current="page">Tour</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link active" aria-current="page">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link active" aria-current="page">Contact</Link>
                        </li>
                        {
                            user.email ?
                                <div className="mt-2 ms-5 text-white"> <img className='profile' src={user.photoURL} alt="" /> <span>{user.displayName}</span> <button className="logout-btn" onClick={logout}>Logout</button>
                                </div>
                                :
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link active text-white" aria-current="page">Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;