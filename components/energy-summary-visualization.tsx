"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text, Billboard } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Pause, Play, RotateCcw } from "lucide-react"

// Energy token component (ATP, NADH)
function EnergyToken({ position, type, isAnimating }) {
  const ref = useRef()
  const [hover, setHover] = useState(false)

  useFrame((state, delta) => {
    if (isAnimating && ref.current) {
      // Add a slight floating animation without rotation
      if (type === "atp" || type === "nadh") {
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
      }
    }
  })

  return (
    <group ref={ref} position={position} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
      {type === "atp" && (
        // ATP representation
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color={hover ? "#15803d" : "#22c55e"} />
        </mesh>
      )}

      {type === "adp" && (
        // ADP representation
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial color={hover ? "#b91c1c" : "#ef4444"} />
        </mesh>
      )}

      {type === "nadh" && (
        // NADH representation
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color={hover ? "#1e40af" : "#3b82f6"} />
        </mesh>
      )}

      {type === "glucose" && (
        // Glucose representation
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.6, 0.2, 16, 6]} />
          <meshStandardMaterial color={hover ? "#7e22ce" : "#9333ea"} />
        </mesh>
      )}

      {type === "pyruvate" && (
        // Pyruvate representation
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.6, 16]} />
          <meshStandardMaterial color={hover ? "#1e40af" : "#2563eb"} />
        </mesh>
      )}

      {type === "glycolysis" && (
        // Glycolysis process representation
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color={hover ? "#4c1d95" : "#6d28d9"} />
        </mesh>
      )}

      {hover && (
        <Billboard position={[0, type === "glycolysis" ? 1.2 : 0.8, 0]}>
          <Text
            fontSize={0.25}
            color={
              type === "atp"
                ? "#22c55e"
                : type === "adp"
                  ? "#ef4444"
                  : type === "nadh"
                    ? "#3b82f6"
                    : type === "glucose"
                      ? "#9333ea"
                      : type === "pyruvate"
                        ? "#2563eb"
                        : "#6d28d9"
            }
            anchorX="center"
            anchorY="middle"
            backgroundColor="rgba(255,255,255,0.7)"
            padding={0.1}
          >
            {type === "atp"
              ? "ATP"
              : type === "adp"
                ? "ADP"
                : type === "nadh"
                  ? "NADH"
                  : type === "glucose"
                    ? "Glucose"
                    : type === "pyruvate"
                      ? "Pyruvate"
                      : "Glycolysis"}
          </Text>
        </Billboard>
      )}
    </group>
  )
}

