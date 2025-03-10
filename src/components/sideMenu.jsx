import { useState } from "react";
import { motion } from "framer-motion";
import React, { useRef } from "react";

const buttons = [
  {
    id: 4,
    defaultIcon: <img src="/Icons/Ativo 3.svg" className="icon" />,
    hoverIcon: <img src="/Icons/tampa_azul.svg" className="icon" />,
  },
  {
    id: 3,
    defaultIcon: <img src="/Icons/cuba_branco.svg" className="icon" />,
    hoverIcon: <img src="/Icons/orcamento_azul.svg" className="icon" />,
  },
  {
    id: 2,
    defaultIcon: <img src="/Icons/design_branco.svg" className="icon" />,
    hoverIcon: <img src="/Icons/design_azul.svg" className="icon" />,
  },
  {
    id: 1,
    defaultIcon: <img src="/Icons/grelha_branco.svg" className="icon" />,
    hoverIcon: <img src="/Icons/grelha_azul.svg" className="icon" />,
  },
];

export const SideMenu = ({ onImageSelect }) => {
  const [hovered, setHovered] = useState(null);

  // Step 1: Create a reference for the file input
  const fileInputRef = useRef(null);

  // Step 2: Handle file upload when a user selects a file
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        onImageSelect(base64Image);  // Step 3: Send image data to parent (TensaiD)
      };
      reader.readAsDataURL(file);
    }
  };

  // Step 4: Handle button click to trigger the file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="sideMenu">
      {buttons.map((btn, index) => {
        let extraClass = "";
        if (index === 0) extraClass = "moveRight"; // Top button
        if (index === buttons.length - 1) extraClass = "moveRight"; // Bottom button

        return (
          <motion.div
            key={btn.id}
            className={`menuButton ${extraClass}`}
            initial={{ scale: 1 }}
            animate={{ scale: hovered === btn.id ? 1.2 : 1 }}
            onMouseEnter={() => setHovered(btn.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={index === 0 ? handleButtonClick : undefined} // Trigger file input on the first button
          >
            {hovered === btn.id ? btn.hoverIcon : btn.defaultIcon}
          </motion.div>
        );
      })}

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef} // Reference to the file input
        style={{ display: "none" }} // Hide the input element
      />
    </div>
  );
};
