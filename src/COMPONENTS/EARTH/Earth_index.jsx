import React from 'react';
import {useLoader} from '@react-three/fiber';
import EarthDayMap from '../../ASSETS/TEXTURES/8k_earth_daymap.jpg';
import EarthNightMap from '../../ASSETS/TEXTURES/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../ASSETS/TEXTURES/8k_earth_normal_map.jpg';
import EarthSpecMap from '../../ASSETS/TEXTURES/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../ASSETS/TEXTURES/8k_earth_clouds.jpg';
import {TextureLoader} from 'three';

export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecMap, EarthNightMap, EarthCloudsMap]);
    return (
        <>
        <ambientLight intensity={0.5}/>
            <mesh>
                <sphereGeometry args={[1,32,32]}/>
                <meshPhongMaterial specularMap={specularMap}/>
                <meshStandardMaterial map={colorMap} normalMap={normalMap}/>

            </mesh>
        </>
    )

}