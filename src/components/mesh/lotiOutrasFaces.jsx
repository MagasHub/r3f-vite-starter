import { useGLTF } from '@react-three/drei'

export function LotiOutrasFaces(props) {
  const { nodes, materials } = useGLTF('/faceLateralTras.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOTI001.geometry}
        material={materials.LOTI}
        position={[0.9, 0.681, 0.072]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LOTI002.geometry}
        material={materials.LOTI}
        position={[-0.902, 0.681, -0.099]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['1475-03'].geometry}
        material={materials.GRAY14}
        position={[0.761, 0.249, -0.377]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5025001-02'].geometry}
        material={materials.Vinyl}
        position={[0, 0.471, -0.374]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5025002'].geometry}
        material={materials.Vinyl}
        position={[-0.899, 0.471, -0.019]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5025003'].geometry}
        material={materials.Vinyl}
        position={[0.899, 0.815, -0.019]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5025004'].geometry}
        material={materials.Vinyl}
        position={[0.899, 0.416, -0.019]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BlackPlate.geometry}
        material={materials.GRAY67}
        position={[0.738, 0.086, -0.019]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload('/faceLateralTras.glb')