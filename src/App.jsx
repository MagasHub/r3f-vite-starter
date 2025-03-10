import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { SideMenu } from "./components/sideMenu";

function App() {

  
  return (
    <div className="canvas-container" style={{ position: "relative", height: "100vh" }}>
      {/* UI Menu in front of the Canvas */}
      <SideMenu />

      {/* 3D Canvas */}
      <Canvas
      
        shadows
        camera={{ position: [-2.25, 1.395, 4.18], fov: 35 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          background: "transparent",
          height: "100%",
          zIndex: 0, // Ensure the canvas is behind the UI menu
        }}
        
      >
        
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

