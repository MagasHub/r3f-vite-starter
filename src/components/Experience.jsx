import { useTextureStore } from "../store/textureStore";
import { Environment, OrbitControls } from "@react-three/drei";
import { LotiMesh } from "./mesh/LotiMesh.jsx";

export const Experience = () => {
  const texture = useTextureStore((state) => state.texture);
  return (
    <>
      <OrbitControls />
      <LotiMesh texture={texture} />
      <Environment preset="studio" background={false} backgroundIntensity={0} />
    </>
  );
};
