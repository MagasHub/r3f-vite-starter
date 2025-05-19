import React, { useRef, useState } from "react";
import "../index.css";
import "../GlowingCurve.css";


export function SideMenu({ onButtonClick, setCurrentMaterialP, setCurrentMaterialB, setCurrentMaterialT, materials, Cor, setCor, CorG, setCorG, tamposVisible, setTamposVisible, logoCor, setLogoCor }) {
  const fileInputRef = useRef();
  const [uploadTarget, setUploadTarget] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [submenu2Visible, setSubmenu2Visible] = useState(false);
  const [submenu4Visible, setSubmenu4Visible] = useState(false);
  const [submenu6Visible, setSubmenu6Visible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const buttonOffsets = ["80px", "40px", "25px", "25px", "40px", "80px"];
  const buttonImages = [
    { default: "/Icons/side1.svg", hover: "/Icons/side1-hover.png", label: ["LOTI", "TAMPA"] },
    { default: "/Icons/side2.svg", hover: "/Icons/side2-hover.png", label: ["LOTI", "CUBA INTERIOR"] },
    { default: "/Icons/side3.svg", hover: "/Icons/side3-hover.png", label: ["LOTI", "DESIGN FRONTAL"] },
    { default: "/Icons/side4.svg", hover: "/Icons/side3-hover.png", label: ["LOTI", "DESIGN POSTERIOR "] },
    { default: "/Icons/side5.svg", hover: "/Icons/side5-hover.png", label: ["LOTI", "GRELHA LATERAL"] },
    { default: "/Icons/side6.svg", hover: "/Icons/side5-hover.png", label: ["LOTI", "LOGO"] },
  ];
  
  const handleButtonClick = (index) => {
    if (index === 0) {
      setSubmenuVisible((prev) => !prev); // toggle submenu
      setSubmenu2Visible(false);
      setSubmenu4Visible(false);
      setSubmenu6Visible(false);
      return;
    }
    if (index === 1) {
      setSubmenu2Visible((prev) => {
        const newVisible = !prev;
        setTamposVisible(!newVisible); // hide when menu opens, show when it closes
        return newVisible;
      });
      setSubmenuVisible(false);
      setSubmenu4Visible(false);
      setSubmenu6Visible(false);
      return;
    }
    if (index === 2 || index === 3) {
      setSubmenu2Visible(false);
      setSubmenuVisible(false);
      setSubmenu4Visible(false);
      setSubmenu6Visible(false);
      setUploadTarget(index);
      fileInputRef.current?.click();
    } else {
      onButtonClick(index);
    }

    if (index === 4) {
      setSubmenu4Visible((prev) => !prev); // toggle submenu
      setSubmenu2Visible(false);
      setSubmenuVisible(false);
      setSubmenu6Visible(false);
      return;
    }
    
    if (index === 5) {
      setSubmenu6Visible((prev) => !prev); // toggle submenu para o logo
      setSubmenu4Visible(false);
      setSubmenu2Visible(false);
      setSubmenuVisible(false);
      return;
    }
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const textureURL = reader.result;
      const uploadedMaterial = {
        name: "uploadedMaterial",
        map: textureURL,
      };
      if (uploadTarget === 2) {
        setCurrentMaterialP(uploadedMaterial);
      } else if (uploadTarget === 3) {
        setCurrentMaterialB(uploadedMaterial);
      }
      setUploadTarget(null);
    };
    reader.readAsDataURL(file);
  };
  
  const handleSubmenuButtonClick = (buttonIndex) => {
    if (buttonIndex === 1) {
      setCurrentMaterialT(materials.wood);
      console.log(`1 Submenu button ${buttonIndex} clicked`);
      return;
    }
    if (buttonIndex === 2) {
      setCurrentMaterialT(materials.polystyrene);
      console.log(`2 Submenu button ${buttonIndex} clicked`);
    }
    console.log(`Submenu button ${buttonIndex} clicked`);
  };

  const handleSubmenuButtonClickCor = (btnIdx) => {
    if (btnIdx === 1) setCor("black");
    if (btnIdx === 2) setCor("white");
    if (btnIdx === 3) setCor("blue");
    if (btnIdx === 4) setCor("grey");
  };

  const handleSubmenuButtonClick4Cor = (butnIdx) => {
    if (butnIdx === 1) setCorG("black");
    if (butnIdx === 2) setCorG("white");
    if (butnIdx === 3) setCorG("blue");
    if (butnIdx === 4) setCorG("grey");
  };
  
  const handleSubmenuButtonClick6Cor = (logoIdx) => {
    if (logoIdx === 1) setLogoCor("original");
    if (logoIdx === 2) setLogoCor("silver");
    if (logoIdx === 3) setLogoCor("gold");
    if (logoIdx === 4) setLogoCor("black");
  };

  return (
    <div className="side-menu">
      {/* Glowing Curved Line */}
      {/* Glowing Curved Line */}
      <div className="glowing-curve">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 600" 
          preserveAspectRatio="none"
          className="blue-glow"
        >
          {/* Curva convexa (para fora) - counter-clockwise */}
          <path
            d="M80,20 Q30,300 80,580"
            className="glowing-path"
          />
        </svg>
      </div>
      
      {buttonOffsets.map((marginLeft, index) => (
        <div key={index} style={{ position: "relative" }}>
          {/* Button Label - positioned to the left of button with proper offset */}
          <div className="button-label" style={{ 
            position: "absolute", 
            right: "calc(100% + 15px)", // Position to left of button with 15px spacing
            top: "50%",
            transform: `translateY(-50%) translateX(${marginLeft})`, // Apply same offset as button for alignment
            textAlign: "right",
            whiteSpace: "nowrap",
            zIndex: 15 // Below buttons but above other elements
          }}>
            <div className="label-line1">{buttonImages[index].label[0]}</div>
            <div className="label-line2">{buttonImages[index].label[1]}</div>
          </div>
          
          {index === 0 && (
            <div 
              className={`submenu-container ${submenuVisible ? 'submenu-visible' : ''}`}
              style={{
                position: "absolute",
                left: "120%", // Position it more to the left of the button
                top: "12.5%", // Center it vertically (100% - 75%) / 2
                height: "65%", // 75% of the button height
                width: "210px", // Approximately 3 buttons wide
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end", // Push content to the right side
                background: "linear-gradient(to right,rgb(82, 82, 82),rgb(43, 43, 43))",
                borderRadius: "15px",
                opacity: submenuVisible ? 1 : 0,
                transform: `translateX(${submenuVisible ? '0' : '-30px'})`,
                transition: "all 0.3s ease",
                zIndex: 10
              }}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "flex-end", // Align buttons to the right
                gap: "15px", // Smaller gap between buttons
                width: "85%", // Take less width to push buttons right
                paddingRight: "25px" // Padding on the right side only
              }}>
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick(1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <img 
                    src="/Icons/madeira.png" 
                    alt="Submenu Button 1" 
                    style={{ 
                      width: "95%", 
                      height: "95%", 
                      objectFit: "contain" 
                    }} 
                  />
                </button>
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick(2)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <img 
                    src="/Icons/black.png" 
                    alt="Submenu Button 2" 
                    style={{ 
                      width: "95%", 
                      height: "95%", 
                      objectFit: "contain" 
                    }} 
                  />
                </button>
              </div>
            </div>
          )}
          {index === 1 && (
            <div 
              className={`submenu-container ${submenu2Visible ? 'submenu-visible' : ''}`}
              style={{
                position: "absolute",
                left: "120%",
                top: "12.5%",
                height: "75%",
                width: "235px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                background: "linear-gradient(to right,rgb(82, 82, 82),rgb(43, 43, 43))",
                borderRadius: "15px",
                opacity: submenu2Visible ? 1 : 0,
                transform: `translateX(${submenu2Visible ? '0' : '-30px'})`,
                transition: "all 0.3s ease",
                zIndex: 10
              }}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "flex-end",
                gap: "10px",
                width: "90%",
                paddingRight: "20px"
              }}>
                {/* Botões de cor para Cuba Interior */}
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClickCor(1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#000",
                  }}></div>
                </button>
                
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClickCor(2)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#fff",
                  }}></div>
                </button>
                
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClickCor(3)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#1e3a8a",
                  }}></div>
                </button>
                
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClickCor(4)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#666",
                  }}></div>
                </button>
              </div>
            </div>
          )}

          {index === 4 && (
            <div 
              className={`submenu-container ${submenu4Visible ? 'submenu-visible' : ''}`}
              style={{
                position: "absolute",
                left: "120%",
                top: "12.5%",
                height: "75%",
                width: "235px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                background: "linear-gradient(to right,rgb(82, 82, 82),rgb(43, 43, 43))",
                borderRadius: "15px",
                opacity: submenu4Visible ? 1 : 0,
                transform: `translateX(${submenu4Visible ? '0' : '-30px'})`,
                transition: "all 0.3s ease",
                zIndex: 10
              }}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "flex-end",
                gap: "10px",
                width: "90%",
                paddingRight: "20px"
              }}>
                {/* Botões de cor para Grelha */}
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick4Cor(1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#000",
                  }}></div>
                </button>
                
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick4Cor(2)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#fff",
                  }}></div>
                </button>
                
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick4Cor(3)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#1e3a8a",
                  }}></div>
                </button>
                
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick4Cor(4)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#666",
                  }}></div>
                </button>
              </div>
            </div>
          )}
          
          {/* Novo submenu para o logo (6º botão) */}
          {index === 5 && (
            <div 
              className={`submenu-container ${submenu6Visible ? 'submenu-visible' : ''}`}
              style={{
                position: "absolute",
                left: "120%",
                top: "12.5%",
                height: "75%",
                width: "235px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                background: "linear-gradient(to right,rgb(82, 82, 82),rgb(43, 43, 43))",
                borderRadius: "15px",
                opacity: submenu6Visible ? 1 : 0,
                transform: `translateX(${submenu6Visible ? '0' : '-30px'})`,
                transition: "all 0.3s ease",
                zIndex: 10
              }}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "flex-end",
                gap: "10px",
                width: "90%",
                paddingRight: "20px"
              }}>
                {/* 4 opções de cor para o logo */}
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick6Cor(1)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "linear-gradient(to right, #eee, #999)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "8px",
                    color: "#333",
                    fontWeight: "bold"
                  }}>
                    ORIG
                  </div>
                </button>
                
                {/* Prata */}
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick6Cor(2)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "linear-gradient(to right, #e0e0e0, #b0b0b0, #e0e0e0)",
                  }}></div>
                </button>
                
                {/* Dourado */}
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick6Cor(3)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "linear-gradient(to right, #ffd700, #b8860b, #ffd700)",
                  }}></div>
                </button>
                
                {/* Preto */}
                <button 
                  className="submenu-button"
                  onClick={() => handleSubmenuButtonClick6Cor(4)}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "#adadad",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <div style={{
                    width: "95%", 
                    height: "95%",
                    borderRadius: "50%",
                    background: "#000",
                  }}></div>
                </button>
              </div>
            </div>
          )}

          <button
            className="side-button"
            style={{ 
              transform: `translateX(${marginLeft})`, 
              transition: "all 0.3s ease",
              position: "relative",
              zIndex: 20 // Keep the main button above the submenu
            }}
            onClick={() => handleButtonClick(index)}
          >
            <img 
              src={hoveredIndex === index ? buttonImages[index].hover : buttonImages[index].default} 
              alt={`Button ${index + 1}`} 
              className="side-button-img" 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </button>
        </div>
      ))}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}