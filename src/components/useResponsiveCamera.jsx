import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { isMobile } from 'react-device-detect'; // Você precisará instalar: npm install react-device-detect

export function useResponsiveCamera() {
  const { camera, size } = useThree();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    // Detectar dispositivos de toque
    const detectTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        navigator.msMaxTouchPoints > 0
      );
    };
    
    detectTouch();
    window.addEventListener('touchstart', detectTouch, { once: true });
    
    return () => {
      window.removeEventListener('touchstart', detectTouch);
    };
  }, []);
  
  useEffect(() => {
    if (!camera) return;
    
    // Ajuste a posição da câmera com base no tamanho da tela
    const aspectRatio = size.width / size.height;
    
    if (isMobile || isTouchDevice) {
      // Afasta a câmera em dispositivos móveis para melhor visualização
      camera.position.z *= 1.5;
      
      // Ajuste para telas muito pequenas ou em modo paisagem
      if (size.width < 480 || (size.width > size.height && size.height < 480)) {
        camera.position.z *= 1.2;
      }
    }
    
    // Ajuste o FOV com base na orientação
    if (aspectRatio < 1) { // Retrato
      camera.fov = 45;
    } else { // Paisagem
      camera.fov = 35;
    }
    
    camera.updateProjectionMatrix();
  }, [camera, size, isMobile, isTouchDevice]);
  
  return { isMobile, isTouchDevice };
}