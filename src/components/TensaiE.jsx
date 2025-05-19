import React, { useRef, useState } from 'react';
import { extend } from '@react-three/fiber'
import { useGLTF, useTexture, Decal, Html } from '@react-three/drei';

export function TensaiE(props) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const { nodes, materials } = useGLTF('/models/loti3d.glb');
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const texture = uploadedImage ? useTexture(uploadedImage) : useTexture("/textures/loti.jpg");
  texture.center.set(0.5, 0.5);
  texture.rotation = -Math.PI / 2;

  
  //const texture = useTexture("/textures/tensai.jpg");
  return (
    <group {...props} dispose={null}>
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
        <mesh geometry={nodes.logoDireita.geometry} material={materials.LOTI} position={[72.154, -900.161, 41.691]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1000} />
        <mesh geometry={nodes.logoEsquerda.geometry} material={materials.LOTI} position={[-98.518, 901.601, 41.692]} rotation={[-Math.PI / 2, 0, 0]} scale={1000} />
        <mesh geometry={nodes.logoFrente.geometry} material={materials.LOTI} position={[337.595, -655.821, -69.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={1000} />
        <group position={[-18.656, 155.938, -196.292]} rotation={[0, 0, Math.PI / 2]}>
          <group position={[-155.938, 0, 38.263]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.bordaDireita.geometry} material={materials.wood} position={[0, 0, -872]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.bordaEsquerda.geometry} material={materials.wood} position={[0, 0, 872]} rotation={[-Math.PI / 2, 0, 0]} />
            <group position={[0, 0, -648]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]}>
              <mesh geometry={nodes.bordaExtra_1.geometry} material={materials.wood} />
              <mesh geometry={nodes.bordaExtra_2.geometry} material={materials.polystyrene} />
            </group>
            <mesh geometry={nodes.bordaFrente.geometry} material={materials.wood} position={[0, -328, 0]} />
            <mesh geometry={nodes.bordaTras.geometry} material={materials.wood} position={[0, 328, 0]} rotation={[-Math.PI, 0, 0]} />
          </group>
          <mesh geometry={nodes.sepradorMetalico.geometry} material={materials['Metal.2']} position={[-5.338, 0, -8.188]} />
          <mesh geometry={nodes.tampaDireita.geometry} material={materials.wood} position={[-717.438, 0, -6.188]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[0, -17.5, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <mesh geometry={nodes.puxadorDireita_1.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.puxadorDireita_2.geometry} material={materials['Metal.2']} />
            </group>
          </mesh>
          <mesh geometry={nodes.tampaEsquerda.geometry} material={materials.wood} position={[706.762, 0, -6.188]} rotation={[0, 0, -Math.PI / 2]}>
            <group position={[0, -17.5, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <mesh geometry={nodes.puxadorEsquerdo_1.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.puxadorEsquerdo_2.geometry} material={materials['Metal.2']} />
            </group>
          </mesh>
        </group>
        <mesh geometry={nodes.faceEsquerda.geometry} material={materials.Vinyl} position={[-18.656, 899.5, 252.087]} />
        <group position={[336.844, 0, 252.087]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.faceFrente_1.geometry}>
        <meshStandardMaterial map={texture} />
        </mesh>
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
        <mesh geometry={nodes.faceTras.geometry} material={materials.Vinyl} position={[-374.156, 0, 252.087]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.grelhaDireita.geometry} material={materials.Vinyl} position={[-18.656, -899.5, 306.337]} rotation={[0, 0, Math.PI]} />
        <group position={[-377.156, -761, 473.837]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.grelhaTras_1.geometry} material={materials.GRAY14} />
          <mesh geometry={nodes.grelhaTras_2.geometry} material={materials.Metal} />
          <mesh geometry={nodes.grelhaTras_3.geometry} material={materials.GOLD} />
        </group>
        <mesh geometry={nodes.painelBaixo.geometry} material={materials.WHITE} position={[-18.656, 150.5, 650.837]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      </group>
      <group position={[-0.147, 0.297, 0.03]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.001}>
        <mesh geometry={nodes.banheira.geometry} material={materials.GRAY15} />
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
      <Html>        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </Html>
    </group>
  )
}

useGLTF.preload('/models/loti.glb')
