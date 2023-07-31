
import React, { useRef } from 'react'
import { useLoader,useFrame } from '@react-three/fiber';
import { useGLTF,useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export function Robo(props) {
  const { nodes, materials } = useGLTF('/robo.gltf');

    const modelRef1 = useRef();
 useFrame(() => {
    modelRef1.current.rotation.z += 0.01;
  });
    const modelRef2 = useRef();
 useFrame(() => {
    modelRef2.current.rotation.z += 0.01;
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh ref={modelRef1} scale={4}  geometry={nodes.Object_2.geometry} material={materials['Material.001']} >
           <hemisphereLight intensity={0.15} groundColor='black' />
          <spotLight   
          color={"#3e1456"} 
           penumbra={1}
           intensity={1}
           castShadow
           shadow-mapSize={1024}
           />
        </mesh>
        <mesh ref={modelRef2} scale={4} geometry={nodes.Object_3.geometry} material={materials['Material.002']} >
        <hemisphereLight  intensity={0.15} groundColor='black' />
          <spotLight
           color={"#3e1456"}
           penumbra={1}
           intensity={4}
           castShadow
           shadow-mapSize={1024}
           />
        </mesh>
        
      </group>
    </group>
  )
}

useGLTF.preload('/robo.gltf')
