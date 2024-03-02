import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export default function Experience() {
    return (
        <>
            <ambientLight intensity={1.2} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
                <Office />
            </ScrollControls>
        </>
    );
}
