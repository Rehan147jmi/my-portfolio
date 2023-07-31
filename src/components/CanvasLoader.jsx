import { Html,useProgress } from "@react-three/drei";

const CanvasLoader =()=>{
    const {progress} = useProgress()
    return(
        <Html className="mt-[-100px]">
           {progress.toFixed(2)}%Loaded
        </Html>
    )
}


export default CanvasLoader
