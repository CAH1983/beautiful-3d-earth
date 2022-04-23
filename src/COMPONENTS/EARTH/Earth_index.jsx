import React,  { useRef } from 'react';
import {useFrame, useLoader} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import * as THREE from 'three';
 
import EarthDayMap from '../../ASSETS/Textures/8k_earth_daymap.jpg';
import EarthNightMap from '../../ASSETS/Textures/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../ASSETS/Textures/8k_earth_normal_map.jpg';
import EarthSpecMap from '../../ASSETS/Textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../ASSETS/Textures/8k_earth_clouds.jpg';
import {TextureLoader} from 'three';

export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecMap, EarthCloudsMap]);

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame( ({clock} ) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = cloudsRef.current.rotation.y = elapsedTime/6;

    })

    return (
        <>
        {/* <ambientLight intensity={1}/> */}
        {/* gives a spotlight on the earth */}
        <pointLight color='white' position={[2,0,5]} intensity={1.5} />
        <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
        />
            {/* Clouds */}
            <mesh ref={cloudsRef} scale={[1.3, 1.3, 1.3]} >
                <sphereGeometry args={[1.005,32,32]}/>
                <meshPhongMaterial 
                    map={cloudsMap} 
                    opacity={0.3} 
                    depthWrite={true} 
                    transparent={true} 
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* earth */}
            <mesh ref={earthRef} scale={[1.3, 1.3 , 1.3]}>
                <sphereGeometry args={[1,32,32]} />
                <meshPhongMaterial specularMap={specularMap}/>
                <meshStandardMaterial 
                    map={colorMap} 
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.7}
                />

                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                />

            </mesh>

        </>
    )

}