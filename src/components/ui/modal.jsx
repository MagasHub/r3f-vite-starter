import React from 'react';
import { Html } from '@react-three/drei';
import "../../css/brand.css"

export function PopupModal({ title, description, position }) {
  return (
    <Html position={position} center>
      <div
        style={{
          background: 'var(--linear-background)',
          border: '1px solid grey',
          color: "var(--white)",
          padding: '4px 24px',
          borderRadius: '24px',
          width: '240px',
  
        }}
      >
        <h4 style={{color: "var(--blue)"}}>{title.toUpperCase()}</h4>
        <p style={{fontSize: 14, fontWeight: 200, letterSpacing:1, lineHeight:1.5}}>{description}</p>
      </div>
    </Html>
  );
}
