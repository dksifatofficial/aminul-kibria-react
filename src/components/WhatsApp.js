// WhatsAppButton.js
import React from 'react';
import classes from "../styles/WhatsApp.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // WhatsApp Icon

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/+8801722020182'; // Replace with your phone number (in international format without '+')

  return (
    <a
      className={classes.button}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    //   style={styles.floatingButton}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
    </a>
  );
};

// const styles = {
//   floatingButton: {
//     position: 'fixed',
//     bottom: '2rem',
//     left: '2rem',
//     backgroundColor: '#25D366', // WhatsApp green color
//     borderRadius: '100%',
//     padding: '15px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     zIndex: 1000,
//     textAlign: 'center',
//   },
// };

export default WhatsAppButton;
