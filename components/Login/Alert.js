import React from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = ({ variant, message, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <Alert variant={variant} onClose={onClose} dismissible>
        {message}
      </Alert>
    </div>
  );
};

export default AlertMessage;
