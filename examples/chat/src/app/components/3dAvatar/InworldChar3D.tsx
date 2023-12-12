/* eslint-disable */
import { AdditionalPhonemeInfo, EmotionEvent } from '@inworld/web-core';
import { Suspense, useState } from 'react';
import { Canvas, Camera } from '@react-three/fiber';
import { Model } from './Model';
import { LinearProgress, Typography } from '@mui/material';
import { Skeleton } from '../skeleton/Skeleton';
interface InworldChar3DProps {
  url: string;
  phonemes: AdditionalPhonemeInfo[];
  emotionEvent?: EmotionEvent;
}

export default function InworldChar3D(props: InworldChar3DProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LinearProgress></LinearProgress>}
      <Suspense
        fallback={
          <Skeleton>
            <Typography color="white">Loading</Typography>
          </Skeleton>
        }
      >
        
        <Canvas
          style={{ height: '100%', width: '100%' }}
          camera={{ fov: 25, position: [0, 0, 3], rotation: [0, 0, 0] }}
        >
          <color attach="background" args={['#000000']} />
          
          {true && (
            <Suspense fallback={null}>
              <Model
                url={props.url}
                phonemes={props.phonemes}
                emotionEvent={props.emotionEvent}
                onLoad={() => {
                  // console.log("model: ", props)
                  setIsLoaded(true);
                }}
              />
            </Suspense>
          )}
          
          <mesh position={[0,1,-2]} scale={[5, 5, 1]}>
            <planeGeometry />
          </mesh>
          <ambientLight intensity={0.25} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={0.25} />
        </Canvas>
      </Suspense>
    </>
  );
}
