import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function ParticleField() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  const floatingIcons = useMemo(() => {
    const icons = ['⚛️', '🚀', '💻', '⚡', '🔥', '✨', '🎯', '🧩', '🛠️', '📦'];
    return icons.map((icon, i) => ({
      id: i,
      icon,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
      size: Math.random() * 12 + 16,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot particles */}
      {particles.map((p) => (
        <motion.div
          key={`p-${p.id}`}
          className="absolute rounded-full bg-blue-500"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating emoji icons */}
      {floatingIcons.map((f) => (
        <motion.div
          key={`f-${f.id}`}
          className="absolute select-none"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            fontSize: f.size,
          }}
          animate={{
            y: [0, -40, 20, -30, 0],
            x: [0, 20, -15, 10, 0],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            delay: f.delay,
            ease: 'easeInOut',
          }}
          initial={{ opacity: 0.15 }}
          whileHover={{ opacity: 1, scale: 2 }}
        />
      ))}

      {/* Animated grid lines */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
