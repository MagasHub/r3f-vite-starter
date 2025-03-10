import "../../css/brand.css";
import { Html } from '@react-three/drei';

const StatusCard = ({
  designExterior = 'Personalizado',
  cubaInterior = 'Preta',
  tampa = 'Madeira, Grelha de Respiro',
  acessoriosExtra = '-',
}) => {
  return (
    <Html>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "clamp(24vw, 10vw, 5vw)",
          transform: "translateY(-50%)",
          width: '240px',
          background: 'var(--linear-background)', // Custom background linear gradient from brand.css
          padding: '16px',
          borderRadius: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "space-between",
          height: 'auto',
       
        }}
      >
        <div>
          {/* Title */}
          <h3
            style={{
              textAlign: 'center',
              color: 'var(--blue)',
              marginBottom: '24px',
            }}
          >
            YOUR <span style={{ color: 'var(--white)', }}>LOTI</span>
          </h3>

          {/* Content */}
          <div
            style={{
              color: 'var(--white)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px', // Reduced gap between rows
            }}
          >
            {/* Design Exterior */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: "8px" }}>
              <p style={{ fontSize: '14px' }}>DESIGN EXTERIOR:</p>
              <strong style={{ textAlign: "end", fontSize: '14px' }}>{designExterior}</strong>
            </div>

            {/* Cuba Interior */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: "8px" }}>
              <p style={{ fontSize: '14px' }}>CUBA INTERIOR:</p>
              <strong style={{ textAlign: "end", fontSize: '14px' }}>{cubaInterior}</strong>
            </div>

            {/* Tampa */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: "8px" }}>
              <p style={{ fontSize: '14px' }}>TAMPA:</p>
              <strong style={{ textAlign: "end", fontSize: '14px' }}>{tampa}</strong>
            </div>

            {/* Acessórios Extra */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: "8px" }}>
              <p style={{ fontSize: '14px' }}>Acessórios Extra:</p>
              <strong style={{ textAlign: "end", fontSize: '14px' }}>{acessoriosExtra}</strong>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          style={{
            marginTop: '16px',
            padding: '10px 16px',
            background: 'var(--linear-background)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: '24px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          onClick={() => alert('Pedir Orçamento clicked!')} // Example action
        >
          PEDIR ORÇAMENTO
        </button>
      </div>
    </Html>
  );
};

export default StatusCard;
