import { React, Suspense } from 'react'
import Canvas from '@react-three/fiber'
import Loader from '../Components/Loader'

const Home = () => {
  return (
    <section className='relative w-full h-screen'>
        <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{near: 0.1, far: 1000}}
        >
          <Suspense fallback= {<Loader />}>
            <directionalLight />
            <pointLight />
            <ambientLight />
            <spotLight/>
            <hemisphereLight />
          </Suspense>
        </Canvas>
    </section>
  )
}

export default Home