import React from 'react';
import { Html } from '@react-three/drei';
import "../../css/brand.css";

const InfoButton = ({ position, togglePopup, iconNumber, title, description, isPopupOpen }) => {
  return (
    <Html position={position} center>
      <div style={{ cursor: 'pointer' }} onClick={() => togglePopup(iconNumber, title, description)}>
        <img
          style={{ width: '24px', height: '24px' }}
          
          src={`/Icons/infoIcon${isPopupOpen === iconNumber ? 'Selected' : 'Unselected'}.svg`} 
          alt="info icon"
        />
      </div>
    </Html>
  );
};

export default InfoButton;
