// src/CustomAlert.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import './CustomAlert.css'; // Import custom CSS for alert styling

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <span className="custom-alert-message">{message}</span>
        <button className="custom-alert-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomAlert;
