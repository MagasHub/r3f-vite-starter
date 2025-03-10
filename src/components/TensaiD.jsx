import React, { useRef, useState } from 'react';
import { extend } from '@react-three/fiber'
import { useGLTF, useTexture, Decal, Html } from '@react-three/drei';
import { SideMenu } from "./sideMenu"; 



export function TensaiD(props) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const { nodes, materials } = useGLTF('/models/tensaiD.glb');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageSelect = (imageData) => {
    setSelectedImage(imageData);
    {handleImageUpload}  // Update the state with the selected image
    console.log("Selected image in TensaiD:", imageData);  // For debugging
  };


  const handleImageUpload = (event) => {
    const file = setSelectedImage;
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const texture = uploadedImage ? useTexture(uploadedImage) : useTexture("/textures/tensai.jpg");
  //const texture = useTexture("/textures/tensai.jpg");
  
  return (
    <group {...props} dispose={null}>
      <group position={[-0.1, 0.189, 0.048]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.001}>
        <mesh geometry={nodes.LOTI.geometry} material={materials.LOTI} position={[337.344, -655.821, -69.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={1000} />
        <mesh geometry={nodes.LOTI001.geometry} material={materials.LOTI} position={[72.154, -900.161, 41.691]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={1000} />
        <mesh geometry={nodes.LOTI002.geometry} material={materials.LOTI} position={[-98.518, 901.601, 41.692]} rotation={[-Math.PI / 2, 0, 0]} scale={1000} />
        <group position={[282.344, 844.429, 724.837]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes['8771025-01'].geometry} material={materials.Metal} position={[0, 0, -25]} />
          <mesh geometry={nodes['8771025-02'].geometry} material={materials.GRAY75} position={[0, 42.014, -35.695]} />
          <mesh geometry={nodes['8771025-03'].geometry} material={materials.Wheel_Rubber} position={[-11.5, 25, -25]} rotation={[3.079, 0, 0]} />
          <mesh geometry={nodes['8771025-03001'].geometry} material={materials.Wheel_Rubber} position={[11.5, 25, -25]} />
          <mesh geometry={nodes['8771025-04'].geometry} material={materials.GRAY75} position={[0, 0, -72]} />
        </group>
        <group position={[279.844, -848.092, 724.615]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes['8771025-01001'].geometry} material={materials.Metal} position={[0, 0, -25]} />
          <mesh geometry={nodes['8771025-02001'].geometry} material={materials.GRAY75} position={[0, 42.014, -35.695]} />
          <mesh geometry={nodes['8771025-03010'].geometry} material={materials.Wheel_Rubber} position={[-11.5, 25, -25]} rotation={[3.079, 0, 0]} />
          <mesh geometry={nodes['8771025-03011'].geometry} material={materials.Wheel_Rubber} position={[11.5, 25, -25]} />
          <mesh geometry={nodes['8771025-04005'].geometry} material={materials.GRAY75} position={[0, 0, -72]} />
        </group>
        <group position={[279.344, -290, 724.837]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh geometry={nodes['8771025-05'].geometry} material={materials.Metal} position={[0, 0, -25]} />
          <mesh geometry={nodes['8771025-03002'].geometry} material={materials.Wheel_Rubber} position={[-11.5, 25, -25]} rotation={[3.079, 0, 0]} />
          <mesh geometry={nodes['8771025-03003'].geometry} material={materials.Wheel_Rubber} position={[11.5, 25, -25]} />
          <mesh geometry={nodes['8771025-04001'].geometry} material={materials.GRAY75} position={[0, 0, -72]} />
        </group>
        <group position={[-316.656, -285, 724.837]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes['8771025-05001'].geometry} material={materials.Metal} position={[0, 0, -25]} />
          <mesh geometry={nodes['8771025-03004'].geometry} material={materials.Wheel_Rubber} position={[-11.5, 25, -25]} rotation={[3.079, 0, 0]} />
          <mesh geometry={nodes['8771025-03005'].geometry} material={materials.Wheel_Rubber} position={[11.5, 25, -25]} />
          <mesh geometry={nodes['8771025-04002'].geometry} material={materials.GRAY75} position={[0, 0, -72]} />
        </group>
        <group position={[-314.156, -845.5, 724.837]} rotation={[0, 0, -Math.PI]}>
          <mesh geometry={nodes['8771025-05002'].geometry} material={materials.Metal} position={[0, 0, -25]} />
          <mesh geometry={nodes['8771025-03006'].geometry} material={materials.Wheel_Rubber} position={[-11.5, 25, -25]} rotation={[3.079, 0, 0]} />
          <mesh geometry={nodes['8771025-03007'].geometry} material={materials.Wheel_Rubber} position={[11.5, 25, -25]} />
          <mesh geometry={nodes['8771025-04003'].geometry} material={materials.GRAY75} position={[0, 0, -72]} />
        </group>
        <group position={[-316.656, 828.409, 724.837]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes['8771025-05003'].geometry} material={materials.Metal} position={[0, 0, -25]} />
          <mesh geometry={nodes['8771025-03008'].geometry} material={materials.Wheel_Rubber} position={[-11.5, 25, -25]} rotation={[3.079, 0, 0]} />
          <mesh geometry={nodes['8771025-03009'].geometry} material={materials.Wheel_Rubber} position={[11.5, 25, -25]} />
          <mesh geometry={nodes['8771025-04004'].geometry} material={materials.GRAY75} position={[0, 0, -72]} />
        </group>
        <group position={[-18.656, 0, -166.416]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh geometry={nodes['8810020-01'].geometry} material={materials.oak_veneer_02} position={[0, 328, 0]} rotation={[-Math.PI, 0, 0]} />
          <mesh geometry={nodes['8810020-01_1'].geometry} material={materials.oak_veneer_02} position={[0, -328, 0]} />
          <mesh geometry={nodes['8810020-02-01'].geometry} material={materials.oak_veneer_02} position={[0, 0, 872]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['8810020-02-02'].geometry} material={materials.oak_veneer_02} position={[0, 0, -872]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['8810020-03'].geometry} material={materials.oak_veneer_02} position={[0, 0, -648]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <group position={[-18.656, 155.938, -204.228]} rotation={[0, 0, Math.PI / 2]}>
          <mesh geometry={nodes['8810021-01'].geometry} material={materials.oak_veneer_02} position={[706.762, 0, -6.188]} rotation={[0, 0, -Math.PI / 2]} />
          <mesh geometry={nodes['8810021-01001'].geometry} material={materials.oak_veneer_02} position={[-717.438, 0, -6.188]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes['8810021-02'].geometry} material={materials['Metal.2']} position={[-5.338, 0, -8.188]} />
        </group>
        <mesh geometry={nodes['0253-02'].geometry} material={materials.Metal} position={[-373.856, -634, 572.837]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes['0445'].geometry} material={materials['Metal.2']} position={[344.194, -100, 532.337]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes['0445001'].geometry} material={materials['Metal.2']} position={[344.194, 100, 532.337]} rotation={[2.788, 0, Math.PI / 2]} />
        <mesh geometry={nodes['1034'].geometry} material={materials.Vinyl} position={[279.344, -604, 134.337]} rotation={[-Math.PI, -1.571, 0]} />
        <mesh geometry={nodes['1475-03'].geometry} material={materials.GRAY14} position={[-377.156, -761, 473.837]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['1850'].geometry} material={materials.WHEAT3} position={[370.951, -100, 532.337]} rotation={[2.76, 0, Math.PI / 2]} />
        <mesh geometry={nodes['1850001'].geometry} material={materials.WHEAT3} position={[369.712, 100, 532.337]} rotation={[-0.974, 0, Math.PI / 2]} />
        <mesh geometry={nodes['5025001-01'].geometry} material={materials.Vinyl} position={[336.844, 0, 252.087]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['5025001-02'].geometry} material={materials.Vinyl} position={[-374.156, 0, 252.087]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes['5025002'].geometry} material={materials.Vinyl} position={[-18.656, 899.5, 252.087]} />
        <mesh geometry={nodes['5025003'].geometry} material={materials.Vinyl} position={[-18.656, -899.5, -92.663]} rotation={[-Math.PI, 0, 0]} />
        <mesh geometry={nodes['5025004'].geometry} material={materials.Vinyl} position={[-18.656, -899.5, 306.337]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes['5025005'].geometry} material={materials.GRAY67} position={[-316.656, -749.5, 650.837]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes['5025005001'].geometry} material={materials.GRAY67} position={[279.344, -749.5, 650.615]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes['5025006'].geometry} material={materials.GRAY67} position={[-316.656, -599.5, 300.837]} rotation={[-Math.PI / 2, 0, Math.PI]} />
        <mesh geometry={nodes['5025006001'].geometry} material={materials.GRAY67} position={[279.344, -599.5, 300.837]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
        <mesh geometry={nodes['5025007'].geometry} material={materials.GRAY67} position={[-18.656, -899.381, -49.163]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
        <mesh geometry={nodes['5025008'].geometry} material={materials.WHITE} position={[-18.656, 150.5, 650.837]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
        <mesh geometry={nodes['5025009'].geometry} material={materials.GRAY67} position={[-18.656, -749.5, 279.837]} rotation={[0, -1.571, 0]} />
        <mesh geometry={nodes['5025010'].geometry} material={materials.GRAY67} position={[-18.656, -738.25, 636.837]} />
        <mesh geometry={nodes['5025011'].geometry} material={materials.GRAY67} position={[336.844, 0, 529.337]} rotation={[0, 1.571, 0]} />
        <mesh geometry={nodes['5025011001'].geometry} material={materials.GRAY67} position={[-18.656, -590.393, 650.237]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['5025011002'].geometry} material={materials.GRAY67} position={[-18.656, 881.5, -145.916]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['5025013'].geometry} material={materials.GRAY50} position={[-18.656, 869, -148.116]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['5025014'].geometry} material={materials.GRAY50} position={[351.044, 0, 524.337]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes['5025017'].geometry} material={materials.leather_02} position={[-18.656, -544, -210.416]} rotation={[-Math.PI / 2, -1.571, 0]} />
        <mesh geometry={nodes['5025017001'].geometry} material={materials.leather_02} position={[-18.656, 845.2, -210.416]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
        <mesh geometry={nodes['8790461-02'].geometry} material={materials.GRAY14} position={[-371.499, -761, 341.847]} rotation={[Math.PI / 2, 0, 2.321]} />
        <mesh geometry={nodes['8790461-02001'].geometry} material={materials.GRAY14} position={[-371.499, -761, 605.826]} rotation={[Math.PI / 2, 0, 0.821]} />
        <mesh geometry={nodes['8790461-03'].geometry} material={materials.GRAY14} position={[-370.096, -856.586, 476.837]} rotation={[0, 0, -0.585]} />
        <mesh geometry={nodes['8790461-03001'].geometry} material={materials.GRAY14} position={[-371.499, -662.011, 476.837]} rotation={[0, 0, 0.821]} />
        <group position={[339.544, -713.5, 42.787]}>
          <mesh geometry={nodes['8803020_1'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8803020_2'].geometry} material={materials.GRAY17} />
        </group>
        <mesh geometry={nodes['8803020001'].geometry} material={materials.GRAY75} position={[339.544, -713.5, 42.787]} />
        <mesh geometry={nodes['8803020002'].geometry} material={materials['Glass.Ss']} position={[339.544, -713.5, 42.787]} />
        <mesh geometry={nodes['8860002'].geometry} material={materials.GOLD} position={[-368.456, -654.7, 473.837]} rotation={[0, -1.571, 0]} />
        <mesh geometry={nodes['8860002001'].geometry} material={materials.GOLD} position={[-368.456, -865.3, 473.837]} rotation={[2.54, -Math.PI / 2, 0]} />
        <mesh geometry={nodes['8860003'].geometry} material={materials.GOLD} position={[338.844, 100, 532.337]} rotation={[-Math.PI, 1.571, 0]} />
        <mesh geometry={nodes['8860003001'].geometry} material={materials.GOLD} position={[338.844, -100, 532.337]} rotation={[-Math.PI, 1.571, 0]} />
        <mesh geometry={nodes['8860052'].geometry} material={materials.Metal} position={[-362.656, -865.3, 473.837]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes['8860052001'].geometry} material={materials.Metal} position={[-362.656, -656.7, 473.837]} rotation={[-0.458, 0, Math.PI / 2]} />
        <mesh geometry={nodes['8860054-01'].geometry} material={materials['Metal.2']} position={[46.344, 832.7, -197.416]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes['8860054-01001'].geometry} material={materials['Metal.2']} position={[-83.656, 832.7, -197.416]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes['8860054-01002'].geometry} material={materials['Metal.2']} position={[46.344, -531.5, -197.416]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes['8860054-01003'].geometry} material={materials['Metal.2']} position={[-83.656, -531.5, -197.416]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.BlackPlate.geometry} material={materials.GRAY67} position={[-18.656, -738.25, 636.837]} />
        <group position={[-18.656, -379.327, 650.481]} rotation={[-1.588, -Math.PI / 2, 0]}>
          <mesh geometry={nodes['8791000-01_-_SIFÃO'].geometry} material={materials.SNOW2} />
          <mesh geometry={nodes['8791000-02_-_VEDANTE_PRETO_69X50X7'].geometry} material={materials.GRAY15} />
          <mesh geometry={nodes['8791000-03_-_RALO_CROMADO'].geometry} material={materials.GRAY74} position={[0, 0.26, 0]} rotation={[0, -1.216, 0]} />
          <mesh geometry={nodes['8791000-04_-_VEDANTE_ESPONJA_1MM'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-05_-_FILTRO_PRETO'].geometry} material={materials.GRAY15} position={[0, 0.26, 0]} rotation={[0, -1.57, 0]} />
          <mesh geometry={nodes['8791000-06_-_ENCAIXE_MOLA'].geometry} material={materials.GRAY75} position={[0, 0.26, 0]} rotation={[0, -1.57, 0]} />
          <mesh geometry={nodes['8791000-07_-_PEÇA_COM_MOLA'].geometry} material={materials.GRAY75} position={[0, 0.26, 0]} rotation={[0, -1.57, 0]} />
          <mesh geometry={nodes['8791000-08_-_ENCAIXE_RALO'].geometry} material={materials.GRAY75} position={[0, 0.26, 0]} rotation={[0, 1.384, 0]} />
          <mesh geometry={nodes['8791000-09_-_VEDANTE_ÁGUA'].geometry} material={materials.GRAY75} position={[0, 0.26, 0]} rotation={[0, -1.57, 0]} />
          <mesh geometry={nodes['8791000-10_-_TAMPA-CROMADO'].geometry} material={materials.WHITESMOKE} position={[0, 0.26, 0]} rotation={[0, 0.053, 0]} />
          <mesh geometry={nodes['8791000-10_-_TAMPA-PLÁSTICO'].geometry} material={materials.GRAY75} position={[0, 0.26, 0]} rotation={[0, -1.568, 0]} />
          <mesh geometry={nodes['8791000-11_-_VENDANTE_SIFÃO-_TUBO_LADRÃO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-12_-_VEDANTE_SIFÃO-ESGOTO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-13_-_PORCA_SIFÃO-_TUBO_D32'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-14_-_TUBO_D32'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-15_-_CURVA_90º_TUBO_LADRÃO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-16_-_VEDANTE_PRETO_TUBO_LADRÃO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-17_-_VEDANTE_TUBO_LADRÃO_CURVA-BANHEIRA'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-18_-_RALO-_TUBO_LADRÃO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-19_-_CLIP_TAMPA_TUBO_LADRÃO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-20_-_ACES_RALO_CROMADO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['8791000-20_-_ACES_RALO_PLÁSTICO'].geometry} material={materials.GRAY75} />
          <mesh geometry={nodes['ISO_7045_-_M5_x_45__-_48_-_H_-_ISO'].geometry} material={materials.GRAY30} position={[-140.709, 739.341, 0]} rotation={[0, 0, -3.072]} />
        </group>
        <mesh geometry={nodes['0946'].geometry} material={materials.SNOW2} position={[-218.656, -871.5, -50.916]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes['0946001'].geometry} material={materials.SNOW2} position={[181.344, -871.5, -50.916]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes['5025011004'].geometry} material={materials.GRAY67} position={[-18.656, 881.5, -145.916]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['8790416001'].geometry} material={materials.GRAY15} position={[-18.656, 150, -121.416]} />
        <mesh geometry={nodes['8801001-01'].geometry} material={materials.GRAY75} position={[-18.656, -527.846, 505.511]} rotation={[-0.087, 0.515, 0]} />
        <mesh geometry={nodes['8801001-02'].geometry} material={materials.GRAY75} position={[-18.656, -550.133, 256.506]} rotation={[-0.087, 0, 0]} />
        <mesh geometry={nodes['8860003006'].geometry} material={materials.GOLD} position={[-118.656, 878.5, -147.416]} rotation={[-Math.PI, 0, 0]} />
        <mesh geometry={nodes['8860003007'].geometry} material={materials.GOLD} position={[81.344, 878.5, -147.416]} rotation={[-Math.PI, 0, -2.57]} />
      </group>
      <group position={[0.003, 0.189, 0.048]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.001}>
        <mesh geometry={nodes['5025001-01001'].geometry}  position={[336.844, 0, 252.087]} rotation={[0, 0, -Math.PI / 2]} >
        
        <meshBasicMaterial color="white" transparent opacity={0} />
        </mesh>
      </group>
      <mesh geometry={nodes.Cube.geometry}  >
    
    <meshBasicMaterial transparent opacity={0}/>
      <Decal
        debug // Makes "bounding box" of the decal visible
        position={[0, 0, 0.5]} // Position of the decal
        rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
        scale={[1, 0.5, 0.5]} // Scale of the decal

      >
        {uploadedImage && texture && (
        <meshBasicMaterial map={texture} polygonOffset polygonOffsetFactor={-1} />
      )}
      {!uploadedImage && (
        <meshBasicMaterial color="white" transparent opacity={0} />
)}
      </Decal>


      </mesh>
        <Html>        <input type="file" accept="image/*" onChange={handleImageUpload} />
</Html>
    </group>
    
  

)
}

useGLTF.preload('/models/tensaiD.glb')
