import { React, Suspense } from "react";
import Canvas from "@react-three/fiber";
import Loader from "../Components/Loader";
import Island from "../models/Island";

const Home = () => {
  const adjustIslandforScreenSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, 0.9];
    let Rotation = [0.1, 4.7, 0.1]

    if (window.innerWidth < 786) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, Rotation];
  };

  const [IslandScale, IslandPosition, IslandRotation] = adjustIslandforScreenSize();
  return (
    <section className="relative w-full h-screen">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <pointLight />
          <ambientLight />
          <spotLight />
          <hemisphereLight />

          <Island scale={IslandScale} position={IslandPosition}
          rotation = {IslandRotation} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
