import React, { useRef, useState } from "react";
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
  setCorG,
  // Novo prop para resetar o override das laterais
  setCorLateraisOverride,
  // Novo prop para controlar a cor do logo
  setLogoCor
}) {
  const scrollRef = useRef(null);
  // Estado para controlar qual modelo está selecionado
  const [selectedModel, setSelectedModel] = useState(null);

  const handleMaterialChange = (materialName) => {
    // Atualizar o estado de seleção
    setSelectedModel(materialName);
    
    // Resetar uploads de imagens
    setIsImageActive(false);
    setIsImageActiveB(false);
    
    // Resetar override manual das laterais (para que use o material do TopBar)
    if (setCorLateraisOverride) {
      setCorLateraisOverride(null);
    }

    switch (materialName) {
      case "material1": // COLDBATHFREEZER
        // Tampa: Wood
        setCurrentMaterialT(materials.wood);
        // Cuba Interior: Black
        setCor("black");
        // Design Frontal/Posterior: COLDBATHFREEZER
        setCurrentMaterial(materials.lotimain);
        // Laterais: Black (material)
        setCurrentMaterialS(materials.black);
        // Grelha de Respiro: Black
        setCorG("black");
        // Logo: Bronze
        if (setLogoCor) setLogoCor("bronze");
        break;
        
      case "material2": // LUXCORPUS
        // Tampa: Polystyrene
        setCurrentMaterialT(materials.wood);
        // Cuba Interior: Black
        setCor("black");
        // Design Frontal/Posterior: LUXCORPUS
        setCurrentMaterial(materials.luxcorpus);
        // Laterais: Black (material)
        setCurrentMaterialS(materials.black);
        // Grelha de Respiro: Black
        setCorG("black");
        // Logo: Black
        if (setLogoCor) setLogoCor("black");
        break;
        
      case "material3": // ICEREHAB
        // Tampa: Wood
        setCurrentMaterialT(materials.wood);
        // Cuba Interior: White
        setCor("white");
        // Design Frontal/Posterior: ICEREHAB
        setCurrentMaterial(materials.ice);
        // Laterais: Ice (material)
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
        // Laterais: lotimaterialback (material)
        setCurrentMaterialS(materials.lotimaterialback);
        // Grelha de Respiro: Grey
        setCorG("grey");
        break;
        
      default:
        console.warn("Modelo desconhecido:", materialName);
    }
  };

  const materialsList = [
    { id: "material1", label: "LOTI COLDBATHFREEZER", icon: "/Icons/loti1.png" },
    { id: "material2", label: "LOTI LUXCORPUS", icon: "/Icons/loti2.png" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Dynamic scroll amount based on screen size
      const buttonWidth = window.innerWidth <= 480 ? 120 : window.innerWidth <= 768 ? 160 : 220;
      const scrollAmount = buttonWidth * 2 + 40;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-text-container">
          <p className="caps">ESCOLHA O</p>
          <p className="caps">SEU MODELO</p>
          <p>Selecione no modelo que deseja</p>
          <p>personalizar</p>
        </div>

        {/* Spacer divs - hidden on mobile */}
        <div className="top-spacer"></div>
        <div className="top-spacer"></div>
        
        <button onClick={() => scroll("left")} className="top-scroll-arrow">
          <ChevronLeft size={50} />
        </button>
    
        <div ref={scrollRef} className="top-scroll-container">
          {materialsList.map((material, i) => (
            <button 
              key={i} 
              className={`top-image-button ${selectedModel === material.id ? 'selected' : ''}`}
              onClick={() => handleMaterialChange(material.id)}
            >
              <div className="top-image-content">
                <img src={material.icon} alt={material.label} />
                <span className="top-image-label">
                  <span className="prefix">{material.label.split(" ")[0]} </span>
                  <span className="highlight">{material.label.split(" ")[1]}</span>
                </span>
              </div>
            </button>
          ))}
        </div>
    
        <button onClick={() => scroll("right")} className="top-scroll-arrow">
          <ChevronRight size={50} />
        </button>
      </div>
    </div>
  );
}