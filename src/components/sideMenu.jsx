import React, { useRef, useState } from "react";
import "../index.css";
import "../GlowingCurve.css";

export function SideMenu({ 
  onButtonClick, 
  setCurrentMaterialP, 
  setCurrentMaterialB, 
  setCurrentMaterialT, 
  materials, 
  Cor, 
  setCor, 
  CorG, 
  setCorG, 
  tamposVisible, 
  setTamposVisible, 
  logoCor, 
  setLogoCor,
  // Novo prop para override das laterais
  corLateraisOverride,
  setCorLateraisOverride
}) {
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
    { default: "/Icons/side3.svg", hover: "/Icons/side3-hover.png", label: ["LOTI", "DESIGN EXTERIOR FRONTAL"] },
    { default: "/Icons/side4.svg", hover: "/Icons/side3-hover.png", label: ["LOTI", "DESIGN EXTERIOR POSTERIOR "] },
    { default: "/Icons/side5.svg", hover: "/Icons/side5-hover.png", label: ["LOTI", "GRELHA LATERAL"] },
    { default: "/Icons/side6.png", hover: "/Icons/side6-hover.png", label: ["LOTI", "LOGO"] },
  ];
  
  const handleButtonClick = (index) => {
    if (index === 0) {
      setSubmenuVisible((prev) => !prev);
      setSubmenu2Visible(false);
      setSubmenu4Visible(false);
      setSubmenu6Visible(false);
      return;
    }
    if (index === 1) {
      setSubmenu2Visible((prev) => {
        const newVisible = !prev;
        setTamposVisible(!newVisible);
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
      setSubmenu4Visible((prev) => !prev);
      setSubmenu2Visible(false);
      setSubmenuVisible(false);
      setSubmenu6Visible(false);
      return;
    }
    
    if (index === 5) {
      setSubmenu6Visible((prev) => !prev);
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

  // CORRIGIDO: O primeiro botão restaura o material original, os outros fazem override
  const handleSubmenuButtonClick4Cor = (butnIdx) => {
    if (butnIdx === 1) setCorLateraisOverride(null); // Remove override, volta ao material original
    if (butnIdx === 2) setCorLateraisOverride("white");
    if (butnIdx === 3) setCorLateraisOverride("blue");
    if (butnIdx === 4) setCorLateraisOverride("grey");
  };
  
  const handleSubmenuButtonClick6Cor = (logoIdx) => {
    if (logoIdx === 1) setLogoCor("bronze");
    if (logoIdx === 2) setLogoCor("silver");
    if (logoIdx === 3) setLogoCor("white");
    if (logoIdx === 4) setLogoCor("black");
  };

  // Function to render submenu buttons
  const renderSubmenuButtons = (submenuType, visible, clickHandler) => {
    const buttons = [];
    const buttonConfigs = {
      material: [
        { icon: "/Icons/madeira.png", alt: "Wood" },
        { icon: "/Icons/black.png", alt: "Polystyrene" }
      ],
      color: [
        { color: "#000", alt: "Black" },
        { color: "#fff", alt: "White" },
        { color: "#1e3a8a", alt: "Blue" },
        { color: "#666", alt: "Grey" }
      ],
      logo: [
        { color: "linear-gradient(to right, #913A07, #913A07, #913A07)", alt: "Bronze" },
        { color: "linear-gradient(to right, #e0e0e0, #b0b0b0, #e0e0e0)", alt: "Silver" },
        { color: "linear-gradient(to right, #e0e0e0, #e0e0e0, #e0e0e0)", alt: "White" },
        { color: "#000", alt: "Black" },
      ]
    };

    const config = buttonConfigs[submenuType];
    
    config.forEach((item, index) => {
      buttons.push(
        <button 
          key={index}
          className="submenu-button"
          onClick={() => clickHandler(index + 1)}
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
          {item.icon ? (
            <img 
              src={item.icon}
              alt={item.alt}
              style={{ 
                width: "95%", 
                height: "95%", 
                objectFit: "contain" 
              }} 
            />
          ) : item.text ? (
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
              {item.text}
            </div>
          ) : (
            <div style={{
              width: "95%", 
              height: "95%",
              borderRadius: "50%",
              background: item.color,
            }}></div>
          )}
        </button>
      );
    });

    return buttons;
  };

  // Generic submenu renderer
  const renderSubmenu = (index, visible, submenuType, clickHandler, width = "265px") => {
    if (index === 0 && submenuType === "material") width = "210px";
    
    return (
      <div 
        className={`submenu-container ${visible ? 'submenu-visible' : ''}`}
        style={{
          position: "absolute",
          left: "120%",
          top: "12.5%",
          height: "75%",
          width,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          background: "linear-gradient(to right,rgb(82, 82, 82),rgb(43, 43, 43))",
          borderRadius: "15px",
          opacity: visible ? 1 : 0,
          transform: `translateX(${visible ? '0' : '-30px'})`,
          transition: "all 0.3s ease",
          zIndex: 10
        }}
      >
        <div style={{ 
          display: "flex", 
          justifyContent: "flex-end",
          gap: submenuType === "material" ? "15px" : "10px",
          width: submenuType === "material" ? "85%" : "90%",
          paddingRight: submenuType === "material" ? "25px" : "20px"
        }}>
          {renderSubmenuButtons(submenuType, visible, clickHandler)}
        </div>
      </div>
    );
  };

  return (
    <div className="side-menu">
      {/* Glowing Curved Line */}
      <div className="glowing-curve">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 600" 
          preserveAspectRatio="none"
          className="blue-glow"
        >
          <path
            d="M80,20 Q30,300 80,580"
            className="glowing-path"
          />
        </svg>
      </div>
      
      {buttonOffsets.map((marginLeft, index) => (
        <div key={index} style={{ position: "relative" }}>
          {/* Button Label */}
          <div className="side-button-label-container" style={{ 
            position: "absolute", 
            right: "calc(100% + 15px)",
            top: "50%",
            transform: `translateY(-50%) translateX(${marginLeft})`,
            textAlign: "right",
            whiteSpace: "nowrap",
            zIndex: 15
          }}>
            <div className="label-line1">{buttonImages[index].label[0]}</div>
            <div className="label-line2">{buttonImages[index].label[1]}</div>
          </div>
          
          {/* Submenus */}
          {index === 0 && renderSubmenu(index, submenuVisible, "material", handleSubmenuButtonClick)}
          {index === 1 && renderSubmenu(index, submenu2Visible, "color", handleSubmenuButtonClickCor)}
          {index === 4 && renderSubmenu(index, submenu4Visible, "color", handleSubmenuButtonClick4Cor)}
          {index === 5 && renderSubmenu(index, submenu6Visible, "logo", handleSubmenuButtonClick6Cor)}

          <button
            className="side-button"
            style={{ 
              transform: `translateX(${marginLeft})`, 
              transition: "all 0.3s ease",
              position: "relative",
              zIndex: 20
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