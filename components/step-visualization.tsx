"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text, Billboard } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Pause, Play, RotateCcw } from "lucide-react"
import { glycolysisSteps } from "@/lib/glycolysis-data"

// Improved Molecule component with accurate representations
function Molecule({ position, color, label, type }) {
  // Determine molecule type
  const isGlucose = label.toLowerCase().includes("glucose")
  const isFructose = label.toLowerCase().includes("fructose")
  const isPyruvate = label.toLowerCase().includes("pyruvate")
  const isGAP = label.toLowerCase().includes("glyceraldehyde")
  const isPG = label.toLowerCase().includes("phosphoglycerate")
  const isPEP = label.toLowerCase().includes("phosphoenolpyruvate")
  const isDHAP = label.toLowerCase().includes("dihydroxyacetone")
  const is13BPG = label.toLowerCase().includes("1,3-bisphosphoglycerate")

  return (
    <group position={position}>
      {/* Main molecule structure - rotated to face viewer */}
      <group>
        {/* Glucose - hexagon ring */}
        {isGlucose && (
          <>
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.7, 0.15, 16, 6]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Oxygen in the ring */}
            <mesh castShadow receiveShadow position={[0.35, 0.6, 0]}>
              <sphereGeometry args={[0.18, 16, 16]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
          </>
        )}

        {/* Fructose - pentagon ring facing viewer */}
        {isFructose && (
          <>
            <mesh castShadow receiveShadow>
              <torusGeometry args={[0.7, 0.15, 16, 5]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Oxygen in the ring */}
            <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
              <sphereGeometry args={[0.18, 16, 16]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
          </>
        )}

        {/* Pyruvate - triangular structure with carbonyl group */}
        {isPyruvate && (
          <>
            <mesh castShadow receiveShadow rotation={[0, 0, 0]}>
              <tetrahedronGeometry args={[0.6, 0]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Carbonyl oxygen */}
            <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
            {/* Carboxyl group */}
            <mesh castShadow receiveShadow position={[0.6, -0.2, 0]}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial color="#22c55e" />
            </mesh>
          </>
        )}

        {/* Glyceraldehyde-3-phosphate - linear structure with aldehyde */}
        {isGAP && (
          <>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Aldehyde group */}
            <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
          </>
        )}

        {/* Phosphoglycerate - linear structure with carboxyl */}
        {isPG && (
          <>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Carboxyl group */}
            <mesh castShadow receiveShadow position={[0.4, 0.5, 0]}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial color="#22c55e" />
            </mesh>
          </>
        )}

        {/* Phosphoenolpyruvate - double bond structure */}
        {isPEP && (
          <>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.15, 1.0, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Double bond representation */}
            <mesh castShadow receiveShadow position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
              <meshStandardMaterial color="#3b82f6" />
            </mesh>
            {/* Carboxyl group */}
            <mesh castShadow receiveShadow position={[0, 0.6, 0]}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial color="#22c55e" />
            </mesh>
          </>
        )}

        {/* Dihydroxyacetone phosphate - ketone structure */}
        {isDHAP && (
          <>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.15, 1.0, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Ketone group */}
            <mesh castShadow receiveShadow position={[0, 0.2, 0.4]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
          </>
        )}

        {/* Default molecule for any not specifically handled */}
        {!isGlucose && !isFructose && !isPyruvate && !isGAP && !isPG && !isPEP && !isDHAP && (
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.7, 0.15, 16, 6]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}

        {/* Add phosphate groups for phosphorylated molecules */}
        {label.includes("phosphate") && !label.includes("bisphosphate") && !is13BPG && (
          <mesh castShadow receiveShadow position={[0.7, -0.5, 0]}>
            <tetrahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color="#fb923c" />
            {/* Oxygen atoms on phosphate */}
            {[...Array(4)].map((_, i) => {
              const angle = (i / 4) * Math.PI * 2
              const x = Math.cos(angle) * 0.25
              const y = Math.sin(angle) * 0.25
              return (
                <mesh key={i} position={[0.7 + x, -0.5 + y, 0]}>
                  <sphereGeometry args={[0.1, 8, 8]} />
                  <meshStandardMaterial color="#ef4444" />
                </mesh>
              )
            })}
          </mesh>
        )}

        {/* Add two phosphate groups for general bisphosphate molecules */}
        {label.includes("bisphosphate") && !is13BPG && (
          <>
            <mesh castShadow receiveShadow position={[0.7, -0.5, 0]}>
              <tetrahedronGeometry args={[0.3, 0]} />
              <meshStandardMaterial color="#fb923c" />
            </mesh>
            <mesh castShadow receiveShadow position={[-0.7, -0.5, 0]}>
              <tetrahedronGeometry args={[0.3, 0]} />
              <meshStandardMaterial color="#fb923c" />
            </mesh>
          </>
        )}

        {/* Special case for 1,3-bisphosphoglycerate with correctly positioned phosphate groups */}
        {is13BPG && (
          <>
            {/* Main carbon chain */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>

            {/* Carboxyl group at position 1 */}
            <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial color="#22c55e" />
            </mesh>

            {/* Phosphate at position 1 (attached to carboxyl) */}
            <mesh castShadow receiveShadow position={[0.4, 1.0, 0]}>
              <tetrahedronGeometry args={[0.25, 0]} />
              <meshStandardMaterial color="#fb923c" />
            </mesh>

            {/* Phosphate at position 3 */}
            <mesh castShadow receiveShadow position={[0, -0.7, 0]}>
              <tetrahedronGeometry args={[0.25, 0]} />
              <meshStandardMaterial color="#fb923c" />
            </mesh>

            {/* Oxygen atoms on phosphates (simplified) */}
            <mesh castShadow receiveShadow position={[0.6, 1.0, 0]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
            <mesh castShadow receiveShadow position={[0, -0.9, 0]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#ef4444" />
            </mesh>
          </>
        )}
      </group>

      {/* Billboard ensures text always faces the camera */}
      <Billboard position={[0, 1.5, 0]}>
        <Text fontSize={0.3} color={color} anchorX="center" anchorY="middle">
          {label}
        </Text>
      </Billboard>
    </group>
  )
}

// Star-shaped enzyme animation
function StarEnzymeAnimation({ isAnimating }) {
  const enzymeRef = useRef()
  const ringRef = useRef()

  // Animation using useFrame
  useFrame(({ clock }) => {
    if (!isAnimating) return

    const time = clock.getElapsedTime()

    // Slow rotation for the enzyme
    if (enzymeRef.current) {
      enzymeRef.current.rotation.y = time * 0.3
    }

    // Pulsing ring
    if (ringRef.current && ringRef.current.material) {
      // Scale pulsing
      const scalePulse = 1 + Math.sin(time * 1.5) * 0.1
      ringRef.current.scale.set(scalePulse, scalePulse, scalePulse)

      // Opacity pulsing
      const opacityPulse = 0.4 + Math.sin(time * 2) * 0.2
      ringRef.current.material.opacity = opacityPulse
    }
  })

  return (
    <group position={[0, 0.3, 0]}>
      {/* Star-shaped enzyme */}
      <group ref={enzymeRef}>
        {/* Create a star shape using multiple cones */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.3, Math.sin(angle) * 0.3, 0]}
              rotation={[0, 0, angle + Math.PI / 2]}
              castShadow
              receiveShadow
            >
              <coneGeometry args={[0.15, 0.5, 4]} />
              <meshStandardMaterial color="#9333ea" />
            </mesh>
          )
        })}

        {/* Center sphere */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#7e22ce" emissive="#7e22ce" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Pulsing ring around enzyme */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <torusGeometry args={[0.6, 0.05, 16, 32]} />
        <meshStandardMaterial color="#d8b4fe" emissive="#d8b4fe" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

// Simple enzyme label
function EnzymeLabel({ step, isAnimating }) {
  return (
    <Billboard position={[0, -1, 0]}>
      <Text fontSize={0.3} color="#9333ea" anchorX="center" anchorY="middle">
        {step.enzyme}
      </Text>
    </Billboard>
  )
}

function ReactionAnimation({ step, isAnimating }) {
  // Determine if this is step 5 or later
  const isLaterStep = step.id >= 5

  // Calculate molecule positions based on step
  const substratePosition = isLaterStep ? [-3.0, 0, 0] : [-2.5, 0, 0]
  const productPosition = isLaterStep ? [3.0, 0, 0] : [2.5, 0, 0]

  // Use a larger effective radius to ensure visual connection
  const effectiveRadius = 0.5 // Smaller than actual radius to ensure overlap
  const totalDistance = isLaterStep ? 6.0 : 5.0
  const lineLength = totalDistance - effectiveRadius * 2

  return (
    <group>
      {/* Substrate */}
      <Molecule position={substratePosition} color="#9333ea" label={step.substrate} type="substrate" />

      {/* Line connecting molecules - with connection caps */}
      <group>
        {/* Main line */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, lineLength, 8]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>

        {/* Left cap (at substrate) */}
        <mesh position={[-lineLength / 2, 0, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>

        {/* Right cap (at product) */}
        <mesh position={[lineLength / 2, 0, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      </group>

      {/* Product */}
      <Molecule position={productPosition} color="#3b82f6" label={step.product} type="product" />

      {/* Star enzyme animation */}
      {isAnimating && <StarEnzymeAnimation isAnimating={isAnimating} />}

      {/* Enzyme label */}
      <EnzymeLabel step={step} isAnimating={isAnimating} />

      {/* Energy indicators */}
      <Billboard position={[0, -1.5, 0]}>
        {step.energyChange && (
          <>
            {step.energyChange.includes("ATP consumed") && (
              <Text position={[0, 0, 0]} fontSize={0.25} color="#ef4444" anchorX="center" anchorY="middle">
                ATP → ADP + Pi
              </Text>
            )}
            {step.energyChange.includes("ATP produced") && (
              <Text position={[0, 0, 0]} fontSize={0.25} color="#22c55e" anchorX="center" anchorY="middle">
                ADP + Pi → ATP
              </Text>
            )}
            {step.energyChange.includes("NADH produced") && (
              <Text position={[0, -0.5, 0]} fontSize={0.25} color="#3b82f6" anchorX="center" anchorY="middle">
                NAD+ → NADH + H+
              </Text>
            )}
          </>
        )}
      </Billboard>
    </group>
  )
}

export default function StepVisualization({ stepId }: { stepId: number }) {
  const [isAnimating, setIsAnimating] = useState(true)
  const controlsRef = useRef()
  const step = glycolysisSteps[stepId - 1]

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
        <pointLight position={[-10, -10, 10]} />

        <ReactionAnimation step={step} isAnimating={isAnimating} />

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
