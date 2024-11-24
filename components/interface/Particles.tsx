'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particle settings
    const particles: Particle[] = []
    const particleCount = 50

    // Create particles
    const createParticle = () => {
      const centerX = canvas.width / 2
      const y = 100 // Adjust this value to match the bottom of your black box
      const angle = Math.random() * Math.PI
      const speed = Math.random() * 0.5 + 0.1

      return {
        x: centerX + (Math.random() - 0.5) * 50, // Spread particles horizontally
        y: y,
        size: Math.random() * 2 + 0.5,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        opacity: Math.random() * 0.5 + 0.2
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Fade out
        particle.opacity -= 0.005

        // Remove faded out particles and create new ones
        if (particle.opacity <= 0) {
          particles[index] = createParticle()
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

