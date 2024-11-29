// src/Navber.js
import './App.css';
import './Navber.css';
import ColorChanger from './ColorChanger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';
import Alert from './Alert'; 

export default function Navber() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    if (!isAuthenticated) {
      const alertInterval = setInterval(() => {
        setShowAlert(true); // Show the custom alert
      }, 100000000); // Show alert every 1 minute

      return () => clearInterval(alertInterval); // Clear interval on unmount
    }
  }, [isAuthenticated]);

  const handleCloseAlert = () => setShowAlert(false); // Close the alert

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Vp Logo" className="navbar-logo" />
        </a>
        
        <div className="navbar-icons">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="color-changer">
            <ColorChanger />
          </div>
        </div>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
          </ul>

          <div className="navbar-contact d-flex align-items-center">
            <a className="contact-link mx-2" href="mailto:sauravng1844@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a className="contact-link mx-2" href="https://www.linkedin.com/in/harshit-goyal-b2aaa6214" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="contact-link mx-2" href="https://github.com/sauravjorwal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          
          <div className="auth-container ms-3 d-flex align-items-center">
            {isAuthenticated ? (
              <>
                <span className="username me-3">Hello, {user.name}</span>
                <button
                  className="btn btn-outline-light btn-sm ms-3 mx-2"
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Log Out
                </button>
              </>
            ) : (
              <button className="btn btn-outline-light btn-sm" onClick={loginWithRedirect}>
                 Log In
              </button>
            )}
          </div>
        </div>
      </nav>

  
      <Alert show={showAlert} handleClose={handleCloseAlert} />
    </>
  );
}
