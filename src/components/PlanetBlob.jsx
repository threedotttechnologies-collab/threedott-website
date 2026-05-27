import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader, AdditiveBlending } from "three"
import { useMemo, useRef } from "react"

function BlobPlanetScene() {
  const planetRef = useRef()
  const coreRef = useRef()

  const textures = useLoader(TextureLoader, [
    "/blob1.png",
    "/blob2.png",
    "/blob3.png",
    "/blob4.png",
    "/blob5.png",
  ])

  const particles = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => {
      const radius = 1.1 + Math.random() * 0.9

      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi) * 0.72
      const z = radius * Math.sin(phi) * Math.sin(theta)

      const size = 0.03 + Math.random() * 0.065

      return {
        position: [x, y, z],
        scale: [size, size, 1],
        texture: textures[i % textures.length],
        opacity: 0.45 + Math.random() * 0.55,
      }
    })
  }, [textures])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (planetRef.current) {
      planetRef.current.rotation.y = t * 0.09
      planetRef.current.rotation.x =
        0.52 + Math.sin(t * 0.18) * 0.05

      planetRef.current.rotation.z =
        Math.sin(t * 0.12) * 0.03
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 1.5) * 0.08
      coreRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <group ref={planetRef}>
      {/* OUTER GLOW */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshBasicMaterial
          color="#465DFF"
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* MID GLOW */}
      <mesh>
        <sphereGeometry args={[0.78, 64, 64]} />
        <meshBasicMaterial
          color="#8B5CFF"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* CENTER CORE */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.32, 64, 64]} />
        <meshBasicMaterial
          color="#D9D5FF"
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* INNER LIGHT */}
      <mesh>
        <sphereGeometry args={[0.46, 64, 64]} />
        <meshBasicMaterial
          color="#7B5CFF"
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* PARTICLES */}
      {particles.map((p, i) => (
        <sprite
          key={i}
          position={p.position}
          scale={p.scale}
        >
          <spriteMaterial
            map={p.texture}
            transparent
            opacity={p.opacity}
            depthWrite={false}
            blending={AdditiveBlending}
          />
        </sprite>
      ))}
    </group>
  )
}

export default function PlanetBlob() {
  return (
<div
  className="
    absolute
    z-10
    pointer-events-none
    planet-glow

    /* MOBILE */
    left-[18%]
    top-[12%]

    /* SMALL TABLET */
    sm:left-[16%]
    sm:top-[20%]

    /* TABLET */
    md:left-[20%]
    md:top-[24%]

    /* DESKTOP */
    lg:left-1/2
    lg:top-[48%]
    lg:-translate-x-1/2
    lg:-translate-y-1/2

    w-[220px]
    h-[220px]

    sm:w-[280px]
    sm:h-[280px]

    md:w-[340px]
    md:h-[340px]

    lg:w-[420px]
    lg:h-[420px]

    xl:w-[480px]
    xl:h-[480px]
  "
>
      <Canvas
        camera={{
          position: [0, 0, 4.4],
          fov: 45,
        }}
      >
        <ambientLight intensity={1.8} />

        <BlobPlanetScene />
      </Canvas>
    </div>
  )
}