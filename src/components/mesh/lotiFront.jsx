import { useGLTF } from '@react-three/drei'

export function LotiFront({ textureMap, ...props }) {
    const { nodes, materials } = useGLTF('/faceFrontal.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['5025001-01'].geometry}
                material={materials.Vinyl}
                position={[0, 0.471, 0.337]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.001}

            >
                {textureMap && (
                    <meshBasicMaterial map={textureMap} />
                )}
            </mesh>
        </group>
    )
}

useGLTF.preload('/faceFrontal.glb')