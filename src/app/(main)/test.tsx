'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import { ShaderMaterial, Vector2 } from 'three'

export function Gradient() {
  return (
    // Make canvas fill screen and set camera position
    <Canvas
      style={{
        position: 'fixed',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <ShaderPlane />
    </Canvas>
  )
}

const ShaderPlane = () => {
  const shaderRef = React.useRef<ShaderMaterial | null>(null)

  useFrame(({ clock }) => {
    if (!shaderRef.current) return
    shaderRef.current.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh>
      {/* Increase plane size to fill screen */}
      <planeGeometry args={[20, 20, 32, 32]} />
      <shaderMaterial
        ref={shaderRef}
        attach="material"
        uniforms={{
          uTime: { value: 0 },
          uResolution: {
            value: new Vector2(window.innerWidth, window.innerHeight)
          }
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex noise function
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    float n = snoise(vUv * 3.0 + uTime * 0.2);
    
    vec3 color1 = vec3(0.0, 0.0, 0.0);     // Black
    vec3 color2 = vec3(0.5, 0.0, 0.8);     // Purple
    
    vec3 color = mix(color1, color2, vUv.y + n * 0.3);
    
    color += 0.1 * sin(uTime + vUv.xyx * 3.0);
    
    gl_FragColor = vec4(color, 1.0);
  }
`
