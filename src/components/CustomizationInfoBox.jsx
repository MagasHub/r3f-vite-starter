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
  imageInfo, // Adicionado para acessar a imagem frontal
  imageInfoB // Adicionado para acessar a imagem posterior
}) {
  // Função para montar e enviar email com as informações
  const sendOrderEmail = () => {
    try {
      // Email de destino
      const emailTo = "joao.magalhaes@hubduction.com";
      
      // Montar o assunto do email
      const subject = "Pedido de Orçamento - LOTI Personalizada";
      
      // Montar o corpo do email com todos os detalhes da personalização
      let body = "Detalhes da Personalização LOTI:\n\n";
      
      // Design Exterior Frontal
      body += `DESIGN EXTERIOR FRONTAL: ${isImageActive ? "Personal" : getDisplayName(currentMaterialP)}\n`;
      
      // Design Exterior Posterior
      body += `DESIGN EXTERIOR POSTERIOR: ${isImageActiveB ? "Personal" : getDisplayName(currentMaterialB)}\n`;
      
      // Cuba Interior
      body += `CUBA INTERIOR: ${getColorName(Cor)}\n`;
      
      // Tampa
      body += `TAMPA: ${getDisplayName(currentMaterialT)}\n`;
      
      // Grelha
      body += `GRELHA DE RESPIRO: ${getColorName(grelhaColor)}\n`;
      
      // Logo
      body += `LOGO: ${getDisplayName(logoCor)}\n`;
      
      // Acessórios
      if (selectedAccessories && selectedAccessories.length > 0) {
        body += `ACESSÓRIOS EXTRA: ${selectedAccessories.join(", ")}\n`;
      } else {
        body += "ACESSÓRIOS EXTRA: -\n";
      }
      
      // Adicionar nota sobre imagens personalizadas
      if (isImageActive || isImageActiveB) {
        body += "\nNOTA: Este pedido inclui design(s) personalizado(s). Por favor, entrar em contato para envio das imagens.\n";
      }
      
      // Adicionar nota de contato
      body += "\n\nPor favor, entre em contato comigo com o orçamento para esta personalização.";
      
      // Codificar os parâmetros da URL
      const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Abrir o programa de email padrão
      window.location.href = mailtoUrl;
    } catch (error) {
      console.error("Erro ao gerar o email:", error);
      alert("Ocorreu um erro ao gerar o email. Por favor, tente novamente ou entre em contato diretamente por email: joao.magalhaes@hubduction.com");
    }
  };
  const getDisplayName = (material) => {
    if (!material) return "-";
    if (material === "personal") return "PERSONAL";
    
    // Traduções específicas para materiais
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
      if (material.toLowerCase() === "original") return "ORIGINAL";
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

  // Função para obter o nome da cor formatado
  const getColorName = (color) => {
    if (!color) return "-";
    
    const lowerColor = color.toLowerCase();
    if (lowerColor === "black") return "PRETA";
    if (lowerColor === "white") return "BRANCA";
    if (lowerColor === "grey" || lowerColor === "gray") return "CINZA";
    if (lowerColor === "blue") return "AZUL";
    
    return color.toUpperCase();
  };

  return (
    <div style={{ 
      position: "absolute", 
      top: "30%", 
      right: "5%", 
      background: "linear-gradient(145deg, #292929 0%, #121212 100%)",
      color: "white", 
      padding: "24px", 
      borderRadius: "20px", 
      zIndex: 10,
      width: "380px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
      fontFamily: "'Roboto Condensed', sans-serif"
    }}>
      {/* Título */}
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "30px",
        fontWeight: "600",
        fontSize: "28px",
        letterSpacing: "1px"
      }}>
        <span style={{ color: "#6da8db" }}>YOUR</span> LOTI
      </h2>
      
      <div style={{ marginBottom: "30px" }}>
        {/* Design Exterior Frontal */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginBottom: "16px"
        }}>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#aaa" }}>DESIGN EXTERIOR FRONTAL</span>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {isImageActive ? "PERSONAL" : getDisplayName(currentMaterialP)}
          </span>
        </div>
        
        {/* Design Exterior Posterior */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginBottom: "16px"
        }}>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#aaa" }}>DESIGN EXTERIOR POSTERIOR</span>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {isImageActiveB ? "PERSONAL" : getDisplayName(currentMaterialB)}
          </span>
        </div>
        
        {/* Cuba Interior */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginBottom: "16px"
        }}>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#aaa" }}>CUBA INTERIOR</span>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {getColorName(Cor)}
          </span>
        </div>
        
        {/* Tampa */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginBottom: "16px"
        }}>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#aaa" }}>TAMPA</span>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {getDisplayName(currentMaterialT)}
          </span>
        </div>
        
        {/* Grelha de Respiro */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginBottom: "16px"
        }}>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#aaa" }}>GRELHA DE RESPIRO</span>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {getColorName(grelhaColor)}
          </span>
        </div>
        
        {/* Logo */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginBottom: "16px"
        }}>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#aaa" }}>LOGO</span>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {getDisplayName(logoCor || "original")}
          </span>
        </div>
        
        {/* Acessórios Extra */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginBottom: "16px"
        }}>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#aaa" }}>ACESSÓRIOS EXTRA</span>
          <span style={{ fontWeight: "600", fontSize: "16px" }}>
            {selectedAccessories && selectedAccessories.length > 0 
              ? selectedAccessories.join(", ") 
              : "-"}
          </span>
        </div>
      </div>
      
      {/* Botão de orçamento */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button style={{
          background: "linear-gradient(to right, #444, #333)",
          border: "none",
          borderRadius: "30px",
          padding: "12px 30px",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        }}
        onClick={() => {
          // Envia o email com todas as informações de personalização
          sendOrderEmail();
        }}
        >
          PEDIR ORÇAMENTO »
        </button>
      </div>
    </div>
  );
}