import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'; // Telegram Icon
import classes from "../styles/TelegramButton.module.css"


const TelegramButton = () => {
  const telegramLink = 'https://t.me/AminulKibria'; // Replace with your Telegram username

  return (
    <a
    className={classes.button}
      href={telegramLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTelegramPlane} size="2x" color="white" />
    </a>
  );
};

export default TelegramButton;
