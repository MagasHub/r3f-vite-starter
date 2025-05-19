import React, { useRef, useState, useEffect } from 'react';
import { extend, useLoader } from '@react-three/fiber'
import { useGLTF, useTexture, Decal, Html } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';


export function TensaiH({ 
  currentMaterial, 
  setCurrentMaterialP, 
  setCurrentMaterialB,
  currentMaterialS, 
  setCurrentMaterialT,
  currentMaterialT, 
  isImageActive, 
  setIsImageActive, 
  isImageActiveB, 
  setIsImageActiveB, 
  currentMaterialP, 
  Cor, 
  setCor, 
  CorG, 
  setCorG, 
  currentMaterialB, 
  tamposVisible, 
  setTamposVisible, 
  imageData, // Renomeado de imageInfo para imageData para evitar conflito
  selectedAccessories,
  logoCor // Novo prop para a cor do logo
}) {

  const [imageInfo, setImageInfo] = useState({
    url: "/textures/loti.jpg",
   // isTransparent: false
  });
  
  const [imageInfoB, setImageInfoB] = useState({
    url: "/textures/loti.jpg",
  });

  const { nodes, materials } = useGLTF('/models/lotiFinal.glb');

  const getLogoMaterial = () => {
    if (!logoCor || logoCor === "original") {
      return materials.LOTIlogomain; // Material original do logo
    }
    
    switch(logoCor) {
      case "silver":
        return new THREE.MeshStandardMaterial({ 
          color: 0xC0C0C0, 
          metalness: 0.8, 
          roughness: 0.2 
        });
      case "gold":
        return new THREE.MeshStandardMaterial({ 
          color: 0xFFD700, 
          metalness: 0.8, 
          roughness: 0.2 
        });
      case "black":
        return new THREE.MeshStandardMaterial({ 
          color: 0x000000, 
          metalness: 0.2, 
          roughness: 0.7 
        });
      default:
        return materials.LOTIlogomain;
    }
  };
  
  useEffect(() => {
    console.log("Cor", Cor);// reset to default texture
  }, [Cor]);

  useEffect(() => {
    console.log("here", currentMaterialP);
    setCurrentMaterialP(null);
    setIsImageActive(false);
    setImageInfo({ url: "/textures/loti.jpg" }); // reset to default texture
  }, [currentMaterial]);

  useEffect(() => {
    if (currentMaterialB?.map) {
      handleImageUploadB(currentMaterialB);
    }
  }, [currentMaterialB]);

  useEffect(() => {
    if (currentMaterialP?.map) {
      handleImageUpload(currentMaterialP);
    }
  }, [currentMaterialP]);

  const handleImageUpload = (material) => {
    if (material?.map) {
      // Convert base64 to blob
      const base64Response = fetch(material.map);
      base64Response.then(res => res.blob()).then(blob => {
        const objectUrl = URL.createObjectURL(blob); // ✅ new unique URL
  
        const isPng = material.map.startsWith('data:image/png');
  
        console.log("Created object URL:", objectUrl);
  
        setImageInfo({
          url: objectUrl,
          isTransparent: isPng,
        });
  
        setIsImageActive(true);
      });
    } else {
      console.warn("Invalid material object or missing map field:", material);
    }
  };
  
  const handleImageUploadB = (material) => {
    if (material?.map) {
      fetch(material.map)
        .then(res => res.blob())
        .then(blob => {
          const objectUrl = URL.createObjectURL(blob);
          const isPng = material.map.startsWith('data:image/png');
  
          setImageInfoB({
            url: objectUrl,
            isTransparent: isPng,
          });
          setIsImageActiveB(true);
        });
    }
  };
  
  const textureB = useTexture(imageInfoB.url || "/textures/loti.jpg");

  useEffect(() => {
    if (textureB && textureB.image) {
      textureB.flipY = false;
      textureB.center.set(0.5, 0.5);
      textureB.rotation = Math.PI * 2;
      textureB.needsUpdate = true;
    }
  }, [textureB]);

  const texture = useTexture(imageInfo.url || "/textures/loti.jpg");
  texture.center.set(0.5, 0.5);
  texture.rotation = 0;
  console.log("Texture loaded", texture.image);

  useEffect(() => {
    if (texture && texture.image) {
      console.log("Texture loaded, applying settings");
      texture.flipY = false; // 👈 THIS fixes the upside-down problem
      texture.center.set(0.5, 0.5);
      texture.rotation = Math.PI * 2;
  
  
      texture.needsUpdate = true;
    }else {console.log("Waiting for texture image...");}
  }, [texture]);

  
  return (
    <group dispose={null}>
      <group position={[0.003, 0.189, 0.048]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.001}>
        <group position={[282.344, 844.429, 724.837]} rotation={[0, 0, Math.PI / 2]}>
          <group position={[-16.02, 599, -72]}>
            <mesh geometry={nodes.roda6_1.geometry} material={materials.GRAY75} />
            <mesh geometry={nodes.roda6_2.geometry} material={materials.Wheel_Rubber} />
            <mesh geometry={nodes.roda6_3.geometry} material={materials.Metal} />
            <mesh geometry={nodes.roda6_4.geometry} material={materials.cement} />
          </group>
          <group position={[0, 0, -72]}>
            <mesh geometry={nodes.roda6_1.geometry} material={materials.GRAY75} />
            <mesh geometry={nodes.roda6_2.geometry} material={materials.Wheel_Rubber} />
            <mesh geometry={nodes.roda6_3.geometry} material={materials.Metal} />
            <mesh geometry={nodes.roda6_4.geometry} material={materials.cement} />
          </group>
          <group position={[-1129.429, 599, -72]}>
            <mesh geometry={nodes.roda6_1.geometry} material={materials.GRAY75} />
            <mesh geometry={nodes.roda6_2.geometry} material={materials.Wheel_Rubber} />
            <mesh geometry={nodes.roda6_3.geometry} material={materials.Metal} />
            <mesh geometry={nodes.roda6_4.geometry} material={materials.cement} />
          </group>
          <group position={[-1689.929, 596.5, -72]} rotation={[0, 0, Math.PI / 2]}>
            <mesh geometry={nodes.roda6_1.geometry} material={materials.GRAY75} />
            <mesh geometry={nodes.roda6_2.geometry} material={materials.Wheel_Rubber} />
            <mesh geometry={nodes.roda6_3.geometry} material={materials.Metal} />
            <mesh geometry={nodes.roda6_4.geometry} material={materials.cement} />
          </group>
          <group position={[-1134.429, 3, -72]} rotation={[0, 0, -Math.PI]}>
            <mesh geometry={nodes.roda6_1.geometry} material={materials.GRAY75} />
            <mesh geometry={nodes.roda6_2.geometry} material={materials.Wheel_Rubber} />
            <mesh geometry={nodes.roda6_3.geometry} material={materials.Metal} />
            <mesh geometry={nodes.roda6_4.geometry} material={materials.cement} />
          </group>
          <group position={[-1692.521, 2.5, -72.221]}>
            <mesh geometry={nodes.roda6_1.geometry} material={materials.GRAY75} />
            <mesh geometry={nodes.roda6_2.geometry} material={materials.Wheel_Rubber} />
            <mesh geometry={nodes.roda6_3.geometry} material={materials.Metal} />
            <mesh geometry={nodes.roda6_4.geometry} material={materials.cement} />
          </group>
        </group>
        <mesh geometry={nodes.logoDireita.geometry} material={getLogoMaterial()} position={[72.154, -900.161, 41.691]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1000} />
        <mesh geometry={nodes.logoEsquerda.geometry} material={getLogoMaterial()} position={[-98.518, 901.601, 41.692]} rotation={[-Math.PI / 2, 0, 0]} scale={1000} />
        <mesh geometry={nodes.logoFrente.geometry} material={getLogoMaterial()} position={[339.749, -655.821, -69.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={1000} />
        <group position={[-18.656, 155.938, -196.292]} rotation={[0, 0, Math.PI / 2]}>
          <group position={[-155.938, 0, 38.263]} rotation={[0, Math.PI / 2, 0]}>
            <group position={[0, -328, 0]}>
              <mesh geometry={nodes.bordaToda_1.geometry}>              
    <meshStandardMaterial
      map={texture}
      transparent={imageInfo.isTransparent}
      alphaTest={imageInfo.isTransparent ? 0.1 : 0}
      side={THREE.DoubleSide}
    />
  : (
    <primitive object={(currentMaterialT || materials.wood).clone()} attach="material" />
    )  
                </mesh>
              <mesh geometry={nodes.bordaToda_2.geometry} material={materials.polystyrene} />
            </group>
          </group>
          <mesh geometry={nodes.borda.geometry} material={materials['Metal.2']} position={[-5.338, 0, -3.386]} visible={tamposVisible}/>
          <group position={[-717.438, 0, -1.386]} rotation={[0, 0, Math.PI / 2]}>
            <mesh geometry={nodes.tampaDireita_1.geometry} visible={tamposVisible}>              
    <meshStandardMaterial
      map={texture}
      transparent={imageInfo.isTransparent}
      alphaTest={imageInfo.isTransparent ? 0.1 : 0}
      side={THREE.DoubleSide}
    />
  : (
    <primitive object={(currentMaterialT || materials.wood).clone()} attach="material" />
    )  
                </mesh>
            <mesh geometry={nodes.tampaDireita_2.geometry} material={materials.polystyrene}  />
            <group position={[0, -17.5, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <mesh geometry={nodes.puxadorDireita_1.geometry} material={materials['Material.001']} visible={tamposVisible}/>
              <mesh geometry={nodes.puxadorDireita_2.geometry} material={materials['Metal.2']} visible={tamposVisible}/>
            </group>
          </group>
          <group position={[706.762, 0, -1.386]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh geometry={nodes.tampaEsquerda_1.geometry} visible={tamposVisible}>              
    <meshStandardMaterial
      map={texture}
      transparent={imageInfo.isTransparent}
      alphaTest={imageInfo.isTransparent ? 0.1 : 0}
      side={THREE.DoubleSide}
    />
  : (
    <primitive object={(currentMaterialT || materials.wood).clone()} attach="material" />
    )  
                </mesh>
            <mesh geometry={nodes.tampaEsquerda_2.geometry} material={materials.polystyrene} visible={tamposVisible}/>
            <group position={[0, -17.5, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <mesh geometry={nodes.puxadorEsquerdo_1.geometry} material={materials['Material.001']} visible={tamposVisible} />
              <mesh geometry={nodes.puxadorEsquerdo_2.geometry} material={materials['Metal.2']} visible={tamposVisible} />
            </group>
          </group>
        </group>
        <group position={[-18.656, 899.5, 252.087]}>
        <mesh geometry={nodes.faceEsquerda_1.geometry} material={currentMaterialS || materials.black} />
          <mesh geometry={nodes.faceEsquerda_2.geometry} material={materials.ice} />
          <mesh geometry={nodes.faceEsquerda_3.geometry} material={materials.lotimaterialback} />
        </group>
        <group position={[336.844, 0, 252.087]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.faceFrente_1.geometry} material={materials.Vinyl} />
          <mesh geometry={nodes.faceFrente_2.geometry} material={materials.red} />
          <mesh geometry={nodes.faceFrente_3.geometry} material={materials.medic} />
          <group position={[100, 2, 280.25]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh geometry={nodes.metalFrontal_1.geometry} material={materials.GOLD} />
            <mesh geometry={nodes.metalFrontal_2.geometry} material={materials['Metal.2']} />
            <mesh geometry={nodes.metalFrontal_3.geometry} material={materials.WHEAT3} />
            <mesh geometry={nodes.metalFrontal_4.geometry} material={materials.GRAY50} />
          </group>
          <group position={[713.5, 2.7, -209.3]} rotation={[0, 0, Math.PI / 2]}>
            <mesh geometry={nodes.painelButoes_1.geometry} material={materials.GRAY75} />
            <mesh geometry={nodes.painelButoes_2.geometry} material={materials.GRAY17} />
            <mesh geometry={nodes.painelButoes_3.geometry} material={materials['Glass.Ss']} />
          </group>
        </group>
        <mesh geometry={nodes.faceTras.geometry} material={materials.Vinyl} position={[-374.156, 0.41, 252.087]} rotation={[0, 0, Math.PI / 2]} />
        <group position={[-18.656, -899.5, 306.337]} rotation={[0, 0, Math.PI]}>
        <mesh geometry={nodes.grelhaDireita_1.geometry} material={currentMaterialS || materials.black} />
          <mesh geometry={nodes.grelhaDireita_2.geometry} material={materials.ice} />
          <mesh geometry={nodes.grelhaDireita_3.geometry} material={materials.lotimaterialback} />
        </group>
        <group position={[-377.156, -761, 473.837]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.grelhaTras_1.geometry} material={null}>
  <meshStandardMaterial color={CorG} metalness={0.8} roughness={0.2} />
</mesh>
          <mesh geometry={nodes.grelhaTras_2.geometry} material={materials.Metal} />
          <mesh geometry={nodes.grelhaTras_3.geometry} material={materials.GOLD} />
        </group>
        <mesh geometry={nodes.painelBaixo.geometry} material={materials.WHITE} position={[-18.656, 150.5, 650.837]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      </group>
      <group position={[-0.147, 0.297, 0.03]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.001}>
      <mesh geometry={nodes.banheira.geometry} material={null}>
  <meshStandardMaterial color={Cor} metalness={0.5} roughness={0.4} />
</mesh>
        <mesh geometry={nodes.banheira_1.geometry} material={materials.GRAY67} />
        <group position={[0, -529.327, 762.651]} rotation={[-1.588, -Math.PI / 2, 0]}>
          <mesh geometry={nodes.tubos.geometry} material={materials.GRAY75} />
          <mesh geometry={nodes.tubos_1.geometry} material={materials.GOLD} />
          <mesh geometry={nodes.tubos_2.geometry} material={materials.SNOW2} />
          <mesh geometry={nodes.tubos_3.geometry} material={materials.GRAY15} />
          <mesh geometry={nodes.tubos_4.geometry} material={materials.GRAY74} />
          <mesh geometry={nodes.tubos_5.geometry} material={materials.WHITESMOKE} />
          <mesh geometry={nodes.tubos_6.geometry} material={materials.GRAY30} />
        </group>
        <group position={[0, -888.25, 745.67]}>
          <mesh geometry={nodes.interno.geometry} material={materials.Vinyl} />
          <mesh geometry={nodes.interno_1.geometry} material={materials.Vinyl} />
          <mesh geometry={nodes.interno_2.geometry} material={materials.GRAY50} />
          <mesh geometry={nodes.painelInterno1.geometry} material={materials.Vinyl} position={[-298, -11.25, 14]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.painelInterno2.geometry} material={materials.Vinyl} position={[298, -11.25, 13.778]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.painelInterno3.geometry} material={materials.Vinyl} position={[-298, 138.75, -336]} rotation={[-Math.PI / 2, 0, Math.PI]} />
          <mesh geometry={nodes.painelInterno4.geometry} material={materials.Vinyl} position={[298, 138.75, -336]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
      </group>
      </group>
      <group position={[0, -0.005, -0.000]}>
<mesh geometry={nodes.Cube.geometry}>
{isImageActive ? (
    <meshStandardMaterial
      map={texture}
      transparent={imageInfo.isTransparent}
      alphaTest={imageInfo.isTransparent ? 0.1 : 0}
      side={THREE.DoubleSide}
    />
  ) : (
    <primitive object={(currentMaterial || materials.lotimain).clone()} attach="material" />
  )}
</mesh>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.luxcorpus} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.ice} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.lotimaterial} />
      </group>

      <group position={[0.004, -0.005, 0.06]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Cube002.geometry}>
{isImageActiveB ? (
    <meshStandardMaterial
      map={textureB}
      transparent={imageInfoB.isTransparent}
      alphaTest={imageInfoB.isTransparent ? 0.1 : 0}
      side={THREE.DoubleSide}
    />
  ) : (
    <primitive object={(currentMaterial || materials.lotimain).clone()} attach="material" />
  )}
</mesh>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.luxcorpus} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.ice} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials.lotimaterial} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/lotiFinal.glb')