import { useState } from "react";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useTextureStore } from "../../store/textureStore";

const buttons = [
  {
    id: 1,
    icon: <img src="/Icons/Ativo 3.svg" className="icon" />,
    hoverIcon: <img src="/Icons/tampa_azul.svg" className="icon" />,
    label: "Grelha Lateral",
  },
  {
    id: 2,
    icon: <img src="/Icons/cuba_branco.svg" className="icon" />,
    hoverIcon: <img src="/Icons/orcamento_azul.svg" className="icon" />,
    label: "Design Exterior",
  },
  {
    id: 3,
    icon: <img src="/Icons/design_branco.svg" className="icon" />,
    hoverIcon: <img src="/Icons/design_azul.svg" className="icon" />,
    label: "Cuba Interior",
  },
  {
    id: 4,
    icon: <img src="/Icons/grelha_branco.svg" className="icon" />,
    hoverIcon: <img src="/Icons/grelha_azul.svg" className="icon" />,
    label: "Tampa",
  },
];

export const SideMenu = () => {
  const [hovered, setHovered] = useState(null);
  const fileInputRef = useRef(null);

  const addTextureFromButton = useTextureStore((state) => state.addTextureFromButton);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        addTextureFromButton(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  // 4 - BUTTON INTERACTION
  const handleButtonClick = (index) => {
    switch (index) {
      case 1:
        fileInputRef.current.click();
        break;
      case 2:
        fileInputRef.current.click();
        break;
      case 3:
        addTextureFromButton(null); // reset
        break;
      case 4:
        fileInputRef.current.click();
        break;
      default:
        return null;
    }
  };

  const getPositionStyle = (index) => {
    switch (index) {
      case 0:
        return { marginLeft: "80px" };
      case 1:
        break;
      case 2:
        break;
      case 3:
        return { marginLeft: "80px" };
      default:
        return {};
    }
  };


  return (
    <div className="sideMenu">
      {buttons.map((btn, index) => {
        const positionStyle = getPositionStyle(index);

        return (
          <div
            key={btn.id}
          >
            <div className="buttonGroup" style={{
              ...positionStyle,
              display: 'flex',
              gap: 12,
            }}>
              <div className="buttonLabel">
                <p style={{ color: "#fff" }}>LOTI</p>
                <p style={{ color: "#2596be" }}>{btn.label}</p>
              </div>

              {/* Button */}
              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                initial={{ scale: 1 }}
                animate={{ scale: hovered === btn.id ? 1.2 : 1 }}
                onMouseEnter={() => setHovered(btn.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleButtonClick(index)}
              >
                {hovered === btn.id ? btn.hoverIcon : btn.icon}
              </motion.div>
            </div>
          </div>
        );
      })}

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
