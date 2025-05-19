import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../index.css';

export function BottomBar({ onAccessoryClick }) {
  const scrollRef = useRef(null);

  // Lista de acessórios com seus respectivos labels
  const accessories = [
    { id: 1, label: "Smart Control", icon: "/Icons/encosto.png" },
    { id: 2, label: "Temperature Lock", icon: "/Icons/capa.png" },
    { id: 3, label: "Ambient Lighting", icon: "/Icons/filtro.png" },
    { id: 4, label: "Scent Diffuser", icon: "/Icons/luz.png" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220 * 2 + 40; // button width * 2 + estimated gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bottom-bar">
      <div className="top-bar-content">
        <div className="text-container">
          <p className="caps">ACESSÓRIOS</p>
          <p className="caps">EXTRA</p>
          <p>Acrescente valor à sua LOTI</p>
          <p>adicionando acessórios</p>
        </div>

        <div></div><div></div>
        <button onClick={() => scroll("left")} className="scroll-arrow">
          <ChevronLeft size={50} />
        </button>
    
        <div ref={scrollRef} className="bottomscroll-container">
          {accessories.map((accessory) => (
            <button 
              key={accessory.id} 
              className="image-buttonB" 
              onClick={() => onAccessoryClick(accessory.label)}
            >
              <div className="image-content">
                <img src={accessory.icon} alt={accessory.label} />
                <span className="image-label">
                  <span className="prefix">LOTI </span>
                  <span className="highlight">{accessory.label}</span>
                </span>
              </div>
            </button>
          ))}
        </div>
    
        <button onClick={() => scroll("right")} className="scroll-arrow">
          <ChevronRight size={50} />
        </button>
      </div>
    </div>
  );
}