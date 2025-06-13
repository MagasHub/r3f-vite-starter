import { Decal, Environment, OrbitControls, useTexture } from "@react-three/drei";
import { TensaiH } from "./TensaiH";
import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function Experience({ 
  currentMaterial,
  setCurrentMaterialP, 
  currentMaterialP, 
  Cor, 
  setCor, 
  CorG, 
  setCorG, 
  setCurrentMaterialT, 
  currentMaterialT,
  setCurrentMaterialB, 
  currentMaterialB, 
  currentMaterialS, 
  isImageActive, 
  setIsImageActive, 
  isImageActiveB, 
  setIsImageActiveB, 
  imageData, 
  tamposVisible, 
  setTamposVisible,
  selectedAccessories,
  logoCor,
  corLaterais,
  corLateraisOverride // Override manual das laterais

}) {
  const modelRef = useRef();
  const time = useRef(0);

  useEffect(() => {
    console.log("Inside Experience ", currentMaterialP);
  }, [currentMaterialP]);

  const { camera } = useThree();

  // Adiciona o efeito de flutuação ao objeto 3D
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Incrementa o tempo
      time.current += delta;
      
      // Cria movimentos sutis baseados em funções de seno
      const hoverAmount = Math.sin(time.current * 0.9) * 0.02;
      const rotateAmount = Math.sin(time.current * 0.5) * 0.01;
      
      // Aplica movimentos de flutuação
      modelRef.current.position.y = hoverAmount;
      modelRef.current.rotation.y = rotateAmount;
      
      // Pequena inclinação adicional
      modelRef.current.rotation.x = Math.sin(time.current * 0.4) * 0.01;
    }
  });

  return (
    <>
      <OrbitControls />
      <group ref={modelRef}>
        <TensaiH
          currentMaterial={currentMaterial}
          Cor={Cor}
          setCor={setCor}
          CorG={CorG}
          setCorG={setCorG}
          currentMaterialP={currentMaterialP}
          setCurrentMaterialP={setCurrentMaterialP}
          currentMaterialB={currentMaterialB}
          setCurrentMaterialB={setCurrentMaterialB}
          currentMaterialT={currentMaterialT}
          setCurrentMaterialT={setCurrentMaterialT}
          currentMaterialS={currentMaterialS}
          isImageActive={isImageActive}
          setIsImageActive={setIsImageActive}
          isImageActiveB={isImageActiveB}
          tamposVisible={tamposVisible}
          setTamposVisible={setTamposVisible}
          setIsImageActiveB={setIsImageActiveB}
          imageData={imageData}
          selectedAccessories={selectedAccessories}
          logoCor={logoCor}
          corLaterais={corLaterais}
          corLateraisOverride={corLateraisOverride} // Override manual das laterais

        />
      </group>
      <Environment preset="warehouse" background={false} backgroundIntensity={0} />
    </>
  );
};