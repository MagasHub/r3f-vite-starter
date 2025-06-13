import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../index.css';

export function BottomBar({ onAccessoryClick }) {
  const scrollRef = useRef(null);
  // Estado para controlar quais acessórios estão selecionados (array para múltipla seleção)
  const [selectedAccessories, setSelectedAccessories] = useState([]);

  // Lista de acessórios com seus respectivos labels
  const accessories = [
    { id: 1, label: "Smart Control", icon: "/Icons/encosto.png" },
    { id: 2, label: "Temperature Lock", icon: "/Icons/capa.png" },
    { id: 3, label: "Ambient Lighting", icon: "/Icons/filtro.png" },
    { id: 4, label: "Scent Diffuser", icon: "/Icons/luz.png" },
  ];

  const handleAccessoryClick = (accessory) => {
    // Toggle seleção do acessório
    setSelectedAccessories(prev => {
      const isSelected = prev.includes(accessory.id);
      if (isSelected) {
        // Remove da seleção
        return prev.filter(id => id !== accessory.id);
      } else {
        // Adiciona à seleção
        return [...prev, accessory.id];
      }
    });

    // Chama a função original
    if (onAccessoryClick) {
      onAccessoryClick(accessory.label);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Dynamic scroll amount based on screen size
      const buttonWidth = window.innerWidth <= 480 ? 100 : window.innerWidth <= 768 ? 140 : 220;
      const scrollAmount = buttonWidth * 2 + 40;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <div className="bottom-text-container">
          <p className="caps">ACESSÓRIOS</p>
          <p className="caps">EXTRA</p>
          <p>Acrescente valor à sua LOTI</p>
          <p>adicionando acessórios</p>
        </div>

        {/* Spacer divs - hidden on mobile */}
        <div className="bottom-spacer"></div>
        <div className="bottom-spacer"></div>
        
        <button onClick={() => scroll("left")} className="bottom-scroll-arrow">
          <ChevronLeft size={50} />
        </button>
    
        <div ref={scrollRef} className="bottom-scroll-container">
          {accessories.map((accessory) => (
            <button 
              key={accessory.id} 
              className={`bottom-image-button ${selectedAccessories.includes(accessory.id) ? 'selected' : ''}`}
              onClick={() => handleAccessoryClick(accessory)}
            >
              <div className="bottom-image-content">
                <img src={accessory.icon} alt={accessory.label} />
                <span className="bottom-image-label">
                  <span className="prefix">LOTI </span>
                  <span className="highlight">{accessory.label}</span>
                </span>
              </div>
            </button>
          ))}
        </div>
    
        <button onClick={() => scroll("right")} className="bottom-scroll-arrow">
          <ChevronRight size={50} />
        </button>
      </div>
    </div>
  );
}