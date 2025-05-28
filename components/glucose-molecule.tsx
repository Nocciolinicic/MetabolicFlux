"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Pause, Play, RotateCcw } from "lucide-react"

function GlucoseModel({ isRotating }) {
  const group = useRef()

  useFrame((state, delta) => {
    if (isRotating && group.current) {
      group.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={group} dispose={null} position={[0, -1, 0]} scale={1.5}>
      {/* Main glucose ring structure */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.3, 16, 6]} />
        <meshStandardMaterial color="#9333ea" />
      </mesh>

      {/* Oxygen atom in the ring */}
      <mesh castShadow receiveShadow position={[0.8, 0, 0.5]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Carbon atoms with hydroxyl groups */}
      {[
        [0.5, 0, -0.8],
        [-0.5, 0, -0.8],
        [-1, 0, 0],
        [-0.5, 0, 0.8],
        [0, 1, 0],
      ].map((pos, i) => (
        <group key={i} position={pos}>
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
          <mesh castShadow receiveShadow position={[pos[0] * 0.5, pos[1] * 0.5 + 0.4, pos[2] * 0.5]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color="#0ea5e9" />
          </mesh>
        </group>
      ))}

      <Text position={[0, 2.4, 0]} fontSize={0.5} color="#6d28d9" anchorX="center" anchorY="middle">
        Glucose
      </Text>
    </group>
  )
}

export default function GlucoseMolecule() {
  const [isRotating, setIsRotating] = useState(true)
  const controlsRef = useRef()

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="relative h-full w-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <GlucoseModel isRotating={isRotating} />
        <Environment preset="studio" />
        <OrbitControls ref={controlsRef} enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80"
          onClick={() => setIsRotating(!isRotating)}
        >
          {isRotating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80"
          onClick={resetView}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400">
        Rotate, zoom, and pan to explore
      </div>
    </div>
  )
}
