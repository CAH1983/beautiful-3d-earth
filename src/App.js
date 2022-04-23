import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './COMPONENTS/EARTH/Earth_index';
import Header from './COMPONENTS/Header';

const CanvasContainer = styled.div`
width: 100%;
height: 100%;
`

function App() {
  return (
    
    <CanvasContainer>
      <Header/>
    <Canvas>
      <Suspense fallback={null}>
        <Earth/>
      </Suspense>

    </Canvas>
    </CanvasContainer>
  )
}

export default App;
