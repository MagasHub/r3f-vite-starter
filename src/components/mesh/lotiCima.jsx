import { useGLTF } from '@react-three/drei'

export function LotiCima(props) {
  const { nodes, materials } = useGLTF('/faceCima.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5025017'].geometry}
        material={materials.leather_02}
        position={[0.544, 0.933, -0.019]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5025017001'].geometry}
        material={materials.leather_02}
        position={[-0.845, 0.933, -0.019]}
        scale={0.001}
      />
      <group position={[0, 0.889, -0.019]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['8810020-01'].geometry}
          material={materials.oak_veneer_02}
          position={[0, 328, 0]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['8810020-01_1'].geometry}
          material={materials.oak_veneer_02}
          position={[0, -328, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['8810020-02-01'].geometry}
          material={materials.oak_veneer_02}
          position={[0, 0, 872]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['8810020-02-02'].geometry}
          material={materials.oak_veneer_02}
          position={[0, 0, -872]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['8810020-03'].geometry}
          material={materials.oak_veneer_02}
          position={[0, 0, -648]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8810021-01'].geometry}
        material={materials.oak_veneer_02}
        position={[-0.863, 0.933, -0.019]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8810021-01001'].geometry}
        material={materials.oak_veneer_02}
        position={[0.562, 0.933, -0.019]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8810021-02'].geometry}
        material={materials['Metal.2']}
        position={[-0.151, 0.935, -0.019]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8860054-01'].geometry}
        material={materials['Metal.2']}
        position={[-0.833, 0.92, 0.046]}
        rotation={[0, -1.571, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8860054-01001'].geometry}
        material={materials['Metal.2']}
        position={[-0.833, 0.92, -0.084]}
        rotation={[0, -1.571, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8860054-01002'].geometry}
        material={materials['Metal.2']}
        position={[0.531, 0.92, 0.046]}
        rotation={[0, -1.571, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8860054-01003'].geometry}
        material={materials['Metal.2']}
        position={[0.531, 0.92, -0.084]}
        rotation={[0, -1.571, 0]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('/faceCima.glb')