import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Service Desk Triage AI',
    emoji: '🤖',
    description: 'An AI-powered tool that automatically categorizes and routes incoming IT support tickets using NLP, significantly reducing manual triage time.',
    tech: ['React', 'Node.js', 'OpenAI API', 'Tailwind'],
    link: '#',
    github: '#',
    color: 'from-blue-500/10 to-cyan-500/10',
    borderHover: 'hover:border-blue-500/50',
    difficulty: 'Advanced',
    xp: 850,
  },
  {
    title: 'Cloud Asset Manager',
    emoji: '☁️',
    description: 'A full-stack dashboard for tracking hardware and software assets across an organization. Features RBAC and automated compliance reporting.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    link: '#',
    github: '#',
    color: 'from-purple-500/10 to-violet-500/10',
    borderHover: 'hover:border-purple-500/50',
    difficulty: 'Advanced',
    xp: 920,
  },
  {
    title: 'Network Monitor Pro',
    emoji: '📡',
    description: 'A lightweight utility that pings critical services and visually alerts administrators before major outages. Born from a real IT pain point.',
    tech: ['Python', 'FastAPI', 'React', 'WebSockets'],
    link: '#',
    github: '#',
    color: 'from-emerald-500/10 to-green-500/10',
    borderHover: 'hover:border-emerald-500/50',
    difficulty: 'Intermediate',
    xp: 650,
  },
];

function DifficultyBadge({ level }: { level: string }) {
  const colorMap: Record<string, string> = {
    Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
  };
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${colorMap[level] || colorMap.Beginner}`}>
      {level}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-y border-zinc-800/30">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Work</span> 🏗️
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
            Quest log of completed projects. Each one earned XP and unlocked new abilities! 🎮
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`group rounded-2xl border border-zinc-800 ${project.borderHover} transition-all cursor-pointer hover:shadow-xl relative overflow-hidden`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Project Header with emoji */}
              <div className="h-40 bg-zinc-900/50 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50">
                <motion.span
                  className="text-6xl block"
                  whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                  transition={{ type: "spring" }}
                >
                  {project.emoji}
                </motion.span>
                {/* XP Badge */}
                <div className="absolute top-3 right-3 glass rounded-lg px-3 py-1 border border-zinc-700/50 flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">⭐</span>
                  <span className="text-yellow-400 text-xs font-bold font-mono">{project.xp} XP</span>
                </div>
                {/* Difficulty badge */}
                <div className="absolute top-3 left-3">
                  <DifficultyBadge level={project.difficulty} />
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-5 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="px-2.5 py-1 text-xs font-semibold bg-zinc-800/80 text-zinc-300 rounded-md border border-zinc-700/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-zinc-800/80 pt-4">
                  <a href={project.github} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5 hover:scale-105">
                    💻 Code
                  </a>
                  <a href={project.link} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-1.5 hover:scale-105">
                    🔗 Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
