import { useTextureStore } from "./store/textureStore";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { SideMenu } from "./components/ui/sideMenu";

function App() {
  const handleImageSelect = (image) => {
    const addTextureFromButton = useTextureStore((state) => state.addTextureFromButton);
    addTextureFromButton(image);
  };

  const handleTextureChange = () => {
    console.log("Hello"); //TODO (ja funciona com o imageSleect...)
  };

  return (
    <div className="canvas-container" style={{ position: "relative", height: "100vh" }}>
      <SideMenu onImageSelect={handleImageSelect} onTextureChange={handleTextureChange} />
      
      <Canvas
        shadows
        camera={{ position: [-2.25, 1.395, 4.18], fov: 35 }}
      >

        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

