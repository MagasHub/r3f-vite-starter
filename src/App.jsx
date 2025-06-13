import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { TopBar } from "./components/TopBar";
import { useGLTF } from '@react-three/drei';
import { SideMenu } from "./components/sideMenu";
import { BottomBar } from "./components/BottomBar";
import { CustomizationInfoBox } from "./components/CustomizationInfoBox";

function App() {
  const { materials } = useGLTF('/models/loti.glb');
  const [currentMaterial, setCurrentMaterial] = useState(null);
  const [currentMaterialS, setCurrentMaterialS] = useState(null);
  const [isImageActive, setIsImageActive] = useState(false);
  const [isImageActiveB, setIsImageActiveB] = useState(false);
  const [corLaterais, setCorLaterais] = useState("black");
  const [imageData, setImageData] = useState(null);
  const [currentMaterialP, setCurrentMaterialP] = useState(null);
  const [currentMaterialB, setCurrentMaterialB] = useState(null);
  const [currentMaterialT, setCurrentMaterialT] = useState(null);
  const [Cor, setCor] = useState("black");
  const [CorG, setCorG] = useState("black");
  const [tamposVisible, setTamposVisible] = useState(true);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [logoCor, setLogoCor] = useState("original");
  const [corLateraisOverride, setCorLateraisOverride] = useState(null);


  // Inicializar com o preset do primeiro modelo quando o aplicativo carrega
  useEffect(() => {
    if (materials) {
      setCurrentMaterial(materials.lotimain);
      setCurrentMaterialS(materials.black);
      setCurrentMaterialT(materials.wood);
      setCor("black");
      setCorG("black");
      setLogoCor("original");
    }
  }, [materials]);

  useEffect(() => {
    console.log(currentMaterialP);
  }, [currentMaterialP]);

  useEffect(() => {
    console.log(Cor);
  }, [Cor]);

  const handleAccessoryClick = (label) => {
    if (selectedAccessories.includes(label)) {
      setSelectedAccessories(selectedAccessories.filter((item) => item !== label));
    } else {
      setSelectedAccessories([...selectedAccessories, label]);
    }
  };
  
  return (
    <div className="canvas-container" style={{ position: "relative", height: "100vh" }}>
      <TopBar
        setCurrentMaterial={setCurrentMaterial}
        setCurrentMaterialS={setCurrentMaterialS}
        materials={materials}
        setIsImageActive={setIsImageActive}
        setIsImageActiveB={setIsImageActiveB}
        setCurrentMaterialT={setCurrentMaterialT}
        Cor={Cor}
        setCor={setCor}
        CorG={CorG}
        setCorG={setCorG}
        logoCor={logoCor}
        setLogoCor={setLogoCor}
        setCorLateraisOverride={setCorLateraisOverride} 
      />
      <SideMenu
        setCurrentMaterialP={setCurrentMaterialP}
        Cor={Cor}
        setCor={setCor}
        CorG={CorG}
        setCorG={setCorG}
        materials={materials}
        setCurrentMaterialB={setCurrentMaterialB}
        setCurrentMaterialT={setCurrentMaterialT}
        tamposVisible={tamposVisible}
        setTamposVisible={setTamposVisible}
        onButtonClick={(i) => {}}
        logoCor={logoCor}
        setLogoCor={setLogoCor}
        corLaterais={corLaterais}  
        setCorLaterais={setCorLaterais}
        corLateraisOverride={corLateraisOverride} // Estado do override
        setCorLateraisOverride={setCorLateraisOverride} // Override manual das laterais

      />

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
          zIndex: 0,
        }}
      >
        <Experience
          currentMaterial={currentMaterial}
          currentMaterialS={currentMaterialS}
          setCurrentMaterialP={setCurrentMaterialP}
          setCurrentMaterialB={setCurrentMaterialB}
          isImageActive={isImageActive}
          isImageActiveB={isImageActiveB}
          currentMaterialP={currentMaterialP}
          currentMaterialT={currentMaterialT}
          currentMaterialB={currentMaterialB}
          tamposVisible={tamposVisible}
          setTamposVisible={setTamposVisible}
          Cor={Cor}
          setCor={setCor}
          CorG={CorG}
          setCorG={setCorG}
          setIsImageActive={setIsImageActive}
          setIsImageActiveB={setIsImageActiveB}
          imageData={imageData} // Renomeado para imageData para combinar com o TensaiH
          selectedAccessories={selectedAccessories}
          logoCor={logoCor}
          corLaterais={corLaterais}
          corLateraisOverride={corLateraisOverride} // Override manual das laterais

        />
      </Canvas>
      <BottomBar onAccessoryClick={handleAccessoryClick} />
      <CustomizationInfoBox
        currentMaterialP={isImageActive ? "personal" : currentMaterial?.name}
        currentMaterialB={isImageActiveB ? "personal" : currentMaterial?.name}
        currentMaterialT={currentMaterialT?.name || "wood"}
        grelhaColor={CorG}
        Cor={Cor}
        selectedAccessories={selectedAccessories}
        isImageActive={isImageActive}
        isImageActiveB={isImageActiveB}
        logoCor={logoCor}
        // Aqui precisaríamos acessar as informações das imagens para incluir no email
        // imageInfo e imageInfoB estão dentro do componente TensaiH 
      />
    </div>
  );
}

export default App;