import { Decal, Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Tensai } from "./Tensai";
import { TensaiB } from "./TensaiB";
import { TensaiC } from "./TensaiC";
import { TensaiD } from "./TensaiD";
import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";


export const Experience = () => {

  const { camera } = useThree();

  useFrame(() => {
    console.log("Camera Position:", camera.position);
  });

 // const texture = useTexture("/textures/tensai.jpg")
  return (
    <>
      <OrbitControls />
      <TensaiD />
      <Environment preset="studio" background={false} backgroundIntensity={0} />
    {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
        <Decal
          debug // Makes "bounding box" of the decal visible
          position={[0, 0, -0.5]} // Position of the decal
          rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[0.5, 0.5, 0.5]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal>
  </mesh>*/}
    </>
  );
};
