import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

import "./App.css";

export default function App() {
    return (
        <Canvas
            camera={{
                fov: 64,
                position: [2.0, 1.5, 2.0],
            }}
        >
            <color attach="background" args={["#2E2D4F"]} />
            <Experience />
        </Canvas>
    );
}
