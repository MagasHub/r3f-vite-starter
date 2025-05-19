import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import '../index.css';

export function TopBar({ 
  setCurrentMaterial, 
  setCurrentMaterialS, 
  materials, 
  setIsImageActive, 
  setIsImageActiveB, 
  setCurrentMaterialT,
  Cor,
  setCor,
  CorG,
  setCorG
}) {
  const scrollRef = useRef(null);

  const handleMaterialChange = (materialName) => {
    // Resetar uploads de imagens
    setIsImageActive(false);
    setIsImageActiveB(false);

    switch (materialName) {
      case "material1": // COLDBATHFREEZER
        // Tampa: Wood
        setCurrentMaterialT(materials.wood);
        // Cuba Interior: Black
        setCor("black");
        // Design Frontal/Posterior: COLDBATHFREEZER
        setCurrentMaterial(materials.lotimain);
        setCurrentMaterialS(materials.black);
        // Grelha de Respiro: Black
        setCorG("black");
        break;
        
      case "material2": // LUXCORPUS
        // Tampa: Polystyrene
        setCurrentMaterialT(materials.polystyrene);
        // Cuba Interior: Black
        setCor("black");
        // Design Frontal/Posterior: LUXCORPUS
        setCurrentMaterial(materials.luxcorpus);
        setCurrentMaterialS(materials.black);
        // Grelha de Respiro: Black
        setCorG("black");
        break;
        
      case "material3": // ICEREHAB
        // Tampa: Wood
        setCurrentMaterialT(materials.wood);
        // Cuba Interior: White
        setCor("white");
        // Design Frontal/Posterior: ICEREHAB
        setCurrentMaterial(materials.ice);
        setCurrentMaterialS(materials.ice);
        // Grelha de Respiro: White
        setCorG("white");
        break;
        
      case "material4": // SENSEEVO
        // Tampa: Polystyrene
        setCurrentMaterialT(materials.polystyrene);
        // Cuba Interior: Grey
        setCor("grey");
        // Design Frontal/Posterior: SENSEEVO
        setCurrentMaterial(materials.lotimaterial);
        setCurrentMaterialS(materials.lotimaterialback);
        // Grelha de Respiro: Grey
        setCorG("grey");
        break;
        
      default:
        console.warn("Modelo desconhecido:", materialName);
    }
  };

  const materialsList = [
    { id: "material1", label: "LOTI COLDBATHFREEZER", icon: "/Icons/icon1.png" },
    { id: "material2", label: "LOTI LUXCORPUS", icon: "/Icons/icon2.png" },
    { id: "material3", label: "LOTI ICEREHAB", icon: "/Icons/icon3.png" },
    { id: "material4", label: "LOTI SENSEEVO", icon: "/Icons/icon4.png" },
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
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="text-container">
          <p className="caps">ESCOLHA O</p>
          <p className="caps">SEU MODELO</p>
          <p>Selecione no modelo que deseja</p>
          <p>personalizar</p>
        </div>

        <div></div><div></div>
        <button onClick={() => scroll("left")} className="scroll-arrow">
          <ChevronLeft size={50} />
        </button>
    
        <div ref={scrollRef} className="scroll-container">
          {materialsList.map((material, i) => (
            <button key={i} className="image-button" onClick={() => handleMaterialChange(material.id)}>
              <div className="image-content">
                <img src={material.icon} alt={material.label} />
                <span className="image-label">
                  <span className="prefix">{material.label.split(" ")[0]} </span>
                  <span className="highlight">{material.label.split(" ")[1]}</span>
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