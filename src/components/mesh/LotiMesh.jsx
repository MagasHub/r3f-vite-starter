import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import { LotiCima } from './lotiCima';
import { LotiFront } from './lotiFront';
import { LotiOutrasFaces } from './lotiOutrasFaces';
import { PopupModal } from '../ui/modal';
import InfoButton from '../ui/infoButton';

export function LotiMesh({ texture, ...props }) {
  const [textureMap, setTextureMap] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const [popupContent, setPopupContent] = useState({ title: '', description: '' });
  const [popupPosition, setPopupPosition] = useState([0, 0, 0]); 

  useEffect(() => {
    if (texture) {
      const loader = new TextureLoader();
      loader.load(texture, (loadedTexture) => {
        console.log("loaded texture", loadedTexture);
        setTextureMap(loadedTexture);
      });
    } else {
      setTextureMap(null);
    }
  }, [texture]);

  const togglePopup = (popupNumber, title, description, position) => {
    if (isPopupOpen === popupNumber) {
      setIsPopupOpen(null);  // Close the popup if it's already open
    } else {
      setIsPopupOpen(popupNumber);
      setPopupContent({ title, description }); 
      // Ajusto a posicao relativo ao icon
      const adjustedPosition = [position[0] + 0.7, position[1] + 0, position[2]]; 
      setPopupPosition(adjustedPosition);
    }
  };

  return (

    <group {...props} dispose={null} position={[0, -0.5, 0]}>
      <LotiCima />
      <LotiFront textureMap={textureMap} />
      <LotiOutrasFaces />

      {/* Info Icon 1 */}
      <InfoButton
        position={[-0.5, 0.6, 0.2]}
        isPopupOpen={isPopupOpen}
        togglePopup={() => togglePopup(1, "Title 1", "Description for Title 1", [-0.5, 0.6, 0.2])}
        iconNumber={1}
        title="Title 1"
        description="Description for Title 1"
      />

      {/* Info Icon 2 */}
      <InfoButton
        position={[0.2, 0.6, 0.2]}
        isPopupOpen={isPopupOpen}
        togglePopup={() => togglePopup(2, "Title 2", "Description for Title 2", [0.2, 0.6, 0.2])}
        iconNumber={2}
        title="Title 2"
        description="Description for Title 2"
      />

      {/* Info Icon 3 */}
      <InfoButton
        position={[0.5, 0.6, 0.2]}
        isPopupOpen={isPopupOpen}
        togglePopup={() => togglePopup(3, "Title 3", "Description for Title 3", [0.5, 0.6, 0.2])}
        iconNumber={3}
        title="Title 3"
        description="Description for Title 3"
      />


      {/* Popup Modal */}
      {isPopupOpen && (
        <PopupModal
          title={popupContent.title}
          description={popupContent.description}
          position={popupPosition}
        />
      )}

    </group>

  )
}

useGLTF.preload('/models/loti.glb')