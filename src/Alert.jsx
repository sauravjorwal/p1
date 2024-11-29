// src/Alert.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Navber.css"; // Ensure this CSS file has the necessary styles
import { useAuth0 } from "@auth0/auth0-react";

const Alert = ({ show, handleClose }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
      
      >
        <Modal.Title style={{ color: "#ffffff" }}>Alert</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "#ffffff" }}>
        {isAuthenticated
          ? `Hello, ${user?.name || "User"}! You are already logged in.`
          : "Please log in to continue."}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#343a40" }}>
        {isAuthenticated ? (
          <>
            
            <Button
              variant="outline-light"
              size="sm"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Log Out
            </Button>
          </>
        ) : (
          <Button
            variant="outline-light"
            size="sm"
            onClick={loginWithRedirect}
          >
            Log In
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Alert;