// Arrow component for energy flow
function FlowArrow({ start, end, color, isAnimating }) {
  const ref = useRef()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isAnimating) {
      setProgress(0)
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) return 0
        return prev + 0.02
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isAnimating])

  // Calculate direction vector
  const dir = [end[0] - start[0], end[1] - start[1], end[2] - start[2]]
  const length = Math.sqrt(dir[0] * dir[0] + dir[1] * dir[1] + dir[2] * dir[2])
  const norm = [dir[0] / length, dir[1] / length, dir[2] / length]

  // Calculate rotation to point in the right direction
  const angle = Math.atan2(norm[0], norm[2])
  const elevation = Math.asin(norm[1])

  return (
    <group ref={ref}>
      {/* Static arrow line */}
      <mesh
        position={[start[0] + dir[0] / 2, start[1] + dir[1] / 2, start[2] + dir[2] / 2]}
        rotation={[elevation, 0, angle]}
      >
        <cylinderGeometry args={[0.03, 0.03, length, 8]} />
        <meshStandardMaterial color={color} opacity={0.5} transparent />
      </mesh>

      {/* Animated particle along the arrow */}
      {isAnimating && (
        <mesh position={[start[0] + dir[0] * progress, start[1] + dir[1] * progress, start[2] + dir[2] * progress]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      )}

      {/* Arrow head */}
      <mesh position={end} rotation={[elevation, 0, angle]}>
        <coneGeometry args={[0.1, 0.3, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

// Main energy flow visualization
function EnergyFlow({ isAnimating }) {
  return (
    <group>
      {/* Glucose input */}
      <EnergyToken position={[-5, 2, 0]} type="glucose" isAnimating={isAnimating} />
      <Billboard position={[-5, 3, 0]}>
        <Text fontSize={0.3} color="#9333ea" anchorX="center" anchorY="middle">
          Glucose
        </Text>
      </Billboard>

      {/* ATP investment */}
      <group position={[-3, 2, 0]}>
        <EnergyToken position={[0, 0, 0]} type="adp" isAnimating={isAnimating} />
        <EnergyToken position={[0, 0.5, 0]} type="adp" isAnimating={isAnimating} />
        <Billboard position={[0, 1.2, 0]}>
          <Text fontSize={0.3} color="#ef4444" anchorX="center" anchorY="middle">
            -2 ATP
          </Text>
        </Billboard>
      </group>

      {/* Glycolysis process */}
      <EnergyToken position={[0, 0, 0]} type="glycolysis" isAnimating={isAnimating} />
      <Billboard position={[0, 1.5, 0]}>
        <Text fontSize={0.4} color="#6d28d9" anchorX="center" anchorY="middle" fontWeight="bold">
          Glycolysis
        </Text>
      </Billboard>

      {/* ATP production */}
      <group position={[3, 1, 0]}>
        <EnergyToken position={[0, 0, 0]} type="atp" isAnimating={isAnimating} />
        <EnergyToken position={[0, 0.5, 0]} type="atp" isAnimating={isAnimating} />
        <EnergyToken position={[0, 1, 0]} type="atp" isAnimating={isAnimating} />
        <EnergyToken position={[0, 1.5, 0]} type="atp" isAnimating={isAnimating} />
        <Billboard position={[0, 2.2, 0]}>
          <Text fontSize={0.3} color="#22c55e" anchorX="center" anchorY="middle">
            +4 ATP
          </Text>
        </Billboard>
      </group>

      {/* NADH production */}
      <group position={[3, -1, 0]}>
        <EnergyToken position={[0, 0, 0]} type="nadh" isAnimating={isAnimating} />
        <EnergyToken position={[0, 0.5, 0]} type="nadh" isAnimating={isAnimating} />
        <Billboard position={[0, 1.2, 0]}>
          <Text fontSize={0.3} color="#3b82f6" anchorX="center" anchorY="middle">
            +2 NADH
          </Text>
        </Billboard>
      </group>

      {/* Pyruvate output */}
      <group position={[5, 0, 0]}>
        <EnergyToken position={[0, 0, 0]} type="pyruvate" isAnimating={isAnimating} />
        <EnergyToken position={[0, 0.8, 0]} type="pyruvate" isAnimating={isAnimating} />
        <Billboard position={[0, 1.6, 0]}>
          <Text fontSize={0.3} color="#2563eb" anchorX="center" anchorY="middle">
            2 Pyruvate
          </Text>
        </Billboard>
      </group>

      {/* Flow arrows */}
      <FlowArrow start={[-5, 2, 0]} end={[-3, 2, 0]} color="#9333ea" isAnimating={isAnimating} />
      <FlowArrow start={[-3, 1.5, 0]} end={[-1, 0.5, 0]} color="#ef4444" isAnimating={isAnimating} />
      <FlowArrow start={[1, 0.5, 0]} end={[3, 1, 0]} color="#22c55e" isAnimating={isAnimating} />
      <FlowArrow start={[1, -0.5, 0]} end={[3, -1, 0]} color="#3b82f6" isAnimating={isAnimating} />
      <FlowArrow start={[1, 0, 0]} end={[5, 0, 0]} color="#2563eb" isAnimating={isAnimating} />

      {/* Net result */}
      <Billboard position={[0, -3, 0]}>
        <Text fontSize={0.4} color="#22c55e" anchorX="center" anchorY="middle" fontWeight="bold">
          Net Result: +2 ATP, +2 NADH, 2 Pyruvate
        </Text>
      </Billboard>
    </group>
  )
}

export default function EnergySummaryVisualization() {
  const [isAnimating, setIsAnimating] = useState(true)
  const controlsRef = useRef()

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="relative h-full w-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <EnergyFlow isAnimating={isAnimating} />

        <Environment preset="studio" />
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80"
          onClick={() => setIsAnimating(!isAnimating)}
        >
          {isAnimating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
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
