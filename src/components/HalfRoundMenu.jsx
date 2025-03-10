import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/button";

const buttons = [
  {
    id: 4,
    defaultIcon: <img src="/Icons/grelha_branco.svg" width="10vw" />,
    hoverIcon: <img src="/Icons/grelha_azul.svg" width="10vw" />,
  },
  {
    id: 3,
    defaultIcon: <img src="/Icons/design_branco.svg" width="10vw" />,
    hoverIcon: <img src="/Icons/design_azul.svg" width="10vw" />,
  },
  {
    id: 2,
    defaultIcon: <img src="/Icons/cuba_branco.svg" width="10vw" />,
    hoverIcon: <img src="/Icons/orcamento_azul.svg" width="10vw" />,
  },
  {
    id: 1,
    defaultIcon: <img src="/Icons/Ativo 3.svg" width="35vw" />,
    hoverIcon: <img src="/Icons/tampa_azul.svg" width="35vw" />,
  },
];

export const HalfRoundMenu = () => {
  const [hovered, setHovered] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixedMenu">
      <div className="relative" style={{ width: "100%", height: "100%" }}>
        {/* Background line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 rounded-full"></div>

        {buttons.map((btn, index) => {
          let positionStyle = {};
          if (index === 0) {
            // First button (top) - Slightly shifted to the right
            positionStyle = { marginBottom: "30px" };
          } else if (index === 1) {
            // Second button (middle) - Centered
            positionStyle = { marginBottom: "30px" };
          } else if (index === 2) {
            // Third button (bottom) - Slightly shifted to the right
            positionStyle = { marginTop: "30px" };
          } else if (index === 3) {
            // Fourth button (very bottom) - Centered
            positionStyle = { transform: "translateX(50%)" };
          }

          return (
            <motion.div
              key={btn.id}
              style={{
                position: "relative",
                ...positionStyle,
                transformOrigin: "center center",
              }}
              initial={{ scale: 1 }}
              animate={{ scale: hovered === btn.id ? 1.2 : 1 }}
              onMouseEnter={() => setHovered(btn.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Button
                variant="ghost"
                size="icon"
                className="transition-all duration-200 bg-transparent border-none shadow-none"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  background: "transparent",
                }}
              >
                {hovered === btn.id ? btn.hoverIcon : btn.defaultIcon}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
