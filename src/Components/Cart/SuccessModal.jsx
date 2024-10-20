// SuccessModal.js
import React from 'react';
import './SuccessModal.css'; // Create a CSS file for styles

const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <div className={`success-modal-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div className="success-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
              
              <p>Your Cart</p>
              <hr/>
              <h1>Congratulations <br/>
                Order Placed!</h1>
           <img src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1729348197/plant_1_npyjuu.png"/>
           <p>Thank you for choosing Chaperone services.
           We will soon get in touch with you!</p>

           <button onClick={onClose} className="closer">cotinue shopping</button>
            </div>
        </div>
    );
};

export default SuccessModal;
