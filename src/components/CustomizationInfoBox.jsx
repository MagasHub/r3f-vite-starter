import React, { useEffect, useState } from 'react';
import '../index.css';

export function CustomizationInfoBox({ 
  currentMaterialP, 
  currentMaterialB, 
  currentMaterialT, 
  isImageActive,
  isImageActiveB,
  grelhaColor, 
  selectedAccessories,
  Cor,
  logoCor,
  imageInfo,
  imageInfoB
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to send order email
  const sendOrderEmail = () => {
    try {
      const emailTo = "joao.magalhaes@hubduction.com";
      const subject = "Pedido de Orçamento - LOTI Personalizada";
      
      let body = "Detalhes da Personalização LOTI:\n\n";
      
      body += `DESIGN EXTERIOR FRONTAL: ${isImageActive ? "Personal" : getDisplayName(currentMaterialP)}\n`;
      body += `DESIGN EXTERIOR POSTERIOR: ${isImageActiveB ? "Personal" : getDisplayName(currentMaterialB)}\n`;
      body += `CUBA INTERIOR: ${getColorName(Cor)}\n`;
      body += `TAMPA: ${getDisplayName(currentMaterialT)}\n`;
      body += `GRELHA DE RESPIRO: ${getColorName(grelhaColor)}\n`;
      body += `LOGO: ${getDisplayName(logoCor)}\n`;
      
      if (selectedAccessories && selectedAccessories.length > 0) {
        body += `ACESSÓRIOS EXTRA: ${selectedAccessories.join(", ")}\n`;
      } else {
        body += "ACESSÓRIOS EXTRA: -\n";
      }
      
      if (isImageActive || isImageActiveB) {
        body += "\nNOTA: Este pedido inclui design(s) personalizado(s). Por favor, entrar em contato para envio das imagens.\n";
      }
      
      body += "\n\nPor favor, entre em contato comigo com o orçamento para esta personalização.";
      
      const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    } catch (error) {
      console.error("Erro ao gerar o email:", error);
      alert("Ocorreu um erro ao gerar o email. Por favor, tente novamente ou entre em contato diretamente por email: joao.magalhaes@hubduction.com");
    }
  };

  const getDisplayName = (material) => {
    if (!material) return "-";
    if (material === "personal") return "PERSONAL";
    
    if (typeof material === 'string') {
      if (material.toLowerCase() === "wood") return "MADEIRA";
      if (material.toLowerCase() === "black") return "PRETA";
      if (material.toLowerCase() === "white") return "BRANCA";
      if (material.toLowerCase() === "grey" || material.toLowerCase() === "gray") return "CINZA";
      if (material.toLowerCase() === "coldbathfreezer") return "COLDBATHFREEZER";
      if (material.toLowerCase() === "luxcorpus") return "LUXCORPUS";
      if (material.toLowerCase() === "icerehab") return "ICEREHAB";
      if (material.toLowerCase() === "senseevo") return "SENSEEVO";
      if (material.toLowerCase() === "polystyrene") return "POLYSTYRENE";
      if (material.toLowerCase() === "bronze") return "BRONZE";
      if (material.toLowerCase() === "silver") return "PRATA";
      if (material.toLowerCase() === "gold") return "DOURADO";
      
      return material.toUpperCase();
    }
    
    if (material?.name) {
      const name = material.name.toLowerCase();
      if (name === "wood") return "MADEIRA";
      if (name === "polystyrene") return "POLYSTYRENE";
      return material.name.toUpperCase();
    }
    
    return "-";
  };

  const getColorName = (color) => {
    if (!color) return "-";
    
    const lowerColor = color.toLowerCase();
    if (lowerColor === "black") return "PRETA";
    if (lowerColor === "white") return "BRANCA";
    if (lowerColor === "grey" || lowerColor === "gray") return "CINZA";
    if (lowerColor === "blue") return "AZUL";
    
    return color.toUpperCase();
  };

  const InfoRow = ({ label, value }) => (
    <div className="info-row">
      <span className="info-label">{label}</span>
      <span className="info-value">{value}</span>
    </div>
  );

  return (
    <div className="customization-info-box">
      {/* Title */}
      <h2 className="info-title">
        <span className="info-title-your">YOUR</span> LOTI
      </h2>
      
      <div className="info-content">
        <InfoRow 
          label="DESIGN EXTERIOR FRONTAL" 
          value={isImageActive ? "PERSONAL" : getDisplayName(currentMaterialP)} 
        />
        <InfoRow 
          label="DESIGN EXTERIOR POSTERIOR" 
          value={isImageActiveB ? "PERSONAL" : getDisplayName(currentMaterialB)} 
        />
        <InfoRow 
          label="CUBA INTERIOR" 
          value={getColorName(Cor)} 
        />
        <InfoRow 
          label="TAMPA" 
          value={getDisplayName(currentMaterialT)} 
        />
        <InfoRow 
          label="GRELHA DE RESPIRO" 
          value={getColorName(grelhaColor)} 
        />
        <InfoRow 
          label="LOGO" 
          value={getDisplayName(logoCor || "bronze")} 
        />
        <InfoRow 
          label="ACESSÓRIOS EXTRA" 
          value={selectedAccessories && selectedAccessories.length > 0 
            ? selectedAccessories.join(", ") 
            : "-"} 
        />
      </div>
      
      {/* Order button */}
      <div className="order-button-container">
        <button 
          className="order-button"
          onClick={sendOrderEmail}
        >
          PEDIR ORÇAMENTO »
        </button>
      </div>
    </div>
  );
}