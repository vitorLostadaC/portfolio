'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useMemo } from 'react'
import { ShaderMaterial, Vector2 } from 'three'

export function Gradient() {
  return (
    <Canvas>
      <ShaderPlane />
    </Canvas>
  )
}

const ShaderPlane = () => {
  const shaderRef = React.useRef<ShaderMaterial | null>(null)

  // leva (just for tests)
  const {
    timeSpeed,
    flowSpeed,
    flowIntensity,
    noiseScale,
    glowIntensity,
    highlightIntensity,
    color1,
    color2,
    color3
  } = {
    timeSpeed: 0.28,
    flowSpeed: 0.1,
    flowIntensity: 3,
    noiseScale: 3,
    glowIntensity: 0.5,
    highlightIntensity: 1,
    color1: '#000000',
    color2: '#0300cc',
    color3: '#000d80'
  }

  const hexToRGB = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255
    return [r, g, b]
  }

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: {
        value: new Vector2(window.innerWidth, window.innerHeight)
      },
      uTimeSpeed: { value: timeSpeed },
      uFlowSpeed: { value: flowSpeed },
      uFlowIntensity: { value: flowIntensity },
      uNoiseScale: { value: noiseScale },
      uGlowIntensity: { value: glowIntensity },
      uHighlightIntensity: { value: highlightIntensity },
      uColor1: { value: hexToRGB(color1) },
      uColor2: { value: hexToRGB(color2) },
      uColor3: { value: hexToRGB(color3) }
    }),
    []
  )

  useFrame(({ clock }) => {
    if (!shaderRef.current) return

    const material = shaderRef.current
    material.uniforms.uTime.value = clock.getElapsedTime()
    material.uniforms.uTimeSpeed.value = timeSpeed
    material.uniforms.uFlowSpeed.value = flowSpeed
    material.uniforms.uFlowIntensity.value = flowIntensity
    material.uniforms.uNoiseScale.value = noiseScale
    material.uniforms.uGlowIntensity.value = glowIntensity
    material.uniforms.uHighlightIntensity.value = highlightIntensity
    material.uniforms.uColor1.value = hexToRGB(color1)
    material.uniforms.uColor2.value = hexToRGB(color2)
    material.uniforms.uColor3.value = hexToRGB(color3)
  })

  return (
    <mesh>
      <planeGeometry args={[20, 20, 32, 32]} />
      <shaderMaterial
        ref={shaderRef}
        attach="material"
        uniforms={uniforms}
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
  uniform float uTimeSpeed;
  uniform float uFlowSpeed;
  uniform float uFlowIntensity;
  uniform float uNoiseScale;
  uniform float uGlowIntensity;
  uniform float uHighlightIntensity;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;

  // Smooth noise function
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  vec2 hash( vec2 p ) {
    p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
    return -1.0 + 2.0*fract(sin(p)*43758.5453123);
  }

  float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    
    vec2 i = floor(p + (p.x+p.y)*K1);
    vec2 a = p - i + (i.x+i.y)*K2;
    vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0*K2;
    
    vec3 h = max(0.5-vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
    vec3 n = h*h*h*h*vec3(dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
    
    return dot(n, vec3(70.0));
  }

  float fbm(vec2 p) {
    float f = 0.0;
    float w = 0.5;
    float scale = 2.0;
    
    for (int i = 0; i < 5; i++) {
      f += w * noise(p);
      p *= scale;
      w *= 0.5;
    }
    return f;
  }

  void main() {
    // Center the UV coordinates
    vec2 uv = vUv - 0.5;
    float time = uTime * uTimeSpeed;
    
    // Create flowing distortion from center
    vec2 flow = vec2(
      fbm(uv + vec2(time * uFlowSpeed)),
      fbm(uv + vec2(time * uFlowSpeed))
    );
    
    // Add second layer of flow with centered motion
    vec2 flow2 = vec2(
      fbm(uv + flow + vec2(time * -uFlowSpeed)),
      fbm(uv + flow + vec2(time * -uFlowSpeed))
    );
    
    // Create main pattern with centered origin
    float pattern = fbm(uv + flow * uFlowIntensity + flow2 * (uFlowIntensity * 0.5));
    
    // Create layers for depth from center
    float layer1 = fbm((uv + 0.5) * uNoiseScale + flow * 0.3);
    float layer2 = fbm((uv + 0.5) * (uNoiseScale * 1.5) - flow2 * 0.5);
    
    // Create translucent layering effect
    vec3 finalColor = mix(uColor1, uColor2, pattern);
    finalColor = mix(finalColor, uColor3, layer1 * 0.5);
    finalColor += layer2 * 0.15;
    
    // Add subtle highlights
    float highlight = smoothstep(0.5, 0.8, pattern + layer1);
    finalColor += highlight * uHighlightIntensity;
    
    // Add subtle glow
    float glow = pow(pattern * layer1, 2.0) * uGlowIntensity;
    finalColor += glow;
    
    // Smooth color transitions
    finalColor = smoothstep(0.0, 1.0, finalColor);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`
