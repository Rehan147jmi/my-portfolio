import React  from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { Robo2 } from "./Robo2";

const Model = () =>{
    return(
        
        <Canvas
        id="canvas"     
        camera={{ position: [20, 10, 10], fov: 40 }}      
        >
        <ambientLight intensity={2}/>
        <pointLight intensity={2}  position={[0, 5, 5]} />
         <spotLight intensity={1}  position={[20, 50, 10]} />
         <Suspense fallback={<CanvasLoader/>}>
         <OrbitControls enableZoom={false}
         position={[10,10,10]}
         enablePan={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} /> 
         <Robo2/>
         </Suspense>
         <Preload all/>     
        </Canvas>
        
    )
}

export default Model;